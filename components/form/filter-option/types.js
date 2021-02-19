/* @flow */

export type Filter = {
  field_name: string,
  operator: string,
  value: number | string | Array<*>
}

export type Operator = {
  display: string,
  symbol: string
}
