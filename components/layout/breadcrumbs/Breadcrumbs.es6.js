
import * as React from 'react'
import classnames from 'classnames'

import BreadcrumbEntry from './BreadcrumbEntry.es6.js'

import './Breadcrumbs.scss'


const EXPAND_MENU_WIDTH = 60
const SEPARATOR_WIDTH = 16

function getEntryWidth (entry) {
  if (!entry || !entry.current) {
    return 0
  }

  return entry.current.getBoundingClientRect().width
}

function Breadcrumbs ({ entries, onClick, maxEntryWidth }) {
  const lastIndex = entries.length - 1
  const containerRef = React.useRef(null)
  const entriesRefs = entries.map(entry => React.useRef(null))
  const expandRef = React.useRef(null)

  const [visibleEntries, setVisibleEntries] = React.useState([])
  const [hiddenEntries, setHiddenEntries] = React.useState([])
  const [isCollapseCalculated, setIsCollapseCalculated] = React.useState(false)
  const [isMenuOpened, setIsMenuOpened] = React.useState(false)
  const [shouldHandleOverflow, setShouldHandleOverflow] = React.useState(false)

  function onClickEntryWithIndex (index) {
    return function () {
      if (lastIndex !== index) {
        onClick(entries[index], index)

        if (isMenuOpened) {
          setIsMenuOpened(false)
        }
      }
    }
  }

  function toggleIsMenuOpened () {
    setIsMenuOpened(!isMenuOpened)
  }

  React.useEffect(function () {
    function onDocumentClick (event) {
      if (!isMenuOpened || !expandRef || !expandRef.current) {
        return
      }

      if (!expandRef.current.contains(event.target) && isMenuOpened) {
        setIsMenuOpened(false)
      }
    }

    document.addEventListener('click', onDocumentClick, false)
    document.addEventListener('touchend', onDocumentClick, false)

    return function () {
      document.removeEventListener('click', onDocumentClick, false)
      document.removeEventListener('touchend', onDocumentClick, false)
    }
  }, [expandRef, isMenuOpened, setIsMenuOpened])

  React.useEffect(function () {
    if (isCollapseCalculated) {
      return
    }

    const containerWidth = getEntryWidth(containerRef)
    // Always show first item
    let totalWidth = EXPAND_MENU_WIDTH + getEntryWidth(entriesRefs[0])
    // Amount if items in reversed order we can fit into `containerWidth`
    let visibleEntriesCount = 0

    // Reversed list of div referencies
    const entriesRefsReversed = [...entriesRefs].slice(1)
    entriesRefsReversed.reverse()

    // Find how many entries we can fit into `containerWidth`
    entriesRefsReversed.forEach(function (entryRef, index) {
      if (!entryRef.current) {
        return
      }

      let entryWidth = getEntryWidth(entryRef)
      if (entryWidth > maxEntryWidth) {
        // We're applying max-width to the entry without icon
        entryWidth = maxEntryWidth + SEPARATOR_WIDTH
      }
      totalWidth += entryWidth

      if (containerWidth >= totalWidth) {
        visibleEntriesCount++
      }
    })

    // What we have:
    // 1. Container width
    // 2. Amount of entries we can fit in reversed order
    //
    // What we should do:
    // 1. Add first entry to the visible list
    // 2. Add visible entries to the visible list
    // 3. Add entries we should hide to the hidden list

    const indexedEntries = entries.map((entry, index) => ({ index, entry, width: getEntryWidth(entriesRefs[index]) }))
    // In case if we have a really long last breadcrumb item
    if (!maxEntryWidth && visibleEntriesCount === 0 && indexedEntries.length > 1) {
      visibleEntriesCount = 1
      setShouldHandleOverflow(true)
    }
    const visible = indexedEntries.slice(indexedEntries.length - visibleEntriesCount)
    const hidden = indexedEntries.slice(1, indexedEntries.length - visibleEntriesCount)
    setIsCollapseCalculated(true)
    setVisibleEntries(visible)
    setHiddenEntries(hidden)
  }, [containerRef, ...entriesRefs, isCollapseCalculated])

  return (
    <div
      className={classnames('ds-tabbed-nav-wrapper ds-tabbed-nav-wrapper__breadcrumbs', { 'handle-overflow': shouldHandleOverflow })}
      ref={containerRef}
    >
      <div className="ds-tabbed-nav">
        {!isCollapseCalculated && (
          <div className="ds-tabbed-nav__breadcrumbs-container ds-tabbed-nav__breadcrumbs-container--not-calculated">
            {entries.map((entry, index) => (
              <BreadcrumbEntry
                key={`${entry.label}-${index}`}
                showSeparator={index !== 0}
                label={entry.label}
                ref={entriesRefs[index]}
                clickable={false}
              />
            ))}
          </div>
        )}

        {isCollapseCalculated && (
          <div className="ds-tabbed-nav__breadcrumbs-container">
            <BreadcrumbEntry
              showSeparator={false}
              showTooltip={false}
              label={entries[0].label}
              clickable={true}
              onClick={onClickEntryWithIndex(0)}
            />

            {hiddenEntries.length > 0 && (
              <React.Fragment>
                <div className="ds-tabbed-nav__breadcrumbs-entry">
                  <div className="ds-tabbed-nav__separator" />
                  <div className="ds-tabbed-nav__item" />
                </div>
                <div className="ds-tabbed-nav__breadcrumbs-entry ds-tabbed-nav__breadcrumbs-entry--expand">
                  <div
                    className="ds-tabbed-nav__breadcrumbs-entry-toggle"
                    onClick={toggleIsMenuOpened}
                  >
                    {`+${hiddenEntries.length}`}
                  </div>

                  <div ref={expandRef} className={classnames({
                    'ds-tabbed-nav__breadcrumbs-entry-menu': true,
                    'ds-tabbed-nav__breadcrumbs-entry-menu--opened': isMenuOpened
                  })}>
                    {hiddenEntries.map((entry, index) => (
                      <div
                        className="ds-tabbed-nav__breadcrumbs-entry-menu-item"
                        onClick={onClickEntryWithIndex(entry.index)}
                        key={`${entry.entry.label}-${index}`}
                      >
                        {entry.entry.label}
                      </div>
                    ))}
                  </div>
                </div>
              </React.Fragment>
            )}

            {visibleEntries.length > 0 && (
              <div className="ds-tabbed-nav__breadcrumbs-entry">
                <div className="ds-tabbed-nav__separator" />
                <div className="ds-tabbed-nav__item" />
              </div>
            )}

            {visibleEntries.map((entry, index) => (
              <BreadcrumbEntry
                clickable={(visibleEntries.length - 1) !== index}
                width={maxEntryWidth}
                showTooltip={(maxEntryWidth < entry.width)}
                showSeparator={index !== 0}
                key={`${entry.entry.label}-${index}`}
                label={entry.entry.label}
                onClick={onClickEntryWithIndex(entry.index)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Breadcrumbs
