import React from 'react'
import { filter, keys } from 'lodash'

import DemoLayoutContent from './demo-only-components/DemoLayoutContent'
import Group from '../../components/layout/panel/group/Group'
import TextField from '../../components/form/textfield/TextField'
import Select from '../../components/form/select/Select'
import MiniSelect from '../../components/form/select/MiniSelect'
import Option from '../../components/form/option/Option'
import TextArea from '../../components/form/textarea/TextArea'
import FileUpload from '../../components/form/file-upload/FileUpload'
import Radio from '../../components/form/radio/Radio'
import Checkbox from '../../components/form/checkbox/Checkbox'
import Divider from '../../components/layout/panel/divider/Divider'
import CheckboxMultipleSelect from '../../components/form/checkbox-multiple-select/CheckboxMultipleSelect'
import { handleSelectWithDependents } from '../../components/form/checkbox-multiple-select/CheckboxMultipleSelect.utils'
import B12DatePicker from '../../components/form/datetime-picker/DatePicker'
import DatetimePicker from '../../components/form/datetime-picker/DatetimePicker'
const selectOptions = ['Item 1', 'Item 2', 'Item 3', 'Item 4']
const complexSelectOptions = ['Free', 'All paid', 'Low ($)', 'Medium ($$)', 'High ($$$)']
const CHECKBOX_MULTI_SELECT_LABEL = 'Filter by Price'

class Inputs extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      checkboxMultiSelectSelectedOptions: [],
      checkboxMultiSelectDisabledOptions: [],
      filterListLabel: ''
    }
    this.handleFilterListChange = this.handleFilterListChange.bind(this)
  }

  handleFilterListChange (value, selected) {
    const selectConfig = [
      {
        controlOption: 'All paid',
        dependentOptions: ['Low ($)', 'Medium ($$)', 'High ($$$)']
      }
    ]
    const {
      selectedOptions,
      disabledOptions,
      label
    } = handleSelectWithDependents(filter(keys(selected), key => selected[key]), value, selectConfig, complexSelectOptions)
    this.setState({
      checkboxMultiSelectSelectedOptions: selectedOptions,
      checkboxMultiSelectDisabledOptions: disabledOptions,
      filterListLabel: label
    })
  }

  render () {
    return (
      <DemoLayoutContent>
        <div className="app-page-title">
          <h1>Inputs</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime aliquid suscipit natus rem, ipsa molestiae voluptate vero obcaecati voluptatibus ea nobis neque necessitatibus excepturi perferendis, fuga voluptatem totam quae quas.</p>
        </div>
        <div className="ds-row">
          <div className="ds-col">
            <h4 className="u-m-b-sm">Text inputs</h4>
            <Group>
              <TextField
                label="Placeholder"
                placeholder="Some value"
                value=""
                onUpdate={() => {}}
              />
            </Group>
            <Group>
              <TextField
                label="Default"
                value="The value"
                onUpdate={() => {}}
              />
            </Group>
            <Group>
              <TextField
                label="Default"
                value="The value"
                onUpdate={() => {}}
              />
            </Group>
            <Group>
              <TextField
                label="Locked"
                value="The value"
                locked
                onUpdate={() => {}}
              />
            </Group>
            <Group>
              <TextField
                label="Error"
                value="The value"
                errorMessage="This is the error message"
                error
                onUpdate={() => {}}
              />
            </Group>
            <Group>
              <TextField
                label="Success"
                value="The value"
                success
                onUpdate={() => {}}
              />
            </Group>
            <Group>
              <TextField
                label="Disabled"
                value="The value"
                disabled
                onUpdate={() => {}}
              />
            </Group>
            <Group>
              <TextField
                label="With helper text"
                help="Help message for this specific input"
                value="The value"
                onUpdate={() => {}}
              />
            </Group>
            <Group>
              <TextField
                label="Search"
                placeholder="The value"
                onUpdate={() => {}}
                searchIcon
              />
            </Group>
            <Group>
              <TextField
                value="Without label"
                onUpdate={() => {}}
              />
            </Group>
          </div>
          <div className="ds-col">
            <h4 className="u-m-b-sm">Select inputs</h4>
            <Group>
              <Select label="Default">
                <Option label="Option 1" key="option-1" value="1" style={{ color: 'red' }} />
                <Option label="Option 2" key="option-2" value="1" />
              </Select>
            </Group>
            <Group>
              <Select
                label="Error"
                error>
                <Option label="Option 1" key="option-1" value="1" />
                <Option label="Option 2" key="option-2" value="1" />
              </Select>
            </Group>
            <Group>
              <Select
                label="Disabled"
                disabled>
                <Option label="Option 1" key="option-1" value="1" />
                <Option label="Option 2" key="option-2" value="1" />
              </Select>
            </Group>
            <Group>
              <Select
                label="With helper text"
                help="Help message for this specific input">
                <Option label="Option 1" key="option-1" value="1" />
                <Option label="Option 2" key="option-2" value="1" />
              </Select>
            </Group>
            <Group>
              <Select
                label="Without search"
                search={false}>
                <Option label="Option 1" key="option-1" value="1" />
                <Option label="Option 2" key="option-2" value="1" />
              </Select>
            </Group>
            <Group>
              <Select
                placeholder="Search..."
                label="Inline search"
                inlineSearch>
                <Option label="Option 1" key="option-1" value="1" />
                <Option label="Option 2" key="option-2" value="1" />
              </Select>
            </Group>
            <br/>
            <h4 className="u-m-b-sm">MiniSelect</h4>
            <Group>
              <MiniSelect
                label="Mini Select"
                inputPlaceholder="Placeholder"
                selectValue="$"
                selectOptions={['$', '$$', '$$$']}
                inputValueChange={() => {}}
                selectValueChange={() => {}}
              />
            </Group>
            <Group>
              <MiniSelect
                label="Mini Select Disabled"
                inputPlaceholder="Placeholder"
                selectValue="$"
                inputDisabled
                selectDisabled
                selectPosition="right"
                selectOptions={['$', '$$', '$$$']}
                inputValueChange={() => {}}
                selectValueChange={() => {}}
              />
            </Group>
          </div>
        </div>
        <div className="ds-row">
          <div className="ds-col">
            <DatetimePicker dateOnly>
              <B12DatePicker isClearable />
            </DatetimePicker>
          </div>
        </div>
        <hr/>
        <div className="ds-row">
          <div className="ds-col">
            <h4 className="u-m-b-sm">Textarea</h4>
            <Group>
              <TextArea label="Default" />
            </Group>
            <Group>
              <TextArea label="Default with a placeholder" placeholder="Write something" />
            </Group>
            <Group>
              <TextArea label="Default with value" value="Here goes the content" />
            </Group>
            <Group>
              <TextArea label="Has error" value="Here goes the content" hasError />
            </Group>
            <Group>
              <TextArea label="Default 3 rows" rows={3} />
            </Group>
            <Group>
              <TextArea label="Not resizable" resizable={false}
                value="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime aliquid suscipit natus rem, ipsa molestiae voluptate vero obcaecati voluptatibus ea nobis neque necessitatibus excepturi perferendis, fuga voluptatem totam quae quas."
              />
            </Group>
            <Group>
              <TextArea label="With counter" counter="20 / 100" onChange={val => { console.log(val) }}/>
            </Group>
            <Group>
              <TextArea label="with counter error" counter="20 / 100" hasError />
            </Group>
          </div>
          <div className="ds-col">
            <h4 className="u-m-b-sm">Uploads</h4>
            <Group>
              <FileUpload multiple showButton/>
            </Group>
            <Group>
              <FileUpload showDropzone dropzoneLabel="Drop the file here..." showButton={false} />
            </Group>
            <Group>
              <FileUpload showDropzone loading dropzoneLabel="Uploading..." showButton={false} />
            </Group>
          </div>
        </div>
        <hr/>
        <div className="ds-row">
          <div className="ds-col">
            <h4 className="u-m-b-sm">Special selects <i style={{color: 'red'}}>(Deprecated)</i></h4>
            <Group>
              <Select
                label="Default"
                preview="img/2-col-text-image.png">
                <Option
                  label="Option 1"
                  key="option-1"
                  value="1"
                  preview="img/2-col-contact.png"
                />
                <Option
                  label="Option 2"
                  key="option-2"
                  value="1"
                  preview="img/custom.png"
                />
              </Select>
            </Group>
          </div>
          <div className="ds-col">
            <h4 className="u-m-b-sm">Special inputs</h4>
            <TextField
              label="Color picker"
              value="#F2D63D"
              onUpdate={(value) => {
                this.setState({ color: value })
              }}
              color
            />
          </div>
        </div>
        <hr/>
        <hr/>
        <div className="ds-row">
          <div className="ds-col">
            <Group label="Checkbox">
              <Checkbox label="Default" />
              <Checkbox label="Checked" checked />
              <Checkbox label="Indeterminate" indeterminate />
              <Checkbox label="Indeterminate disabled" indeterminate disabled/>
              <Checkbox label="Disabled" disabled />
              <Checkbox label="Checked disabled" val="checked disabled" checked disabled />
              <Checkbox label="With error" hasError />
              <Checkbox label="With error checked" hasError checked/>
            </Group>
          </div>
          <div className="ds-col">
            <Group label="Radio">
              <Radio label="Default" val="default" />
              <Radio label="Checked" val="checked" checked />
              <Radio label="Disabled" val="disabled" disabled />
              <Radio label="Checked disabled" val="checked disabled" checked disabled />
            </Group>
          </div>
        </div>
        <hr/>
        <div className="ds-row">
          <div className="ds-col">
            <h4 className="u-m-b-sm">Checkbox Multiple Select</h4>
            <h5>Basic</h5>
            <CheckboxMultipleSelect
              options={selectOptions}
            />
            <Divider />
            <h5>Pass selected and disabled options</h5>
            <CheckboxMultipleSelect
              options={selectOptions}
              selectedOptions={['Item 1', 'Item 2', 'Item 4']}
              disabledOptions={['Item 4']}
            />
            <Divider />
            <h5>Complex logic</h5>
            <CheckboxMultipleSelect
              unselectedLabel={CHECKBOX_MULTI_SELECT_LABEL}
              selectedLabel={this.state.filterListLabel}
              options={complexSelectOptions}
              selectedOptions={this.state.checkboxMultiSelectSelectedOptions}
              disabledOptions={this.state.checkboxMultiSelectDisabledOptions}
              onChange={this.handleFilterListChange}
            />
          </div>
          <div className="ds-col"></div>
        </div>
      </DemoLayoutContent>
    )
  }
}

export default Inputs
