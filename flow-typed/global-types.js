/* @flow */
import type { Element } from 'react'

declare type UUID = string
declare type ID = number
declare type SemanticSectionGroup = {
  icon: ?string,
  title: string,
  value: number
}

declare type Media = {
  id?: ID,
  thumbnail?: string,
  uuid: UUID,
  url: ?string
}
