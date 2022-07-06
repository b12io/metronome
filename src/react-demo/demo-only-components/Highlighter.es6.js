/* eslint-disable */
import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { prism } from 'react-syntax-highlighter/styles/prism'

function Highlighter ({ children, language }) {
  return (
    <SyntaxHighlighter language={language} style={prism} CodeTag='div' customStyle={{whiteSpace: 'pre-wrap'}} className="hljs">{children}</SyntaxHighlighter>
  )
}

export default Highlighter
