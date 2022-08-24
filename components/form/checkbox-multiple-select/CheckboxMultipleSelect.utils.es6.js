import { union, without, uniq, intersection } from 'lodash'

/**
 * Handles defining selected, disabled and label options based on passed
 * dependent controls that are passed as selectConfig. It is being called for every
 * CheckboxMultiSelect change.
 *
 * @param  {Array<string>} selected - Selected values after the checkbox was checked or unchecked
 * @param  {string} currentActionOption - Current checkbox value that was either checked or unchecked
 * @param  {Array<selectConfig>} selectConfig - Config for defining dependent control options
 * @param  {Array<string>} options - Array of all options to be used for sorting option order
 * @return Object of selected, disabled and label options
 *
 * ```
 * selectConfig = [
 *  {
 *    controlOption: 'All paid',
 *    dependentOptions: ['Low', 'Medium', 'High']
 *  }
 * ]
 * ```
 */
export const handleSelectWithDependents = (
  selected,
  currentActionOption,
  selectConfig,
  options
) => {
  let selectedOptions = selected
  let disabledOptions = []
  let labelOptions = selected
  selectConfig.map((config) => {
    const hasControlOption = selected.indexOf(config.controlOption) !== -1
    if (currentActionOption === config.controlOption) {
      if (hasControlOption) {
        selectedOptions = union(selectedOptions, config.dependentOptions)
        disabledOptions = uniq([...disabledOptions, ...config.dependentOptions])
      } else {
        selectedOptions = without(selectedOptions, ...config.dependentOptions)
      }
      labelOptions = without(selectedOptions, ...config.dependentOptions)
    } else {
      // We need this to preserve dependents of already selected options
      if (hasControlOption) {
        labelOptions = without(selectedOptions, ...config.dependentOptions)
        disabledOptions = uniq([...disabledOptions, ...config.dependentOptions])
      }
    }
  })

  return {
    selectedOptions,
    disabledOptions,
    label: intersection(options, labelOptions).join(', ')
  }
}
