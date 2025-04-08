import React, { useState } from 'react'
import DemoLayoutContent from './demo-only-components/DemoLayoutContent.es6.js'
import CodeExample from './demo-only-components/CodeExample.es6.js'
import MetaData from './demo-only-components/MetaData.es6.js'
import Button from '../../components/form/button/Button.es6.js'

import { MetaDataProps, MetaDataPropsItem } from './demo-only-components/MetaDataProps.es6.js'
import {
  PromptInput, PromptInputTextarea, PromptInputActions,
  PromptInputSelectors, PromptInputCommands
} from '../../components/form/prompt-input'

import { ArrowUp, Microphone, Website, EditColor, AiAssist, AiImage } from '../../components/Icons.es6.js'

import useAutoResizeTextarea from '../../components/lib/useAutoResizeTextarea.js'

const RangeSliderProps = [
  {
    property: 'align',
    value: 'left | center | right',
    defaultValue: 'left',
    description: 'Content alignment'
  },
  {
    property: 'className',
    value: 'string | Object',
    defaultValue: '-',
    description: 'Apply classes if needed'
  }
]

export default function PromptInputPage () {
  const [message, setMessage ] = useState('')
  const { textareaRef, resizeTextarea } = useAutoResizeTextarea(message)

  const handleInputChange = (e) => {
    const newMessage = e.target.value
    setMessage(newMessage)
  }

  return (
    <DemoLayoutContent>
      <div className="app-page-title">
        <h1>PromptInput</h1>
        <p>An input field that allows users to enter and submit text to an AI model.</p>
        <MetaData
          importFrom="import PromptInput from '@b12/metronome/components/form/prompt-input/PromptInput.es6.js'"
          flow="Yes"
          tests="No"
        />
      </div>
      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Example</h4>
        </div>

        <CodeExample code={`<SimpleCard className="customize-classname" align="center">
  Any content
</SimpleCard>
`}>
          <PromptInput>
            <PromptInputTextarea
              placeholder="Share your business name and a description of your website, or start with an example below..."
              rows={3}
              textareaRef={textareaRef}
              value={message}
              onChange={handleInputChange}
            />
            <PromptInputActions>
            <PromptInputSelectors>
              <Button roundedRectangle iconWithLabel icon={<Website width={14} height={14} />} label="Website style" />
              <Button roundedRectangle iconWithLabel icon={<EditColor width={14} height={14} />} label="Color" viewBox="0 0 14 14" />
              <Button roundedRectangle iconWithLabel icon={<AiImage width={14} height={12} viewBox='0 0 14 12' />} label="Image style" />
              <Button roundedRectangle disabled iconWithLabel icon={<AiAssist width={14} height={14} />} label="Enhance Prompt" />
            </PromptInputSelectors>
            <PromptInputCommands>
              <Button roundLight icon={<Microphone width={14} height={14} viewBox="0 0 11 13" />} />
              <Button round disabled icon={<ArrowUp width={14} height={14} viewBox="0 0 12 14" />} />
            </PromptInputCommands>
            </PromptInputActions>
          </PromptInput>
        </CodeExample>
      </div>
      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Props</h4>
        </div>

        <MetaDataProps>
          {RangeSliderProps.map(prop => (
            <MetaDataPropsItem
              key={prop.property}
              property={prop.property}
              value={prop.value}
              defaultValue={prop.defaultValue}
              description={prop.description}
            />
          ))}
        </MetaDataProps>
      </div>
    </DemoLayoutContent>
  )
}
