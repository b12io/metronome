import React from 'react'
import classnames from 'classnames'
import { isEmpty } from 'lodash'

import { Help, Search, Close } from '../../Icons.es6.js'
import Option from '../option/Option.es6.js'

class Select extends React.Component {
  constructor (props) {
    super(props)

    this.onToggle = this.onToggle.bind(this)
    this.onSearch = this.onSearch.bind(this)
    this.handleDocumentClick = this.handleDocumentClick.bind(this)
    this.handleClearSearch = this.handleClearSearch.bind(this)
    this.options = this.updateOptions(props.children)

    this.state = {
      isOpened: false,
      query: '',
      filteredOptions: props.search ? props.filter(this.options, '') : this.options
    }
  }

  componentDidMount () {
    document.addEventListener('click', this.handleDocumentClick, false)
    document.addEventListener('touchend', this.handleDocumentClick, false)
  }

  componentWillReceiveProps (nextProps) {
    const {children, search, filter} = nextProps
    this.options = this.updateOptions(children)
    this.setState({
      filteredOptions: search ? filter(this.options, this.state.query) : this.options
    })
  }

  componentDidUpdate () {
    if (this.props.search && this.state.isOpened && this.searchInput) {
      this.searchInput.focus()
    }
  }

  componentWillUnmount () {
    document.removeEventListener('click', this.handleDocumentClick, false)
    document.removeEventListener('touchend', this.handleDocumentClick, false)
  }

  onToggle () {
    if (this.props.disabled) {
      return
    }

    this.setState(({ isOpened }) => ({
      isOpened: !isOpened
    }))
  }

  onSearch (value) {
    const { filter } = this.props
    const query = value.replace(/^\s+/, '')
    const filteredOptions = filter(this.options, query)
    this.setState({
      query,
      filteredOptions
    }, () => {
      if (!query) {
        this.props.onSearchQueryClear()
      }
    })
  }

  shouldToggle (idx, value) {
    const { firstOptionAction, keepOpen } = this.props
    const isActionOption = firstOptionAction && idx === 0
    return !((isActionOption || keepOpen(value)) && this.state.isOpened)
  }

  updateOptions (children) {
    return React.Children.map(children, (child, idx) => {
      return React.cloneElement(child, {
        onOptionClick: (value) => {
          if (this.shouldToggle(idx, value)) {
            this.onToggle()
          }
          this.props.onChange(value)
          if (this.props.search && this.props.fillSelectedQuery) {
            setTimeout(() => {
              this.onSearch(child.props.label)
            })
          }
        }
      })
    })
  }

  handleDocumentClick (event) {
    if (!this.mainNode) {
      return
    }

    if (!this.mainNode.contains(event.target) && this.state.isOpened) {
      this.setState({ isOpened: false }, () => {
        this.props.onBlur && this.props.onBlur()
      })
    }
  }

  handleClearSearch (e) {
    this.setState({
      query: '',
      filteredOptions: this.options,
      isOpened: true
    }, () => {
      this.props.onSearchQueryClear()
    })
  }

  render () {
    const {error, disabled, className, label, preview, inlineSearch, placeholder, search, help} = this.props
    const {query, filteredOptions, isOpened} = this.state
    return (
      <div className={classnames({
        'ds-form-group': true,
        'ds-form-group--select': true,
        'has-feedback': error || disabled,
        'has-error': error,
        'is-disabled': disabled
      }, className)}
      ref={(node) => { this.mainNode = node }}
      >
        {label && <div className="ds-control-label">{label}</div>}
        <div className={classnames({
          'ds-form-control-select': true,
          'ds-form-control-select--media': preview !== null,
          'ds-form-control-select--focused': isOpened,
          'ds-form-control-select--inline-search': inlineSearch
        })}
        >
          {/* Toggle dropdown */}
          <div
            className="ds-form-control ds-form-control-select__toggle"
            onClick={this.onToggle}
          >
            {inlineSearch && <Search color="#ddd" />}
            {inlineSearch && query ? query : placeholder}
            {preview && <img src={preview} alt={placeholder} />}
          </div>

          {/* Options */}
          <div className="ds-form-control-select__dropdown">
            {search && <div className="ds-form-control-select__search">
              <Search color="#ddd" />
              <input
                type="text"
                placeholder="Search..."
                value={query}
                ref={(node) => { this.searchInput = node }}
                onChange={(e) => this.onSearch(e.target.value)}
              />
              {inlineSearch && <div
                className={classnames('ds-form-control-select__search-clear', {
                  'is-hidden': !query
                })}
                onClick={this.handleClearSearch}
              >
                <Close color="#ddd" />
              </div>}
            </div>}

            <div className="ds-form-control-select__dropdown-options">
              {filteredOptions}
            </div>
          </div>
        </div>

        {/* Show help message */}
        {!isEmpty(help)
          ? <div className="ds-form-group__help-text">
            <Help color="#ddd" />
            <span>{help}</span>
          </div>
          : null}
      </div>
    )
  }
}

Select.defaultProps = {
  firstOptionAction: false,
  placeholder: 'Please select',
  preview: null,
  help: '',
  options: [],
  error: false,
  search: true,
  disabled: false,
  onChange: () => {},
  filter: options => options,
  children: [],
  keepOpen: () => {},
  inlineSearch: false,
  onSearchQueryClear: () => {},
  fillSelectedQuery: false
}

export default Select
