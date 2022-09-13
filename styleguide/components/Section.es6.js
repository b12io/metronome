
import React from 'react'


const Section = ({
  slug,
  content,
  components,
  sections
}) => {
  return (
    <div className="app__body-content">
      {content}
      {sections}
      {components}
    </div>
  )
}

export default Section
