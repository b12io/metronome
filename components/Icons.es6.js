/* eslint-disable no-param-reassign, react/prop-types, max-len */
/**
 * Some icons in this file are provided by Nucleo. The Nucleo copyright notice is included below.
 * Copyright (C) Amber Creative S.R.L.
 *
 * Version 1, 2 July 2018
 *
 * Nucleo Icons
 *
 * https://nucleoapp.com/
 *
 * The Nucleo icons are copyrighted. Redistribution is not permitted. Use in source and binary forms, with or without modification, is permitted only if you possess a Nucleo icons license.
 *
 * Please refer to the license for additional information https://nucleoapp.com/license
 */
import React from 'react'
import PropTypes from 'prop-types'
import { assign, each } from 'lodash'
import { propTypeRegExp } from './lib/helpers.es6.js'

const defaultColor = '#d8d8d8'
const defaultProps = {
  color: defaultColor,
  className: '',
  viewBox: '0 0 16 16',
  height: 16,
  width: 16,
  solid: 'true'
}
const defaultPropTypes = {
  color: propTypeRegExp(/^#([a-f0-9]{6}|[a-f0-9]{3})$/i),
  className: PropTypes.string,
  viewBox: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  style: PropTypes.object,
  solid: PropTypes.string
}

function Icon ({ color, className, path, viewBox, width, height, style }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} style={style} xmlns="http://www.w3.org/2000/svg">
      <path d={path} fillRule="nonzero" fill={color} />
    </svg>
  )
}

function Check (props) {
  const path = 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7 11.4L3.6 8 5 6.6l2 2 4-4L12.4 6 7 11.4z'
  return <Icon path={path} {...props} />
}

function Checkmark (props) {
  const path = 'M10 1.4L8.409 0 3.8637 4 1.591 2 0 3.4l3.8636 3.4z'
  return <Icon path={path} {...props} viewBox="0 0 10 7" />
}

function Lock (props) {
  const path = 'M7 0C4.8 0 3 1.8 3 4v1H1c-.6 0-1 .4-1 1v9c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1h-2V4c0-2.2-1.8-4-4-4zm1 11.7V13H6v-1.3c-.6-.3-1-1-1-1.7 0-1.1.9-2 2-2s2 .9 2 2c0 .7-.4 1.4-1 1.7zM9 5H5V4c0-1.1.9-2 2-2s2 .9 2 2v1z'
  return <Icon path={path} {...props} />
}

function Notice (props) {
  const path = 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z'
  return <Icon path={path} {...props} />
}

function CloseMedia (props) {
  const path = 'M6.1.5L4 2.6 1.9.5.5 1.9 2.6 4 .5 6.1l1.4 1.4L4 5.4l2.1 2.1 1.4-1.4L5.4 4l2.1-2.1'
  return <Icon path={path} {...props} />
}

function Disabled (props) {
  const path = 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 2c1.3 0 2.5.4 3.5 1.1l-8.4 8.4C2.4 10.5 2 9.3 2 8c0-3.3 2.7-6 6-6zm0 12c-1.3 0-2.5-.4-3.5-1.1l8.4-8.4c.7 1 1.1 2.2 1.1 3.5 0 3.3-2.7 6-6 6z'
  return <Icon path={path} {...props} />
}

function Search (props) {
  const path = 'M55.146 51.887L41.588 37.786c3.486-4.144 5.396-9.358 5.396-14.786 0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837 1.192-1.147 1.23-3.049.083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z'
  return <Icon path={path} {...props} viewBox="0 0 56.966 56.966" />
}

function Draggable (props) {
  const path = 'M0 0h3v3H0zm7 0h3v3H7zM0 7h3v3H0zm7 0h3v3H7zm-7 7h3v3H0zm7 0h3v3H7z'
  return <Icon path={path} {...props} viewBox="0 0 10 17" />
}

function ChevronRight (props) {
  const path = 'M6.8 5.4l-5.4 5.4L0 9.4l4-4-4-4L1.4 0'
  return <Icon path={path} {...props} viewBox="0 0 7 11" />
}

function ChevronLeft (props) {
  const path = 'M0 5.4l5.4 5.4 1.4-1.4-4-4 4-4L5.4 0z'
  return <Icon path={path} {...props} viewBox="0 0 7 11" />
}

function Home (props) {
  const path = 'M10.948 16h2c.599 0 .999-.402.999-1.005V7.962h.999c.3 0 .6-.1.8-.301.4-.402.3-1.005-.1-1.407L8.65.226c-.4-.301-.9-.301-1.3 0L.354 6.254c-.4.402-.5 1.005-.1 1.407.1.2.4.301.7.301h1v7.033c0 .603.4 1.005.999 1.005h1.999c.6 0 1-.402 1-1.005v-3.014h3.997v3.014c0 .603.4 1.005 1 1.005z'
  return <Icon path={path} {...props} />
}

function TimesCircle (props) {
  const path = 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm4 9H9v3H7V9H4V7h3V4h2v3h3v2z'
  return <Icon path={path} {...props} style={{transform: 'rotate(45deg)'}} />
}

function RemoveCircle ({className, width, height, style, color, solid}) {
  if (solid) {
    return (
      <svg className={className} width={width} height={height} style={style} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="nonzero" fill={color} d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm2.121 11.536L8 9.414l-2.121 2.122-1.415-1.415L6.586 8 4.464 5.879 5.88 4.464 8 6.586l2.121-2.122 1.415 1.415L9.414 8l2.122 2.121-1.415 1.415z"/>
      </svg>
    )
  } else {
    return (
      <svg className={className} width={width} height={height} style={style} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="nonzero" fill={color} d="M8 16C6.4 16 4.9 15.5 3.6 14.7 2.2 13.8 1.2 12.5 0.6 11.1 0 9.6-0.2 8 0.2 6.4 0.5 4.9 1.2 3.5 2.3 2.3 3.5 1.2 4.9 0.5 6.4 0.2 8-0.2 9.6 0 11.1 0.6 12.5 1.2 13.8 2.2 14.7 3.6 15.5 4.9 16 6.4 16 8 16 10.1 15.2 12.2 13.7 13.7 12.2 15.2 10.1 16 8 16ZM8 1C6.6 1 5.3 1.4 4.1 2.2 3 2.9 2.1 4 1.5 5.3 1 6.6 0.9 8 1.1 9.4 1.4 10.7 2.1 12 3.1 12.9 4 13.9 5.3 14.6 6.6 14.9 8 15.1 9.4 15 10.7 14.5 12 13.9 13.1 13 13.8 11.9 14.6 10.7 15 9.4 15 8 15 6.1 14.3 4.4 12.9 3.1 11.6 1.7 9.9 1 8 1Z"/>
        <path fillRule="nonzero" fill={color} d="M4.6 10.3C4.3 10.6 4.3 11.1 4.6 11.4 4.9 11.7 5.4 11.7 5.7 11.4L8 9.1 10.3 11.4C10.6 11.7 11.1 11.7 11.4 11.4 11.7 11.1 11.7 10.6 11.4 10.3L9.1 8 11.4 5.7C11.7 5.4 11.7 4.9 11.4 4.6 11.1 4.3 10.6 4.3 10.3 4.6L8 6.9 5.7 4.6C5.4 4.3 4.9 4.3 4.6 4.6 4.3 4.9 4.3 5.4 4.6 5.7L6.9 8 4.6 10.3Z"/>
      </svg>
    )
  }
}

function PlusCircle (props) {
  const path = 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm4 9H9v3H7V9H4V7h3V4h2v3h3v2z'
  return <Icon path={path} {...props} />
}

function Minus ({className, width, height, style, color}) {
  return (
    <svg className={className} width={width} height={height} style={style} viewBox="0 0 16 2" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 0h14a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2z" fill={color} fillRule="evenodd"></path>
    </svg>
  )
}

function Plus ({className, width, height, style, color}) {
  return (
    <svg className={className} width={width} height={height} style={style} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" fillRule="nonzero" fill={color}></path>
    </svg>
  )
}

function Gear ({className, width, height, style, color}) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 20 20" style={style} xmlns="http://www.w3.org/2000/svg">
      <path d="M15.32 5.344l1.78-1.782L15.437 1.9l-1.78 1.78c-.832-.593-1.9-1.068-2.97-1.186V0H8.313v2.494c-1.07.237-2.138.593-2.97 1.187L3.682 1.9 1.9 3.68l1.78 1.783c-.593.712-1.068 1.78-1.186 2.85H0v2.374h2.494c.237 1.07.593 2.138 1.187 2.97l-1.78 1.78L3.563 17.1l1.78-1.78c.832.592 1.9 1.067 2.97 1.186V19h2.374v-2.494c1.07-.237 2.138-.594 2.97-1.187l1.78 1.78 1.663-1.663-1.78-1.78c.592-.832 1.067-1.9 1.186-2.97H19V8.313h-2.494c-.12-1.07-.594-2.138-1.187-2.97zM9.5 13.062c-2.02 0-3.563-1.543-3.563-3.562 0-2.02 1.544-3.563 3.563-3.563 2.02 0 3.563 1.544 3.563 3.563 0 2.02-1.544 3.563-3.563 3.563z" fill={color}></path>
    </svg>
  )
}

function ShoppingCart ({ color, className, path, viewBox, width, height, style }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} style={style} xmlns="http://www.w3.org/2000/svg">
      <circle id="Oval" cx="3" cy="14" r="2" fill={color}></circle>
      <polygon id="Shape" points="6.037 0 6.037 7 15 7 15 0" fill={color}></polygon>
      <path d="M16,9 L4,9 L4,1 C4,0.4 3.6,0 3,0 L0,0 L0,2 L2,2 L2,10 C2,10.6 2.4,11 3,11 L11.323,11 L13.071,15.371 L14.928,14.629 L13.477,11 L16,11 L16,9 Z" fill={color}></path>
    </svg>
  )
}

function Team ({ color, className, path, viewBox, width, height, style }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} style={style} xmlns="http://www.w3.org/2000/svg">
      <path d="M9 11.836c0-.604-.265-1.179-.738-1.554C7.539 9.708 6.285 9 4.5 9s-3.039.708-3.762 1.282c-.473.375-.738.95-.738 1.554V13h9v-1.164z" fill={color}></path>
      <circle cx="4.5" cy="5.5" r="2.5" fill={color}></circle>
      <circle cx="11.5" cy="5.5" r="2.5" fill={color}></circle>
      <path d="M15.262 10.282C14.539 9.708 13.285 9 11.5 9c-.561 0-1.063.075-1.519.189A3.954 3.954 0 0 1 11 11.836V13h5v-1.164c0-.604-.265-1.179-.738-1.554z" fill={color}></path>
    </svg>
  )
}

function Briefcase ({ color, className, path, viewBox, width, height, style }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} style={style} xmlns="http://www.w3.org/2000/svg">
      <path d="M16,10 L16,5 C16,4.4 15.6,4 15,4 L12,4 L12,1 C12,0.4 11.6,0 11,0 L5,0 C4.4,0 4,0.4 4,1 L4,4 L1,4 C0.4,4 0,4.4 0,5 L0,10 C0,10.6 0.4,11 1,11 L15,11 C15.6,11 16,10.6 16,10 Z M6,2 L10,2 L10,4 L6,4 L6,2 Z" fill={color}></path>
      <path d="M1,13 L1,15 C1,15.6 1.4,16 2,16 L14,16 C14.6,16 15,15.6 15,15 L15,13 L1,13 Z" id="Shape" fill={color}></path>
    </svg>
  )
}

function Image ({ color, className, path, viewBox, width, height, style }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} style={style} xmlns="http://www.w3.org/2000/svg">
      <path d="M15.895,12.553 L11.895,4.553 C11.742,4.248 11.445,4.041 11.106,4.006 C10.768,3.967 10.433,4.11 10.22,4.375 L6.792,8.659 L4.555,7.168 C4.327,7.017 4.046,6.964 3.781,7.024 C3.514,7.084 3.283,7.251 3.143,7.485 L0.143,12.485 C-0.043,12.794 -0.047,13.178 0.13,13.493 C0.307,13.807 0.64,14 1,14 L15,14 C15.347,14 15.668,13.82 15.851,13.525 C16.034,13.23 16.049,12.862 15.895,12.553 Z" fill={color}></path>
      <circle id="Oval" cx="6" cy="2" r="2" fill={color}></circle>
    </svg>
  )
}

function Video ({ color, className, path, viewBox, width, height, style }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} style={style} xmlns="http://www.w3.org/2000/svg">
      <path d="M15,0 L1,0 C0.4,0 0,0.4 0,1 L0,13 C0,13.6 0.4,14 1,14 L15,14 C15.6,14 16,13.6 16,13 L16,1 C16,0.4 15.6,0 15,0 Z M14,12 L2,12 L2,2 L14,2 L14,12 Z" fill={color}></path>
      <polygon id="Shape" points="6 4 6 10 10 7" fill={color}></polygon>
    </svg>
  )
}

function Play (props) {
  const path = 'M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0ZM6,11.33V4.67L11.33,8Z'
  return <Icon path={path} {...props} />
}

function Pause (props) {
  const path = 'M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0ZM7.2,11.2H5.6V4.8H7.2Zm3.2,0H8.8V4.8h1.6Z'
  return <Icon path={path} {...props} />
}

function Camera ({ color, className, path, width, height, viewBox, style }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width={width} height={height} viewBox="0 0 42 30" style={style}><defs><filter id="a" x="327" y="192" width="42" height="30" filterUnits="userSpaceOnUse"><feOffset result="offset" dy="2" in="SourceAlpha"/><feGaussianBlur result="blur" stdDeviation="2.449"/><feFlood result="flood" floodOpacity=".45"/><feComposite result="composite" operator="in" in2="blur"/><feBlend result="blend" in="SourceGraphic"/></filter></defs><path d="M350.1 195h-14.6a3.53 3.53 0 0 0-3.5 3.538v11.924a3.53 3.53 0 0 0 3.5 3.538h14.6a3.53 3.53 0 0 0 3.5-3.538v-11.924a3.508 3.508 0 0 0-3.5-3.538zm11.308 1.946a1.768 1.768 0 0 0-.595.248l-5.462 3.184v8.209l5.5 3.184a2.07 2.07 0 0 0 2.871-.778 2.184 2.184 0 0 0 .28-1.062V199a2.113 2.113 0 0 0-2.593-2.054z" transform="translate(-327 -192)" fill={color} fillRule="evenodd" filter="url(#a)"/></svg>
  )
}

function Award ({ color, className, path, viewBox, width, height, style }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} style={style} xmlns="http://www.w3.org/2000/svg">
      <path d="M13,16 L1,16 C0.4,16 0,15.6 0,15 L0,1 C0,0.4 0.4,0 1,0 L13,0 L13,2 L2,2 L2,14 L12,14 L12,13 L14,13 L14,15 C14,15.6 13.6,16 13,16 Z" fill={color}></path>
      <path d="M16,6 C16,4.3 14.7,3 13,3 C11.3,3 10,4.3 10,6 C10,6.9 10.4,7.7 11,8.2 L11,12 L13,10 L15,12 L15,8.2 C15.6,7.7 16,6.9 16,6 Z" fill={color}></path>
      <rect id="Rectangle-path" x="4" y="5" width="4" height="2" fill={color}></rect>
      <rect id="Rectangle-path" x="4" y="9" width="5" height="2" fill={color}></rect>
    </svg>
  )
}

function Client ({ color, className, path, viewBox, width, height, style }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} style={style} xmlns="http://www.w3.org/2000/svg">
      <circle id="Oval" cx="8" cy="4" r="4" fill={color}></circle>
      <path d="M7.233,14.102 C6.438,13.317 6,12.27 6,11.155 C6,10.791 6.063,10.44 6.153,10.098 C3.898,10.324 2.195,10.915 1.162,11.382 C0.45,11.705 0,12.417 0,13.2 L0,16 L9.154,16 L7.233,14.102 Z" fill={color}></path>
      <path d="M15.361,9.631 C14.388,8.67 12.764,8.827 12,9.964 C11.235,8.826 9.611,8.671 8.639,9.631 C7.787,10.473 7.787,11.838 8.639,12.679 L12,16 L15.361,12.679 C16.213,11.838 16.213,10.473 15.361,9.631 Z" fill={color}></path>
    </svg>
  )
}

function Testimonial ({ color, className, path, viewBox, width, height, style }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} style={style} xmlns="http://www.w3.org/2000/svg">
      <path d="M0,2 L0,16 L5,11 L14,11 C15.105,11 16,10.105 16,9 L16,2 C16,0.895 15.105,0 14,0 L2,0 C0.895,0 0,0.895 0,2 Z" fill={color}></path>
    </svg>
  )
}

function Blog ({ color, className, path, viewBox, width, height, style }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} style={style} xmlns="http://www.w3.org/2000/svg">
      <path d="M13,0 L1,0 C0.4,0 0,0.4 0,1 L0,15 C0,15.6 0.4,16 1,16 L13,16 C13.6,16 14,15.6 14,15 L14,1 C14,0.4 13.6,0 13,0 Z M7,13 L3,13 L3,11 L7,11 L7,13 Z M11,9 L3,9 L3,7 L11,7 L11,9 Z M11,5 L3,5 L3,3 L11,3 L11,5 Z" fill={color}></path>
    </svg>
  )
}

function Announcement ({ color, className, path, viewBox, width, height, style }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} style={style} xmlns="http://www.w3.org/2000/svg">
      <path d="M15.4,1.6 C14.4,0.6 13.1,0 11.6,0 C10.3,0 8.9,0.6 7.9,1.6 L7.9,1.6 C6.9,2.6 6.3,3.9 6.3,5.4 C6.3,6.8 6.9,8.2 7.9,9.2 C8.9,10.2 10.3,10.8 11.7,10.8 C13.1,10.8 14.4,10.3 15.5,9.2 C17.5,7 17.5,3.6 15.4,1.6 Z" fill={color}></path>
      <path d="M6.5,10.5 C5.7,9.7 5.1,8.7 4.8,7.7 L1.2,12.3 C0.9,12.7 0.9,13.3 1.3,13.6 L3.3,15.6 C3.7,16 4.2,16 4.6,15.7 L9.2,12.1 C8.3,11.9 7.3,11.3 6.5,10.5 Z" fill={color}></path>
    </svg>
  )
}

function Export ({ color, className, path, viewBox, width, height, style }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} style={style} xmlns="http://www.w3.org/2000/svg">
      <g fill={color} fillRule="nonzero">
        <path d="M13.714 13.714H2.286V2.286H8V0H0v16h16V8h-2.286z"/>
        <path d="M10.286 0v2.286h1.812L7.192 7.192l1.616 1.616 4.906-4.906v1.812H16V0z"/>
      </g>
    </svg>
  )
}

function Link ({ color, className, path, viewBox, width, height, style }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} style={style} xmlns="http://www.w3.org/2000/svg">
      <g fill={color} fillRule="nonzero">
        <path d="M11 0C9.7 0 8.4.5 7.5 1.5L6.3 2.6c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0l1.2-1.2c1.1-1.1 3.1-1.1 4.2 0 .6.6.9 1.4.9 2.2 0 .8-.3 1.6-.9 2.1L12 8.3c-.4.4-.4 1 0 1.4.2.2.5.3.7.3.2 0 .5-.1.7-.3l1.2-1.2C15.5 7.6 16 6.3 16 5c0-1.3-.5-2.6-1.5-3.5C13.6.5 12.3 0 11 0zM8.3 12l-1.2 1.2c-1.1 1.1-3.1 1.1-4.2 0-.6-.6-.9-1.4-.9-2.2 0-.8.3-1.6.9-2.1L4 7.7c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L1.5 7.5C.5 8.4 0 9.7 0 11c0 1.3.5 2.6 1.5 3.5.9 1 2.2 1.5 3.5 1.5 1.3 0 2.6-.5 3.5-1.5l1.2-1.2c.4-.4.4-1 0-1.4-.4-.4-1-.3-1.4.1z"/>
        <path d="M9.4 5.2L5.2 9.4c-.4.4-.4 1 0 1.4.2.2.5.3.7.3.2 0 .5-.1.7-.3l4.2-4.2c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0z"/>
      </g>
    </svg>
  )
}

function Unlink ({ color, className, viewBox, width, height, style }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} style={style} xmlns="http://www.w3.org/2000/svg">
      <g fill={color} fillRule="nonzero">
        <path d="M13.4 9.7l1.2-1.2C15.5 7.6 16 6.3 16 5c0-1.3-.5-2.6-1.5-3.5C13.6.5 12.3 0 11 0 9.7 0 8.4.5 7.5 1.5L6.3 2.6c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0l1.2-1.2c1.1-1.1 3.1-1.1 4.2 0 .6.6.9 1.4.9 2.2 0 .8-.3 1.6-.9 2.1L12 8.3c-.4.4-.4 1 0 1.4.2.2.5.3.7.3.2 0 .5-.1.7-.3zM8.3 12l-1.2 1.2c-1.1 1.1-3.1 1.1-4.2 0-.6-.6-.9-1.4-.9-2.2 0-.8.3-1.6.9-2.1L4 7.7c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L1.5 7.5C.5 8.4 0 9.7 0 11c0 1.3.5 2.6 1.5 3.5.9 1 2.2 1.5 3.5 1.5 1.3 0 2.6-.5 3.5-1.5l1.2-1.2c.4-.4.4-1 0-1.4-.4-.4-1-.3-1.4.1z"/>
        <path d="M9.4 5.2L5.2 9.4c-.4.4-.4 1 0 1.4.2.2.5.3.7.3.2 0 .5-.1.7-.3l4.2-4.2c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0zM2.3 3.7c.2.2.4.3.7.3.3 0 .5-.1.7-.3.4-.4.4-1 0-1.4l-2-2C1.3-.1.7-.1.3.3c-.4.4-.4 1 0 1.4l2 2zM13.7 12.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l2 2c.2.2.5.3.7.3.2 0 .5-.1.7-.3.4-.4.4-1 0-1.4l-2-2z"/>
      </g>
    </svg>
  )
}

function Todo ({ color, className, viewBox, width, height, style }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} style={style} xmlns="http://www.w3.org/2000/svg">
      <g fill={color} fillRule="nonzero">
        <path d="M6.3 11.7l-2-2c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0L7 9.6l3.3-3.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-4 4c-.4.4-.9.5-1.4 0z"/>
        <path d="M15 1h-3v2h2v11H2V3h2V1H1c-.6 0-1 .4-1 1v13c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1z"/>
        <path d="M5 0h6v4H5z"/>
      </g>
    </svg>
  )
}

function Calendar ({ color, className, path, viewBox, width, height, style }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} style={style} xmlns="http://www.w3.org/2000/svg">
      <path d="M15,2 L13,2 L13,0 L11,0 L11,2 L9,2 L9,0 L7,0 L7,2 L5,2 L5,0 L3,0 L3,2 L1,2 C0.447,2 0,2.447 0,3 L0,15 C0,15.553 0.447,16 1,16 L15,16 C15.553,16 16,15.553 16,15 L16,3 C16,2.447 15.553,2 15,2 Z M14,14 L2,14 L2,6 L14,6 L14,14 Z" fill={color}></path>
    </svg>
  )
}

function QuestionCircle ({ color, className, path, viewBox, width, height, style, ...otherProps }) {
  return (
    <svg {...otherProps} className={className} width={width} height={height} viewBox={viewBox} style={style} xmlns="http://www.w3.org/2000/svg">
      <path d="M8,0 C3.6,0 0,3.6 0,8 C0,12.4 3.6,16 8,16 C12.4,16 16,12.4 16,8 C16,3.6 12.4,0 8,0 Z M8,13 C7.4,13 7,12.6 7,12 C7,11.4 7.4,11 8,11 C8.6,11 9,11.4 9,12 C9,12.6 8.6,13 8,13 Z M9.5,8.4 C9,8.7 9,8.8 9,9 L9,10 L7,10 L7,9 C7,7.7 7.8,7.1 8.4,6.7 C8.9,6.4 9,6.3 9,6 C9,5.4 8.6,5 8,5 C7.6,5 7.3,5.2 7.1,5.5 L6.6,6.4 L4.9,5.4 L5.4,4.5 C5.9,3.6 6.9,3 8,3 C9.7,3 11,4.3 11,6 C11,7.4 10.1,8 9.5,8.4 Z" fill={color}></path>
    </svg>
  )
}

function Product ({ color, className, path, viewBox, width, height, style }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(-46.000000, -886.000000)">
        <g transform="translate(46.000000, 886.000000)" fill={color} fillRule="nonzero">
          <path d="M15.7,8.3 L7.7,0.3 C7.5,0.1 7.3,0 7,0 L1,0 C0.4,0 0,0.4 0,1 L0,7 C0,7.3 0.1,7.5 0.3,7.7 L8.3,15.7 C8.5,15.9 8.7,16 9,16 C9.3,16 9.5,15.9 9.7,15.7 L15.7,9.7 C16.1,9.3 16.1,8.7 15.7,8.3 Z M4,5 C3.4,5 3,4.6 3,4 C3,3.4 3.4,3 4,3 C4.6,3 5,3.4 5,4 C5,4.6 4.6,5 4,5 Z" id="Shape"></path>
        </g>
      </g>
    </svg>
  )
}

function BulletPoints ({ color, className, path, viewBox, width, height, style }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g fill={color} fillRule="nonzero">
          <rect id="Rectangle-path" x="6" y="1" width="10" height="2"></rect>
          <rect id="Rectangle-path" x="6" y="7" width="10" height="2"></rect>
          <rect id="Rectangle-path" x="6" y="13" width="10" height="2"></rect>
          <path d="M3,0 L1,0 C0.4,0 0,0.4 0,1 L0,3 C0,3.6 0.4,4 1,4 L3,4 C3.6,4 4,3.6 4,3 L4,1 C4,0.4 3.6,0 3,0 Z" id="Shape"></path>
          <path d="M3,6 L1,6 C0.4,6 0,6.4 0,7 L0,9 C0,9.6 0.4,10 1,10 L3,10 C3.6,10 4,9.6 4,9 L4,7 C4,6.4 3.6,6 3,6 Z" id="Shape"></path>
          <path d="M3,12 L1,12 C0.4,12 0,12.4 0,13 L0,15 C0,15.6 0.4,16 1,16 L3,16 C3.6,16 4,15.6 4,15 L4,13 C4,12.4 3.6,12 3,12 Z" id="Shape"></path>
        </g>
      </g>
    </svg>
  )
}

function ClearFormatting ({ color, className, viewBox, width, height, style }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} style={style} xmlns="http://www.w3.org/2000/svg">
      <path d="M15.234 8.353c.075 2.867-1.8 6.084-5.255 7.22-3.265 1.072-6.84-.194-8.75-3.094-1.852-2.815-1.582-6.676.614-9.17C4.15.687 7.967-.15 11.293 1.612L12.822 0l.436 4.876-5.165.171 1.693-1.824c-1.75-.857-4.255-.592-6.01 1.061-1.717 1.618-2.202 4.262-1.164 6.428 1.054 2.198 3.37 3.445 5.82 3.105 2.313-.321 4.674-2.306 4.793-5.464h2.01z" fill={color} fillRule="nonzero"/>
    </svg>
  )
}

function StrikeThrough ({ color, className, viewBox = '0 0 21 16', width = 21, height, style }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} style={style} xmlns="http://www.w3.org/2000/svg">
      <path d="M4.287 0v2.847h4.184v3.759H0V9.54h8.548V16h3.91V9.504H21V6.542h-8.51v-3.76h4.186V0z" fill={color} fillRule="evenodd"/>
    </svg>
  )
}

function Underline ({ color, className, viewBox, width, height, style }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} style={style} xmlns="http://www.w3.org/2000/svg">
      <path d="M10.145 0h2.876v1.062c0 2.32.009 4.64-.004 6.96-.012 2.47-1.526 4.108-3.987 4.394-1.698.197-3.305.038-4.718-1.027-.914-.69-1.447-1.643-1.469-2.76-.056-2.855-.018-5.712-.018-8.612h2.861V.67c0 2.403-.005 4.805.002 7.208.006 1.896 1.274 2.828 3.102 2.294.9-.263 1.345-.935 1.35-2.12.012-2.445.005-4.889.005-7.333V0zM0 16h16v-2H0z" fill={color} fillRule="evenodd"/>
    </svg>
  )
}

function Italic ({ color, className, viewBox, width, height, style }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} style={style} xmlns="http://www.w3.org/2000/svg">
      <path d="M3.26 0H7L3.74 16H0L3.26 0" fill={color} fillRule="evenodd"/>
    </svg>
  )
}

function Bold ({ color, className, viewBox, width, height, style }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} style={style} xmlns="http://www.w3.org/2000/svg">
      <path d="M10.164 7.76c1.14-.771 1.95-2.017 1.95-3.189C12.114 1.994 10.05 0 7.386 0H0v16h8.32c2.476 0 4.385-1.943 4.385-4.331 0-1.738-1.023-3.218-2.541-3.909zM3.545 2.857h3.546c.98 0 1.773.766 1.773 1.714 0 .949-.792 1.715-1.773 1.715H3.545V2.857zm4.137 10.286H3.545V9.714h4.137c.98 0 1.773.766 1.773 1.715 0 .948-.792 1.714-1.773 1.714z" fill={color} fillRule="nonzero" />
    </svg>
  )
}

function UnorderedList ({ color, className, viewBox = '0 0 22 16', width = 22, height = 16, style }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} style={style} xmlns="http://www.w3.org/2000/svg">
      <path d="M5 3h17V0H5zM5 16h17v-3H5zM0 3h3V0H0zM0 16h3v-3H0zM5 9.496h17v-3H5zM0 9.496h3.005v-3H0z" fill={color} fillRule="evenodd" />
    </svg>
  )
}

function OrderedList ({ color, className, viewBox = '0 0 22 16', width = 22, height = 16, style }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} style={style} xmlns="http://www.w3.org/2000/svg">
      <path d="M5 3h17V0H5zM5 9.5h17v-3H5zM5 16h17v-3H5zM1.699 4.101V1.266h-.84V.71c.704 0 .938-.234.988-.71H2.5v4.101H1.7zM.284 10.118c.006-.76.185-1.284 1.235-2.038.587-.42.76-.63.76-.975 0-.414-.253-.538-.568-.538-.365 0-.6.18-.6.729H.34c0-.883.494-1.414 1.334-1.414.827 0 1.39.389 1.39 1.198 0 .623-.31.982-1.187 1.606-.314.228-.55.525-.568.735h1.767v.697H.284zM1.34 13.455c.692 0 .834-.259.834-.562 0-.407-.16-.63-.531-.63-.309 0-.544.248-.544.674H.352c0-.785.544-1.316 1.321-1.316.711 0 1.273.457 1.273 1.118 0 .37-.16.735-.482.92.39.161.612.494.612 1.013 0 .822-.587 1.328-1.446 1.328-.852 0-1.346-.513-1.346-1.346h.772c0 .475.21.685.612.685.333 0 .586-.247.586-.68 0-.48-.247-.641-.914-.641v-.563z" fill={color} fillRule="evenodd" />
    </svg>
  )
}

function Desktop (props) {
  const path = 'M22 15h-2V3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12H2V3a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3zM0 17h24v2H0z'
  return <Icon path={path} {...props} viewBox="0 0 24 19" />
}

function Tablet ({ color, className, path, viewBox, width, height, style }) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 17 19" style={style} xmlns="http://www.w3.org/2000/svg">
      <path d="M14.48 19H2.71A2.72 2.72 0 0 1 0 16.29V2.71A2.72 2.72 0 0 1 2.71 0h11.77a2.72 2.72 0 0 1 2.71 2.71v13.58A2.72 2.72 0 0 1 14.48 19zM2.71 1.81a.91.91 0 0 0-.9.9v13.58a.91.91 0 0 0 .9.9h11.77a.91.91 0 0 0 .9-.9V2.71a.91.91 0 0 0-.9-.9z" fill={color}></path>
      <path d="M1.36 13.57h14.48v1.81H1.36z" fill={color}></path>
    </svg>
  )
}

function Mobile ({ color, className, path, viewBox, width, height, style }) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 13 19" style={style} xmlns="http://www.w3.org/2000/svg">
      <path d="M10 19H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3zM3 2a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" fill={color}></path>
      <path d="M2 14h9v2H2z" fill={color}></path>
    </svg>
  )
}

function DateIcon (props) {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox={props.viewBox}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path d="M13.57,1.8h-.85V.11H11.08V1.8H4.92V.11H3.28V1.8H2.43A1.48,1.48,0,0,0,1,3.28V14.41a1.48,1.48,0,0,0,1.47,1.47H13.57A1.48,1.48,0,0,0,15,14.41V3.28A1.48,1.48,0,0,0,13.57,1.8Zm0,12.83H2.42V5.8H13.58Z" transform="translate(-0.96 -0.11)" fill={props.color}/>
      <rect x="6.34" y="9.39" width="3.93" height="3.89" fill={props.color}/>
    </svg>)
}

function Clock (props) {
  return (<svg
    width={props.width}
    height={props.height}
    viewBox={props.viewBox}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <polygon points="8.7 3.65 6.64 3.65 6.64 9.09 6.64 9.09 9.9 12.35 11.36 10.89 8.7 8.23 8.7 3.65" fill={props.color} />
    <path d="M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0ZM8,14.31A6.31,6.31,0,1,1,14.31,8,6.31,6.31,0,0,1,8,14.31Z" fill={props.color} />
  </svg>)
}

function Close ({ color, className, path, viewBox, width, height, style }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} style={style} xmlns="http://www.w3.org/2000/svg">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-372.000000, -23.000000)" fillRule="nonzero" fill={color}>
          <g transform="translate(70.000000, 0.000000)">
            <g transform="translate(302.000000, 23.000000)">
              <path d="M13.7,0.3 C13.3,-0.1 12.7,-0.1 12.3,0.3 L7,5.6 L1.7,0.3 C1.3,-0.1 0.7,-0.1 0.3,0.3 C-0.1,0.7 -0.1,1.3 0.3,1.7 L5.6,7 L0.3,12.3 C-0.1,12.7 -0.1,13.3 0.3,13.7 C0.5,13.9 0.7,14 1,14 C1.3,14 1.5,13.9 1.7,13.7 L7,8.4 L12.3,13.7 C12.5,13.9 12.8,14 13,14 C13.2,14 13.5,13.9 13.7,13.7 C14.1,13.3 14.1,12.7 13.7,12.3 L8.4,7 L13.7,1.7 C14.1,1.3 14.1,0.7 13.7,0.3 Z" id="close"></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}

function ImageUpload ({ color, className, path, viewBox, width, height, style }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} style={style} xmlns="http://www.w3.org/2000/svg">
      <g strokeWidth="2" transform="translate(1 1)" stroke={color} fill="none" fillRule="evenodd"><path d="M13.858 18.142L21 11l9 8M0 22l9-8 8.501 7.249"/><path strokeLinecap="square" d="M0 0h30v26H0z"/><circle strokeLinecap="square" cx="13.5" cy="7.5" r="2.5"/></g>
    </svg>
  )
}

function AlignLeft ({ color, viewBox, width, height }) {
  return (
    <svg width={width} height={height} viewBox={viewBox} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <g id="Demo" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="3.-Section-–-Appearance-–-Image" transform="translate(-103.000000, -253.000000)" fill={color}>
          <g id="Sections-/-Sidebar-/-Drill-in-/-With-Actions-and-Tabs" transform="translate(70.000000, 0.000000)">
            <g id="Group-2" transform="translate(20.000000, 140.000000)">
              <g id="Appearance" transform="translate(0.000000, 3.000000)">
                <g id="Group-5" transform="translate(0.000000, 76.000000)">
                  <g id="Components-/-Input-/-Segmented-Control-/-Slim-/-3-Options">
                    <g id="Group-3" transform="translate(0.000000, 21.000000)">
                      <g id="alignment-left" transform="translate(13.800000, 13.000000)">
                        <rect id="Rectangle-2" x="0" y="0" width="20" height="2"></rect>
                        <rect id="Rectangle-2" x="0" y="4" width="13" height="2"></rect>
                        <rect id="Rectangle-2" x="0" y="8" width="16" height="2"></rect>
                        <rect id="Rectangle-2" x="0" y="12" width="9" height="2"></rect>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}

function AlignRight ({ color, viewBox, width, height }) {
  return (
    <svg width={width} height={height} viewBox={viewBox} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <g id="Demo" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="3.-Section-–-Appearance-–-Image" transform="translate(-196.000000, -253.000000)" fill={color}>
          <g id="Sections-/-Sidebar-/-Drill-in-/-With-Actions-and-Tabs" transform="translate(70.000000, 0.000000)">
            <g id="Group-2" transform="translate(20.000000, 140.000000)">
              <g id="Appearance" transform="translate(0.000000, 3.000000)">
                <g id="Group-5" transform="translate(0.000000, 76.000000)">
                  <g id="Components-/-Input-/-Segmented-Control-/-Slim-/-3-Options">
                    <g id="Group-3" transform="translate(0.000000, 21.000000)">
                      <g id="alignment-right" transform="translate(106.200000, 13.000000)">
                        <rect id="Rectangle-2" x="0" y="0" width="20" height="2"></rect>
                        <rect id="Rectangle-2" x="7" y="4" width="13" height="2"></rect>
                        <rect id="Rectangle-2" x="4" y="8" width="16" height="2"></rect>
                        <rect id="Rectangle-2" x="11" y="12" width="9" height="2"></rect>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}

function AlignCenter ({ color, viewBox, width, height }) {
  return (
    <svg width={width} height={height} viewBox={viewBox} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <g id="Demo" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="3.-Section-–-Appearance-–-Image" transform="translate(-150.000000, -253.000000)" fill={color}>
          <g id="Sections-/-Sidebar-/-Drill-in-/-With-Actions-and-Tabs" transform="translate(70.000000, 0.000000)">
            <g id="Group-2" transform="translate(20.000000, 140.000000)">
              <g id="Appearance" transform="translate(0.000000, 3.000000)">
                <g id="Group-5" transform="translate(0.000000, 76.000000)">
                  <g id="Components-/-Input-/-Segmented-Control-/-Slim-/-3-Options">
                    <g id="Group-3" transform="translate(0.000000, 21.000000)">
                      <g id="alignment-center" transform="translate(60.000000, 13.000000)">
                        <rect id="Rectangle-2" x="0" y="0" width="20" height="2"></rect>
                        <rect id="Rectangle-2" x="4" y="4" width="13" height="2"></rect>
                        <rect id="Rectangle-2" x="2" y="8" width="16" height="2"></rect>
                        <rect id="Rectangle-2" x="6" y="12" width="9" height="2"></rect>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}

function AlignLeftV2 ({color, width = 24, height = 22, viewBox = '0 0 24 22'}) {
  return (
    <svg width={width} height={height} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
      <g fill={color} fillRule="evenodd">
        <path d="M0 12h24v-2H0zM0 22h22v-2H0zM0 2h22V0H0zM0 17h17v-2H0zM0 7h17V5H0z"/>
      </g>
    </svg>
  )
}

function AlignCenterV2 ({color, width = 25, height = 22, viewBox = '0 0 25 22'}) {
  return (
    <svg width={width} height={height} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
      <g fill={color} fillRule="evenodd">
        <path d="M0 12.004h24.276V9.751H0zM1.181 2.237h21.854V0H1.18zM1.183 21.774h21.855v-2.293H1.183zM3.656 7.151h16.922V4.853H3.656zM3.67 16.925H20.61v-2.269H3.67z"/>
      </g>
    </svg>
  )
}

function AlignRightV2 ({color, width = 25, height = 22, viewBox = '0 0 25 22'}) {
  return (
    <svg width={width} height={height} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
      <g fill={color} fillRule="evenodd">
        <path d="M0 12.028h24.268V9.782H0zM2.42 2.31h21.856V0H2.42zM2.396 21.77h21.878v-2.285H2.396zM7.344 7.156h16.902V4.848H7.344zM7.322 16.95h16.944v-2.293H7.322z"/>
      </g>
    </svg>
  )
}

function AlignJustifyV2 ({color, width = 25, height = 22, viewBox = '0 0 25 22'}) {
  return (
    <svg width={width} height={height} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
      <g fill={color} fillRule="evenodd">
        <path d="M.047 2.531h23.977v-2.3H.047zM.003 7.316h24.021V5.079H.004zM.03 12.127h24.008V9.911H.03zM0 17.001h24.025v-2.239H0zM.06 21.832h16.728v-2.34H.06z"/>
      </g>
    </svg>
  )
}

function Help (props) {
  return (<svg
    width={props.width}
    height={props.height}
    viewBox={props.viewBox}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <defs>
      <circle id="a" cx="8" cy="8" r="8" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <g>
        <use fill="#FFF" xlinkHref="#a" />
        <circle stroke={props.color} cx="8" cy="8" r="7.5" />
      </g>
      <path d="M5.5 6.084h.918c.06-.768.575-1.246 1.386-1.246.8 0 1.316.49 1.316 1.155 0 .574-.242.913-.865 1.294-.735.44-1.08.924-1.074 1.633v.494h.94v-.35c0-.563.194-.864.877-1.267.687-.413 1.122-1.01 1.122-1.853C10.12 4.838 9.194 4 7.84 4 6.332 4 5.56 4.924 5.5 6.084zm2.224 5.822c.435 0 .74-.31.74-.746 0-.44-.305-.752-.74-.752s-.747.31-.747.752c0 .435.312.746.747.746z" fill={props.color} />
    </g>
  </svg>)
}

function AppearanceAppearance ({
  color = '#766CFF',
  width = 16,
  height = 16
}) {
  return (<svg width={width} height={height} viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <g id="Demo" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="3.-Section-–-Appearance" transform="translate(-90.000000, -143.000000)" fillRule="nonzero" fill={color}>
        <g id="Sections-/-Sidebar-/-Drill-in-/-With-Actions-and-Tabs" transform="translate(70.000000, 0.000000)">
          <g id="Group-2" transform="translate(20.000000, 140.000000)">
            <g id="Appearance">
              <g id="Group-8">
                <g id="appearance" transform="translate(0.000000, 3.000000)">
                  <path d="M2.2,5.6 L5.6,2.2 L3.7,0.3 C3.3,-0.1 2.7,-0.1 2.3,0.3 L0.3,2.3 C-0.1,2.7 -0.1,3.3 0.3,3.7 L2.2,5.6 Z" id="Shape"></path>
                  <path d="M13.8,10.4 L10.4,13.8 L12.3,15.7 C12.5,15.9 12.7,16 13,16 L16,16 L16,13 C16,12.7 15.9,12.5 15.7,12.3 L13.8,10.4 Z" id="Shape"></path>
                  <path d="M15.7,4.3 L11.7,0.3 C11.3,-0.1 10.7,-0.1 10.3,0.3 L9,1.6 L10.7,3.3 L9.3,4.7 L7.6,3 L6,4.6 L7.7,6.3 L6.3,7.7 L4.6,6 L3,7.6 L4.7,9.3 L3.3,10.7 L1.6,9 L0.3,10.3 C-0.1,10.7 -0.1,11.3 0.3,11.7 L4.3,15.7 C4.7,16.1 5.3,16.1 5.7,15.7 L15.7,5.7 C16.1,5.3 16.1,4.7 15.7,4.3 Z" id="Shape"></path>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>)
}

function AppearanceLayout ({
  color = '#776BFF',
  width = 16,
  height = 16
}) {
  return (<svg width={width} height={height} viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <g id="Demo" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="3.-Section-–-Appearance" transform="translate(-90.000000, -556.000000)" fillRule="nonzero" fill={color}>
        <g id="Sections-/-Sidebar-/-Drill-in-/-With-Actions-and-Tabs" transform="translate(70.000000, 0.000000)">
          <g id="Group-2" transform="translate(20.000000, 140.000000)">
            <g id="Layout" transform="translate(0.000000, 385.000000)">
              <g id="layout" transform="translate(0.000000, 31.000000)">
                <path d="M13,0 L3,0 C1.3,0 0,1.3 0,3 L0,16 L16,16 L16,3 C16,1.3 14.7,0 13,0 Z M2,14 L2,6 L5,6 L5,14 L2,14 Z M14,14 L7,14 L7,6 L14,6 L14,14 Z M2,4 L2,3 C2,2.4 2.4,2 3,2 L13,2 C13.6,2 14,2.4 14,3 L14,4 L2,4 Z" id="Shape"></path>
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>)
}

function AppearanceAdvanced () {
  return (<svg width="16px" height="17px" viewBox="0 0 16 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <g id="Demo" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="3.-Section-–-Appearance" transform="translate(-91.000000, -850.000000)" fillRule="nonzero" fill="#766CFF">
        <g id="Sections-/-Sidebar-/-Drill-in-/-With-Actions-and-Tabs" transform="translate(70.000000, 0.000000)">
          <g id="Group-2" transform="translate(20.000000, 140.000000)">
            <g id="Advanced" transform="translate(0.000000, 680.000000)">
              <g id="advanced-wrench" transform="translate(0.000000, 30.000000)">
                <path d="M14.2,5.2 L11.8,2.8 L14.2,0.4 C13.7,0.1 13.1,0 12.5,0 C10,0 8,2 8,4.5 C8,5 8.1,5.4 8.2,5.9 L1.6,10.8 C0.8,11.4 0.8,12.5 1.4,13.2 L3.7,15.6 C4.4,16.3 5.5,16.2 6.1,15.4 L11,8.8 C11.5,8.9 12,9 12.5,9 C15,9 17,7 17,4.5 C17,3.9 16.9,3.3 16.7,2.8 L14.2,5.2 Z" id="Shape"></path>
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>)
}

function PageListingSeo (props) {
  return (<svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox={props.viewBox}>
    <g fill={props.color} fillRule="nonzero">
      <path d="M4 12H1a1 1 0 0 1 0-2h3v2zM15 2H1a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2zM4 7H1a1 1 0 0 1 0-2h3v2zM15.707 12.293l-2.274-2.274A3.947 3.947 0 0 0 14 8c0-2.206-1.794-4-4-4S6 5.794 6 8s1.794 4 4 4c.74 0 1.424-.215 2.019-.567l2.274 2.274 1.414-1.414zM10 10c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"/>
    </g>
  </svg>)
}

function PageListingSections (props) {
  return (<svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox={props.viewBox}>
    <g fill={props.color} fillRule="nonzero">
      <path d="M15 13H1c-.552 0-1-.415-1-.929V.93C0 .416.448 0 1 0h14c.552 0 1 .416 1 .929V12.07c0 .514-.448.929-1 .929zM2 11.143h12V1.857H2v9.286z"/>
      <path d="M13 3v3H3V3z"/>
    </g>
  </svg>)
}

function Back ({ width, height, viewBox, color, ...other }) {
  return (<svg
    {...other}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox={viewBox}
    width={width}
    height={height}
    version="1.1"
  >
    <polygon fill={color} points="14.85 6.5625 14.85 8.4375 3.6 8.4375 8.75625 13.59375 7.425 14.925 0 7.5 7.425 0.075 8.75625 1.40625 3.6 6.5625"></polygon>
  </svg>
  )
}

function ContentIcon (props) {
  const path = 'M11 1h5v2h-5zM11 5h5v2h-5zM11 9h5v2h-5zM0 13h16v2H0zM6.866 10H9L5.637 2H3.363L0 10h2.134l.841-2h3.05l.84 2zm-3.05-4L4.5 4.372 5.184 6H3.816z'
  return <Icon {...props} path={path} />
}

function Folder (props) {
  const path = 'M15 16H1c-.6 0-1-.4-1-1V1c0-.6.4-1 1-1h4c.3 0 .5.1.7.3L8.4 3H15c.6 0 1 .4 1 1v11c0 .6-.4 1-1 1zM2 14h12V5H8c-.3 0-.5-.1-.7-.3L4.6 2H2v12z'
  return <Icon {...props} path={path} />
}

function FieldMapping (props) {
  const path = 'M13 10c-.6 0-1.1.2-1.6.5L9 8.5V5.8c1.2-.4 2-1.5 2-2.8 0-1.7-1.3-3-3-3S5 1.3 5 3c0 1.3.8 2.4 2 2.8v2.7l-2.4 1.9c-.5-.2-1-.4-1.6-.4-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3c0-.3-.1-.7-.2-1L8 10.3l2.2 1.7c-.1.3-.2.6-.2 1 0 1.7 1.3 3 3 3s3-1.3 3-3-1.3-3-3-3zM3 14c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zM8 4c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm5 10c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z'
  return <Icon {...props} path={path} />
}

function CheckSelected ({width, height, viewBox, color}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={viewBox}>
      <g>
        <path fill={color} d="M5.7,7.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l2,2C6.5,10.9,6.7,11,7,11s0.5-0.1,0.7-0.3l7-7 c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0L7,8.6L5.7,7.3z"></path>
        <path fill={color} d="M7,16c3.9,0,7-3.1,7-7c0-0.6-0.4-1-1-1s-1,0.4-1,1c0,2.8-2.2,5-5,5s-5-2.2-5-5s2.2-5,5-5 c0.6,0,1.1,0.1,1.7,0.3c0.5,0.2,1.1-0.1,1.3-0.6c0.2-0.5-0.1-1.1-0.6-1.3C8.6,2.1,7.8,2,7,2C3.1,2,0,5.1,0,9S3.1,16,7,16z"></path>
      </g>
    </svg>
  )
}

function CheckmarkCircle ({width, height, viewBox, color}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={viewBox}>
      <path fill={color} d="M8 16C6.4 16 4.9 15.5 3.6 14.7 2.2 13.8 1.2 12.5 0.6 11.1 0 9.6-0.2 8 0.2 6.4 0.5 4.9 1.2 3.5 2.3 2.3 3.5 1.2 4.9 0.5 6.4 0.2 8-0.2 9.6 0 11.1 0.6 12.5 1.2 13.8 2.2 14.7 3.6 15.5 4.9 16 6.4 16 8 16 10.1 15.2 12.2 13.7 13.7 12.2 15.2 10.1 16 8 16V16ZM8 1C6.6 1 5.3 1.4 4.1 2.2 3 2.9 2.1 4 1.5 5.3 1 6.6 0.9 8 1.1 9.4 1.4 10.7 2.1 12 3.1 12.9 4 13.9 5.3 14.6 6.6 14.9 8 15.1 9.4 15 10.7 14.5 12 13.9 13.1 13 13.8 11.9 14.6 10.7 15 9.4 15 8 15 6.1 14.3 4.4 12.9 3.1 11.6 1.7 9.9 1 8 1V1Z"/>
      <path fill={color} d="M7 11C6.9 11 6.7 11 6.6 10.9L4.1 8.4C4.1 8.3 4 8.1 4 8 4 7.9 4.1 7.7 4.1 7.6 4.2 7.6 4.4 7.5 4.5 7.5 4.6 7.5 4.8 7.6 4.9 7.6L7 9.8 11.6 5.1C11.7 5.1 11.7 5.1 11.8 5 11.9 5 11.9 5 12 5 12.1 5 12.1 5 12.2 5 12.3 5.1 12.3 5.1 12.4 5.1 12.4 5.2 12.4 5.2 12.5 5.3 12.5 5.4 12.5 5.4 12.5 5.5 12.5 5.6 12.5 5.6 12.5 5.7 12.4 5.8 12.4 5.8 12.4 5.9L7.4 10.9C7.3 10.9 7.3 10.9 7.2 11 7.1 11 7.1 11 7 11Z"/>
    </svg>
  )
}

function Star (props) {
  const path = 'M11.86 15.542L8 13.513l-3.86 2.029c-.727.387-1.592-.235-1.451-1.054l.737-4.299L.302 7.145a1 1 0 0 1 .555-1.706l4.316-.627L7.104.9C7.44.217 8.561.217 8.897.9l1.931 3.911 4.316.627a1.001 1.001 0 0 1 .555 1.706l-3.124 3.045.737 4.299c.141.823-.726 1.436-1.452 1.054zm-3.394-4.044l2.532 1.331-.483-2.82a1 1 0 0 1 .287-.885l2.049-1.998-2.831-.411a.996.996 0 0 1-.753-.547L8 3.602 6.733 6.168a1 1 0 0 1-.753.547l-2.831.411 2.049 1.998a1 1 0 0 1 .287.885l-.483 2.82 2.532-1.331a.998.998 0 0 1 .932 0z'
  return <Icon {...props} path={path} />
}

function StarFilled (props) {
  const path = 'M11.86 15.542L8 13.513l-3.86 2.029c-.727.387-1.592-.235-1.451-1.054l.737-4.299L.302 7.145a1 1 0 0 1 .555-1.706l4.316-.627L7.104.9C7.44.217 8.561.217 8.897.9l1.931 3.911 4.316.627a1.001 1.001 0 0 1 .555 1.706l-3.124 3.045.737 4.299c.141.823-.726 1.436-1.452 1.054z'
  return <Icon {...props} path={path} />
}

function Post (props) {
  const path = 'M13 0H1C.4 0 0 .4 0 1v14c0 .6.4 1 1 1h8l5-5V1c0-.6-.4-1-1-1zM2 2h10v8H8v4H2V2z'
  return <Icon {...props} path={path} />
}

function CaseStudy ({ color, className, viewBox, width, height, style }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} style={style} xmlns="http://www.w3.org/2000/svg">
      <g fill={color} fillRule="nonzero">
        <path d="M15 4h-3V1c0-.6-.4-1-1-1H5c-.6 0-1 .4-1 1v3H1c-.6 0-1 .4-1 1v10c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1zM6 2h4v2H6V2zm8 12H2V6h12v8z"/>
        <path d="M5 7h6v3H5z"/>
      </g>
    </svg>
  )
}

function Form (props) {
  const path = 'M15 0H1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm-1 12H2V5.723l5.504 3.145a.998.998 0 0 0 .992 0L14 5.723V12zm0-8.58L8 6.849 2 3.42V2h12v1.42z'
  return <Icon {...props} path={path} />
}

function ContactInformation ({ color, className, viewBox, width, height, style }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} style={style} xmlns="http://www.w3.org/2000/svg">
      <g fill={color} fillRule="nonzero">
        <path d="M4 7h3v3H4V7zm4 0h4v1H8V7zm0 2h4v1H8V9z"/>
        <path d="M15 1h-2c-.6 0-1 .4-1 1s-.4 1-1 1-1-.4-1-1-.4-1-1-1H7c-.6 0-1 .4-1 1s-.4 1-1 1-1-.4-1-1-.4-1-1-1H1c-.6 0-1 .4-1 1v12c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1zm-1 12H2V3h.2C2.6 4.2 3.7 5 5 5c1.3 0 2.4-.8 2.8-2h.3c.5 1.2 1.6 2 2.9 2 1.3 0 2.4-.8 2.8-2h.2v10z"/>
      </g>
    </svg>
  )
}

function Customer (props) {
  const path = 'M11.311 9.527c-1.161-.393-1.85-.825-2.143-1.175A3.991 3.991 0 0 0 11 5V4c0-2.206-1.794-4-4-4S3 1.794 3 4v1c0 1.406.732 2.639 1.832 3.352-.292.35-.981.782-2.142 1.175A3.942 3.942 0 0 0 0 13.26V16h14v-2.74c0-1.69-1.081-3.19-2.689-3.733zM5 4c0-1.103.897-2 2-2s2 .897 2 2v1c0 1.103-.897 2-2 2s-2-.897-2-2V4zm7 10H2v-.74c0-.831.534-1.569 1.33-1.838 1.845-.624 3-1.436 3.452-2.422h.436c.452.986 1.607 1.798 3.453 2.422A1.943 1.943 0 0 1 12 13.26V14z'
  return <Icon {...props} path={path} />
}

function CustomerFilled ({ color, className, viewBox, width, height, style }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} style={style} xmlns="http://www.w3.org/2000/svg">
      <g fill={color} fillRule="nonzero">
        <path d="M7 0C4.794 0 3 1.794 3 4v1c0 2.206 1.794 4 4 4s4-1.794 4-4V4c0-2.206-1.794-4-4-4zM11.036 9.426A5.969 5.969 0 0 1 7 11c-1.555 0-2.969-.6-4.036-1.574C1.203 10 0 11.311 0 13v3h14v-3c0-1.689-1.203-3-2.964-3.574z"/>
      </g>
    </svg>
  )
}

function Event (props) {
  const path = 'M15 2h-2V0h-3v2H6V0H3v2H1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-1 12H2V7h12v7z'
  return <Icon {...props} path={path} />
}

function Faq ({ color, className, viewBox, width, height, style }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} style={style} xmlns="http://www.w3.org/2000/svg">
      <g fill={color} fillRule="nonzero">
        <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"/>
        <circle cx="8" cy="12" r="1"/>
        <path d="M7.1 5.5c.2-.3.5-.5.9-.5.6 0 1 .4 1 1 0 .3-.1.4-.6.7C7.8 7.1 7 7.7 7 9v1h2V9c0-.2 0-.3.5-.6.6-.4 1.5-1 1.5-2.4 0-1.7-1.3-3-3-3-1.1 0-2.1.6-2.6 1.5l-.5.9 1.7 1 .5-.9z"/>
      </g>
    </svg>
  )
}

function Integration ({ color, className, viewBox, width, height, style }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} style={style} xmlns="http://www.w3.org/2000/svg">
      <g fill={color} fillRule="nonzero">
        <path d="M15 0H1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4v-2H2V6h12v2h2V1a1 1 0 0 0-1-1zM2 4V2h12v2H2z"/>
        <path d="M15 11h-3V8h-2v3H7v2h3v3h2v-3h3z"/>
      </g>
    </svg>
  )
}

function Location ({ color, className, viewBox, width, height, style }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} style={style} xmlns="http://www.w3.org/2000/svg">
      <g fill={color} fillRule="nonzero">
        <circle cx="7" cy="7" r="2"/>
        <path d="M6.3 15.7c-.1-.1-4.2-3.7-4.2-3.8C.7 10.7 0 8.9 0 7c0-3.9 3.1-7 7-7s7 3.1 7 7c0 1.9-.7 3.7-2.1 5-.1.1-4.1 3.7-4.2 3.8-.4.3-1 .3-1.4-.1zm-2.7-5l3.4 3 3.4-3c1-1 1.6-2.2 1.6-3.6 0-2.8-2.2-5-5-5S2 4.2 2 7c0 1.4.6 2.7 1.6 3.7 0-.1 0-.1 0 0z"/>
      </g>
    </svg>
  )
}

function CheckBold ({ color, className, path, viewBox, width, height, style }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} style={style} xmlns="http://www.w3.org/2000/svg">
      <g fill={color}><polygon fill={color} points="5.6,9.6 2.4,6.4 0,8.8 5.6,14.4 16,4 13.6,1.6 "></polygon></g>
    </svg>
  )
}

function XBold ({ color, className, path, viewBox, width, height, style }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} style={style} xmlns="http://www.w3.org/2000/svg">
      <g fill={color}><polygon fill={color} points="12.2,0.9 8,5.2 3.8,0.9 0.9,3.8 5.2,8 0.9,12.2 3.8,15.1 8,10.8 12.2,15.1 15.1,12.2 10.8,8 15.1,3.8 "></polygon></g>
    </svg>
  )
}

function Media ({ color, className, viewBox, width = 19, height, style }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} style={style} xmlns="http://www.w3.org/2000/svg">
      <g fill={color} fillRule="nonzero">
        <path d="M8.006 11.69L7 10.794 13.14 5 18 9.054l-.945.946-3.858-3.26z"/>
        <path d="M1.886 12L1 11.046 4.583 8 10 12.786l-.866.971-4.532-4.065z"/>
        <path d="M2 2v12h15V2H2zM0 0h19v16H0V0z"/>
        <path d="M7.538 7.577a2.038 2.038 0 110-4.077 2.038 2.038 0 010 4.077zm0-1a1.038 1.038 0 100-2.077 1.038 1.038 0 000 2.077z"/>
      </g>
    </svg>
  )
}

function Steps (props) {
  const path = 'M5 1h11v2H5zM5 7h11v2H5zM5 13h11v2H5zM.368 4v-.549l.598-.048c.097-.007.11-.035.11-.139V.84c0-.083-.02-.125-.09-.145L.382.569.46 0h1.666v3.264c0 .111.007.132.111.139l.57.048V4H.368zM.047 10v-.63l.907-.886c.684-.663.975-.934.975-1.32 0-.25-.122-.433-.48-.433-.373 0-.529.122-.529.603L0 7.252C.007 6.176.826 6 1.536 6c1.05 0 1.422.447 1.422 1.083 0 .636-.44 1.056-.934 1.53l-.765.73h.995c.067 0 .095-.013.108-.08l.095-.535h.717V10H.047zM2.344 13.682c.567.087.88.427.88 1.026 0 .88-.66 1.292-1.612 1.292C.939 16 .34 15.76 0 15.387l.533-.586c.253.247.533.44.999.44.373 0 .693-.133.693-.6 0-.406-.253-.573-.666-.573a2.73 2.73 0 0 0-.493.047v-.666l.326-.04c.48-.06.74-.293.74-.72 0-.252-.114-.459-.487-.459-.36 0-.532.12-.532.593l-.913-.08c0-1.052.793-1.232 1.492-1.232 1.026 0 1.419.393 1.419 1.106 0 .56-.347.912-.767 1.039v.026z'
  return <Icon {...props} path={path} />
}

function Project ({ color, className, viewBox, width, height, style }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} style={style} xmlns="http://www.w3.org/2000/svg">
      <g fill={color} fillRule="nonzero">
        <path d="M15 0H1C.4 0 0 .4 0 1v14c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1zm-1 2v9h-3c-.6 0-1 .4-1 1v1H6v-1c0-.6-.4-1-1-1H2V2h12z"/>
        <path d="M4 4h8v2H4zM4 7h8v2H4z"/>
      </g>
    </svg>
  )
}

function SimpleText (props) {
  const path = 'M7 0H0v4h1l.724-1.447A1 1 0 0 1 2.618 2H6v11.28a1 1 0 0 1-.684.948L3 15v1h8v-1l-2.316-.772A1 1 0 0 1 8 13.279V2h3.382a1 1 0 0 1 .894.553L13 4h1V0H7z'
  return <Icon {...props} path={path} />
}

function TestimonialRound (props) {
  const path = 'M8 0C3.6 0 0 3.1 0 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L8.9 12H8c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z'
  return <Icon {...props} path={path} />
}

function Sort (props) {
  const path = 'M15 2h-4c-.6 0-1 .4-1 1s.4 1 1 1h4c.6 0 1-.4 1-1s-.4-1-1-1zM5 0C3.7 0 2.6.9 2.2 2H1c-.6 0-1 .4-1 1s.4 1 1 1h1.2C2.6 5.1 3.7 6 5 6c1.7 0 3-1.3 3-3S6.7 0 5 0zM1 12h4c.6 0 1-.4 1-1s-.4-1-1-1H1c-.6 0-1 .4-1 1s.4 1 1 1zM15 10h-1.2c-.4-1.2-1.5-2-2.8-2-1.7 0-3 1.3-3 3s1.3 3 3 3c1.3 0 2.4-.9 2.8-2H15c.6 0 1-.4 1-1s-.4-1-1-1z'
  return <Icon {...props} path={path} />
}

function HeaderFooter ({ color, className, viewBox, width, height, style }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} style={style} xmlns="http://www.w3.org/2000/svg">
      <g fillRule="nonzero" fill={color}>
        <path d="M15 14H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1zM2 12h12V2H2v10z"/>
        <path d="M13 3v2H3V3zM13 9v2H3V9z"/>
      </g>
    </svg>
  )
}

function Pages (props) {
  const path = 'M5 7H1c-.6 0-1-.4-1-1V2c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1zM8 1h8v2H8zM8 5h8v2H8zM0 9h16v2H0zM0 13h16v2H0z'
  return <Icon {...props} path={path} />
}

function AddSectionIntegration (props) {
  const path = 'M12 6V2H8c0-1.1-.9-2-2-2S4 .9 4 2H0v4c1.1 0 2 .9 2 2s-.9 2-2 2v4h4c0-1.1.9-2 2-2s2 .9 2 2h4v-4c-.971 0-2-.9-2-2s1.06-2 2-2z'
  return <Icon {...props} path={path} />
}

function Move (props) {
  const path = 'M11 3H1c-.6 0-1 .4-1 1s.4 1 1 1h10v3l5-4-5-4v3zM5 13h10c.6 0 1-.4 1-1s-.4-1-1-1H5V8l-5 4 5 4v-3z'
  return <Icon {...props} path={path} />
}

function Duplicate ({ color, className, viewBox, width, height, style }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} style={style} xmlns="http://www.w3.org/2000/svg">
      <g fill={color} fillRule="nonzero">
        <path d="M9 4H1c-.6 0-1 .4-1 1v10c0 .6.4 1 1 1h8c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1z"/>
        <path d="M13 0H3v2h9v11h2V1c0-.6-.4-1-1-1z"/>
      </g>
    </svg>
  )
}

function Delete ({ color, className, viewBox, width, height, style }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} style={style} xmlns="http://www.w3.org/2000/svg">
      <g fill={color} fillRule="nonzero">
        <path d="M5 7h2v6H5zM9 7h2v6H9z"/>
        <path d="M12 1c0-.6-.4-1-1-1H5c-.6 0-1 .4-1 1v2H0v2h1v10c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V5h1V3h-4V1zM6 2h4v1H6V2zm7 3v9H3V5h10z"/>
      </g>
    </svg>
  )
}

function Visible (props) {
  const path = 'M8 12c3.6 0 6.4-3.1 7.6-4.9.5-.7.5-1.6 0-2.3C14.4 3.1 11.6 0 8 0 4.4 0 1.6 3.1.4 4.9c-.5.7-.5 1.6 0 2.2C1.6 8.9 4.4 12 8 12zm0-9c1.7 0 3 1.3 3 3S9.7 9 8 9 5 7.7 5 6s1.3-3 3-3z'
  return <Icon path={path} {...props} />
}

function Hidden (props) {
  const path = 'M14.6 5.6l-8.2 8.2c.5.1 1.1.2 1.6.2 3.6 0 6.4-3.1 7.6-4.9.5-.7.5-1.6 0-2.3-.2-.3-.6-.7-1-1.2zM14.3.3L11.6 3C10.5 2.4 9.3 2 8 2 4.4 2 1.6 5.1.4 6.9c-.5.7-.5 1.6 0 2.2.5.8 1.4 1.8 2.4 2.7L.3 14.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3l14-14c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0zm-9 9C5.1 8.9 5 8.5 5 8c0-1.7 1.3-3 3-3 .5 0 .9.1 1.3.3l-4 4z'
  return <Icon path={path} {...props} />
}

function ArrowCircle (props) {
  const path = 'M8,0 C3.6,0 0,3.6 0,8 C0,12.4 3.6,16 8,16 C12.4,16 16,12.4 16,8 C16,3.6 12.4,0 8,0 Z M8,12 L8,9 L4,9 L4,7 L8,7 L8,4 L12,8 L8,12 Z'
  return <Icon path={path} {...props} />
}

function InfoCircle ({ color = '#A9A9AB', ...props }) {
  const path = 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1 12H7V7h2v5zM8 6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z'
  return <Icon path={path} color={color} {...props} />
}

function WindowCode (props) {
  const path = 'M6.7 5.3l-5-5C1.3-.1.7-.1.3.3c-.4.4-.4 1 0 1.4L4.6 6 .3 10.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3l5-5c.4-.4.4-1 0-1.4zM7 10h7v2H7z'
  return <Icon path={path} {...props} />
}

function Analytics (props) {
  const path = 'M1 14h13c.552 0 1-.448 1-1s-.448-1-1-1H1c-.552 0-1 .448-1 1s.448 1 1 1zM6 0h3v10H6zM1 4h3v6H1zM11 6h3v4h-3z'
  return <Icon path={path} {...props} />
}

function SEO (props) {
  const path = 'M4 12H1c-.552 0-1-.448-1-1s.448-1 1-1h3v2zM15 2H1c-.552 0-1-.448-1-1s.448-1 1-1h14c.552 0 1 .448 1 1s-.448 1-1 1zM4 7H1c-.552 0-1-.448-1-1s.448-1 1-1h3v2zM15.707 12.293l-2.274-2.274C13.785 9.423 14 8.74 14 8c0-2.206-1.794-4-4-4S6 5.794 6 8s1.794 4 4 4c.74 0 1.424-.215 2.02-.567l2.273 2.274 1.414-1.414zM10 10c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z'
  return <Icon path={path} {...props} />
}

function IncompleteStep ({ color, className, viewBox, width, height, style }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} style={style} xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="8" fill={color}/>
      <circle cx="8" cy="8" r="2" fill="#fff"/>
    </svg>
  )
}

function Style (props) {
  const path = 'M15 5h-2.2c-.7-2.9-3.3-5-6.3-5C2.9 0 0 2.9 0 6.5c0 3.1 2.1 5.6 5 6.3V15c0 .6.4 1 1 1h9c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1zM2 6.5C2 4 4 2 6.5 2c2 0 3.6 1.3 4.2 3H6c-.6 0-1 .4-1 1v4.7c-1.7-.6-3-2.2-3-4.2zm8.9.5C10.7 9.1 9 10.7 7 10.9V7h3.9zm3.1 7H7v-1c3.2-.2 5.7-2.8 6-6h1v7z'
  return <Icon path={path} {...props} />
}

function Share (props) {
  const path = 'M11 6c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3c0 .224.029.44.075.65L4.856 5.661A2.972 2.972 0 0 0 3 5C1.346 5 0 6.346 0 8s1.346 3 3 3c.704 0 1.344-.254 1.856-.661l3.219 2.012A3.009 3.009 0 0 0 8 13c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3c-.704 0-1.343.254-1.856.661L5.925 8.649C5.971 8.44 6 8.223 6 8c0-.224-.029-.44-.075-.649l3.22-2.012A2.97 2.97 0 0 0 11 6zm0-4a1.001 1.001 0 0 1 0 2 1.001 1.001 0 0 1 0-2zM3 9a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2zm8 3a1.001 1.001 0 0 1 0 2 1.001 1.001 0 0 1 0-2z'
  return <Icon path={path} {...props} />
}

function Account (props) {
  const path = 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm4.1 12.3c-.4-.7-1.2-1-2.1-1.3-.7-.2-.9-.6-1-1.2 1.1-.4 2-1.5 2-2.8 0-1.7-1.3-3-3-3S5 5.3 5 7c0 1.3.8 2.4 2 2.8-.1.6-.3 1-1 1.2-.9.3-1.7.6-2.1 1.3C2.7 11.2 2 9.7 2 8c0-3.3 2.7-6 6-6s6 2.7 6 6c0 1.7-.7 3.2-1.9 4.3z'
  return <Icon path={path} {...props} />
}

function HomeEmpty (props) {
  const path = 'M9 16h4c.6 0 1-.4 1-1V6c0-.3-.1-.6-.4-.8l-6-5c-.4-.3-.9-.3-1.3 0l-6 5c-.2.2-.3.5-.3.8v9c0 .6.4 1 1 1h4c.6 0 1-.4 1-1v-3h2v3c0 .6.4 1 1 1zm-4-6c-.6 0-1 .4-1 1v3H2V6.5l5-4.2 5 4.2V14h-2v-3c0-.6-.4-1-1-1H5z'
  return <Icon path={path} {...props} />
}

function Logout ({ color, className, viewBox, width, height, style }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} style={style} xmlns="http://www.w3.org/2000/svg">
      <g fill={color} fillRule="nonzero">
        <path d="M10 12.414L14.414 8 10 3.586 8.586 5l2 2H4v2h6.586l-2 2z"/>
        <path d="M11 14H2V2h9V0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10v-2z"/>
      </g>
    </svg>
  )
}

function Badge ({ color, className, viewBox, width, height, style }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} style={style} xmlns="http://www.w3.org/2000/svg">
      <g fill={color} fillRule="nonzero">
        <path d="M4 6h3v3H4zM8 6h4v1H8zM8 8h4v1H8z"/>
        <path d="M15 0h-2c-.6 0-1 .4-1 1s-.4 1-1 1-1-.4-1-1-.4-1-1-1H7c-.6 0-1 .4-1 1s-.4 1-1 1-1-.4-1-1-.4-1-1-1H1C.4 0 0 .4 0 1v11c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1zm-1 11H2V2h.2C2.6 3.2 3.7 4 5 4c1.3 0 2.4-.8 2.8-2h.3c.5 1.2 1.6 2 2.9 2 1.3 0 2.4-.8 2.8-2h.2v9z"/>
      </g>
    </svg>
  )
}

function Pencil (props) {
  const path = 'M1 16h3c.3 0 .5-.1.7-.3l11-11c.4-.4.4-1 0-1.4l-3-3c-.4-.4-1-.4-1.4 0l-11 11c-.2.2-.3.4-.3.7v3c0 .6.4 1 1 1zm1-3.6l10-10L13.6 4l-10 10H2v-1.6z'
  return <Icon path={path} {...props} />
}

function Upgrade (props) {
  const path = 'M6 3.4V12h2V3.4l4 4L13.4 6 7.7.3c-.4-.4-1-.4-1.4 0L.6 6 2 7.4l4-4zM0 14h14v2H0z'
  return <Icon path={path} {...props} />
}

function CreditCard (props) {
  const path = 'M14.4,1.5H1.6C0.7,1.5,0,2.2,0,3.1l0,9.6c0,0.9,0.7,1.6,1.6,1.6h12.8c0.9,0,1.6-0.7,1.6-1.6V3.1 C16,2.2,15.3,1.5,14.4,1.5z M14.4,12.7H1.6V7.9h12.8C14.4,7.9,14.4,12.7,14.4,12.7z M14.4,4.7H1.6V3.1h12.8 C14.4,3.1,14.4,4.7,14.4,4.7z'
  return <Icon path={path} {...props} />
}

function Indent (props) {
  const path = 'M9 2.6L7.6 4l3 3H2V0H0v8c0 .6.4 1 1 1h9.6l-3 3L9 13.4 14.4 8 9 2.6z'
  return <Icon path={path} {...props} />
}

function B12Logo ({ color, className, height, width, viewBox, style }) {
  return (
    <svg className={className} id="b12-logo" width={width} height={height} viewBox={viewBox} style={style} xmlns="http://www.w3.org/2000/svg">
      <title>B12</title>
      <path
        d="M53.9,46a12.87,12.87,0,0,0-4.6-2.9c-2.5-.8-3.2-.9-10.1-.9H28.3V69.5h10c9.2,0,10.5-.2,13.8-2.2s5.4-6.4,5.4-11.3c0-4.2-1.3-7.7-3.6-10M51.6,11.4A9.44,9.44,0,0,0,47.1,9c-2.3-.6-3.5-.6-10-.6H28.2V33.2h11c4.4,0,8-.6,10.2-1.6,3.5-1.5,5.8-5.8,5.8-10.7a12.37,12.37,0,0,0-3.6-9.5M71.8,68.5a16,16,0,0,1-6.1,6.3,19.75,19.75,0,0,1-9,2.8c-1.6.1-4.5.1-8.6.1H0V69.3H6.4a9.59,9.59,0,0,0,4-.5,3.35,3.35,0,0,0,1.5-1.6,5.59,5.59,0,0,0,.7-2.6c0-.6.1-1.6.1-3.3v-45c0-1.5-.1-2.7-.1-3.3a5.36,5.36,0,0,0-.7-2.6c-.7-1.6-2.1-2.1-5.5-2.1H0V0H36.6c3.9,0,6.9.1,9,.1C54,.3,60,2,65.1,5.6A17,17,0,0,1,72.3,20a16.15,16.15,0,0,1-5.4,12.6c-2.8,2.6-4.8,3.6-10.1,5.1,5.4,1.4,6.9,2,10,4,4.9,3,7.8,9,7.8,15.8a23,23,0,0,1-2.8,11" fill={color}></path><path d="M78.5,77.7V69.3h7a12,12,0,0,0,3.9-.4,3.71,3.71,0,0,0,1.4-1.6,5.53,5.53,0,0,0,.7-2.5c0-.6.1-1.6.1-3V29.2H78.5V21.7c10.7-.1,14.1-2.2,16.8-10.4h10V58.5l.1,3.3a19.58,19.58,0,0,0,.1,3,5.73,5.73,0,0,0,.6,2.5c.8,1.6,2,2,5.4,2H118v8.4Z" fill={color}></path><path d="M179.2,64.3c-1.4,9.8-7.4,14.9-17.1,14.9-5.5,0-9.9-1.4-20.3-6.5-3-1.4-4.7-2-6.2-2-3.2,0-5.1,1.9-5.1,5.3v1.6h-7.7c-.1-1.1-.1-2-.1-2.6a33.4,33.4,0,0,1,2.1-11.4c2.5-6.5,6.8-10.6,16.3-15.2q6.45-3.15,9-4.5a24.88,24.88,0,0,0,6.4-4.6,13.54,13.54,0,0,0,3.9-9.2c0-7.7-5.6-12.5-14.6-12.5-7.8,0-12.2,2.8-14,8.9a9,9,0,0,1,4.2-1.1c4.3,0,7.4,3.3,7.4,7.9,0,5.3-3.5,8.8-8.8,8.8-6.5,0-10.8-4.8-10.8-12a19.15,19.15,0,0,1,6.9-14.5c4.9-4.2,10.8-6.1,19.4-6.1,15.9,0,26.7,8.8,26.7,21.9,0,10.9-6.2,17-21,20.9C142,56,140.6,56.5,136,60.4c-2.3,1.9-3.2,3.2-4.2,6.6,3.4-2.8,5.8-3.7,10.5-3.7a27.28,27.28,0,0,1,4.1.3l9.7,1.6a46.32,46.32,0,0,0,6.2.6c7.5,0,10.7-3.3,10.8-11.7H180a100.9,100.9,0,0,1-.8,10.2"
        fill={color}>
      </path>
    </svg>
  )
}

function Key ({ color, className, viewBox, width, height, style }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} style={style} xmlns="http://www.w3.org/2000/svg">
      <path fill={color} d="M5.41,16A5.41,5.41,0,1,1,6.27,5.24L11.51,0H16V3.84L13.54,6.3H12.12V7.72L10.64,9.2A5.41,5.41,0,0,1,5.41,16Zm0-9.05A3.65,3.65,0,1,0,8.8,9.27l-.21-.54L10.34,7V4.53H12.8l1.42-1.42V1.78h-2L6.82,7.2l-.49-.13A3.62,3.62,0,0,0,5.41,6.95Z"/>
      <path fill={color} d="M5.41,12.77A2.18,2.18,0,1,1,7.6,10.59,2.18,2.18,0,0,1,5.41,12.77Zm0-2.59a.4.4,0,1,0,.4.4A.4.4,0,0,0,5.41,10.18Z"/>
    </svg>
  )
}

function Animations ({ color, className, style, width, height }) {
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <circle cx="13" cy="5" r="3" fill={color}/>
      <path fill={color} d="M8.402 6.198c-1.001.747-2.098 1.804-2.947 3.241-.563-2.327-1.676-4.524-3.836-6.225L.381 4.786C3.562 7.289 4 11.174 4 15h2c0-3.733 1.957-5.975 3.598-7.198L8.402 6.198z"/>
    </svg>
  )
}

function DiagonalArrow (props) {
  const path = 'M2 1h8v2H4.414l10.293 10.293-1.414 1.414L3 4.414V10H1V2a1 1 0 0 1 1-1z'
  return <Icon path={path} {...props} />
}

function Import ({ color, className, style, width, height }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width={width} height={height} className={className} style={style}>
      <polygon fill={color} points="9 7 9 0 7 0 7 7 4.6 7 8 11 11.4 7 9 7"/>
      <path fill={color} d="M15,15.5H1a.94.94,0,0,1-1-1v-9a.94.94,0,0,1,1-1H4v2H2v7H14v-7H12v-2h3a.94.94,0,0,1,1,1v9A.94.94,0,0,1,15,15.5Z"/>
    </svg>
  )
}

function AddCustomer ({ color, className, style, width, height }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width={width} height={height} className={className} style={style}>
      <circle fill={color} cx="7.5" cy="4" r="4"/>
      <polygon fill={color} points="15.5 12 13.5 12 13.5 10 11.5 10 11.5 12 9.5 12 9.5 14 11.5 14 11.5 16 13.5 16 13.5 14 15.5 14 15.5 12"/>
      <path fill={color} d="M7.62,13a5.37,5.37,0,0,1,.89-3c-.29,0-.58,0-.89,0a13.46,13.46,0,0,0-6.08,1.38,2,2,0,0,0-1,1.82V16h8A5.36,5.36,0,0,1,7.62,13Z"/>
    </svg>
  )
}

function CaretDown ({ color, className, style, width, height }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width={width} height={height} className={className} style={style}>
      <path fill={color} d="M 4 17 L 25 39 L 46 17 Z "></path>
    </svg>
  )
}

function Availability ({ color, className, style, width, height }) {
  return (
    <svg
      style={style}
      className={className}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill={color} fillRule="nonzero">
        <path d="M11 16a1 1 0 0 1-.707-.293l-2-2 1.414-1.414L11 13.586l3.293-3.293 1.414 1.414-4 4A1 1 0 0 1 11 16z"/>
        <path d="M7 14H2V5h12v4h2V3a1 1 0 0 0-1-1h-2V0h-2v2H9V0H7v2H5V0H3v2H1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h6v-2z"/>
      </g>
    </svg>
  )
}

function CalendarEvent ({ color, className, style, width, height }) {
  return (
    <svg
      style={style}
      className={className}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
    >
      <g
        fill={color}
        fillRule="nonzero"
      >
        <path d="M11 16a1 1 0 0 1-.707-.293l-2-2 1.414-1.414L11 13.586l3.293-3.293 1.414 1.414-4 4A1 1 0 0 1 11 16z"/>
        <path d="M7 14H2V5h12v4h2V3a1 1 0 0 0-1-1h-2V0h-2v2H9V0H7v2H5V0H3v2H1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h6v-2z"/>
      </g>
    </svg>
  )
}

function Payments ({ color, className, style, width, height }) {
  return (
    <svg
      style={style}
      className={className}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg">
      <g fill={color}
        fillRule="nonzero"
        transform="translate(0,2)"
      >
        <path d="M15 0H1C.4 0 0 .4 0 1v10c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1zm-3.9 10H4.9C4.5 8.6 3.4 7.5 2 7.1V4.9C3.4 4.5 4.5 3.4 4.9 2h6.3c.4 1.4 1.5 2.5 2.9 2.9v2.3c-1.5.3-2.6 1.4-3 2.8z"/>
        <circle cx="8" cy="6" r="2"/>
      </g>
    </svg>
  )
}

function Service ({ color, className, style, width, height }) {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill={color} fillRule="nonzero">
        <path d="M15 14H1a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2zM15 11a7.007 7.007 0 0 0-4.417-6.5c.27-.454.414-.972.417-1.5a3 3 0 0 0-6 0c.003.528.147 1.046.417 1.5A7.007 7.007 0 0 0 1 11v1h14v-1zM7 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0z"/>
      </g>
    </svg>
  )
}

function Repeat ({ color, className, style, width, height }) {
  return (
    <svg
      style={style}
      className={className}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill={color}
        fillRule="nonzero">
        <path d="M15 2h-2v2h1v6H8V8l-4 3 4 3v-2h7c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1z"/>
        <path d="M2 4h6v2l4-3-4-3v2H1c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h2v-2H2V4z"/>
      </g>
    </svg>
  )
}

function Email ({ color, className, style, width, height }) {
  return (
    <svg
      style={style}
      className={className}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill={color}>
        <path d="M15,1.5H1c-0.6,0-1,0.4-1,0.9v1.3l8,4.1l8-4V2.4C16,1.9,15.6,1.5,15,1.5z"/>
        <path d="M7.5,9.7L0,5.8v7.6c0,0.5,0.4,0.9,1,0.9h14c0.6,0,1-0.4,1-0.9V5.8L8.5,9.7 C8.2,9.8,7.8,9.8,7.5,9.7z"/>
      </g>
    </svg>
  )
}

function AppCube (props) {
  const path = 'M15.4 3.075l-7-3c-.3-.1-.5-.1-.8 0l-7 3c-.4.1-.6.5-.6.9v8c0 .4.2.8.6.9l7 3c.1.1.3.1.4.1.1 0 .3 0 .4-.1l7-3c.4-.2.6-.5.6-.9v-8c0-.4-.2-.8-.6-.9zm-7.4-1l4.5 1.9-4.5 1.9-4.5-1.9 4.5-1.9zm-6 3.4l5 2.1v5.8l-5-2.1v-5.8zm7 8v-5.8l5-2.1v5.8l-5 2.1z'
  return <Icon path={path} {...props} />
}

function MagicWand ({ color, className, style, width, height }) {
  return (
    <svg
      style={style}
      className={className}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill={color} fillRule="evenodd">
        <path d="M7.99 5l2.97 2.97-7.99 7.99L0 12.99zM13.404 2l1.414 1.414-2.404 2.404L11 4.404zM13 7h3v2h-3zM12.414 11l2.122 2.121-1.415 1.415L11 12.414zM7 0h2v3H7zM3.414 2l2.121 2.121-1.414 1.414L2 3.415z"/>
      </g>
    </svg>
  )
}

function User ({ color, className, style, width, height }) {
  return (
    <svg
      style={style}
      className={className}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill={color} fillRule="evenodd">
        <path d="M8 9C5.8 9 4 7.2 4 5V4c0-2.2 1.8-4 4-4s4 1.8 4 4v1c0 2.2-1.8 4-4 4zM10 11H6c-2.8 0-5 2.2-5 5h14c0-2.8-2.2-5-5-5z"/>
      </g>
    </svg>
  )
}

function Layout ({ color, className, style, width, height }) {
  return (
    <svg
      style={style}
      className={className}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill={color} fillRule="evenodd">
        <path d="M6,9H1C0.4,9,0,8.6,0,8V1c0-0.6,0.4-1,1-1h5c0.6,0,1,0.4,1,1v7C7,8.6,6.6,9,6,9z"/>
        <path d="M6,16H1c-0.6,0-1-0.4-1-1v-3c0-0.6,0.4-1,1-1h5c0.6,0,1,0.4,1,1v3C7,15.6,6.6,16,6,16z"/>
        <path d="M15,6h-5C9.4,6,9,5.6,9,5V1c0-0.6,0.4-1,1-1h5c0.6,0,1,0.4,1,1v4C16,5.6,15.6,6,15,6z"/>
        <path d="M15,16h-5c-0.6,0-1-0.4-1-1V9c0-0.6,0.4-1,1-1h5c0.6,0,1,0.4,1,1v6C16,15.6,15.6,16,15,16z"/>
      </g>
    </svg>
  )
}

function Send (props) {
  const path = 'M3.6,9.6v4.9c0,0.7,0.8,1,1.3,0.5l2.3-2.7l4.7,3.5c0.4,0.3,1,0.1,1.1-0.4l3-14.4c0.1-0.6-0.4-1-1-0.8L0.5,5.9C0,6.1-0.1,6.8,0.3,7.2l1.6,1.2l4.6-2.2C6.9,6,7.2,6.5,6.9,6.7L3.6,9.6z'
  return <Icon path={path} {...props} />
}

function Code ({ color, className, style, width, height }) {
  return (
    <svg
      style={style}
      className={className}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill={color}>
        <path d="M12.7,11.7l-1.4-1.4L13.6,8l-2.3-2.3l1.4-1.4l3,3c0.4,0.4,0.4,1,0,1.4L12.7,11.7z"/>
        <path d="M3.3,11.7l-3-3c-0.4-0.4-0.4-1,0-1.4l3-3l1.4,1.4L2.4,8l2.3,2.3L3.3,11.7z"/>
        <path d="M6,15c-0.1,0-0.2,0-0.3-0.1c-0.5-0.2-0.8-0.7-0.6-1.3l4-12C9.3,1.1,9.8,0.8,10.4,1
        c0.5,0.2,0.8,0.7,0.6,1.3l-4,12C6.8,14.7,6.4,15,6,15z"/>
      </g>
    </svg>
  )
}

function Section ({ color, className, style, width, height }) {
  return (
    <svg
      style={style}
      className={className}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill={color} d="M15,14.5H1c-0.6,0-1-0.4-1-0.9V2.4c0-0.5,0.4-0.9,1-0.9h14c0.6,0,1,0.4,1,0.9v11.1
        C16,14.1,15.6,14.5,15,14.5z M2,12.6h12V3.4H2V12.6z"/>
      <rect x="3" y="4.5" fill={color} width="10" height="3"/>
    </svg>
  )
}

function Tag ({ color, className, style, width, height }) {
  return (
    <svg
      style={style}
      className={className}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill={color} d="M15.4,8.3l-7.7-8C7.5,0.1,7.3,0,7,0H1.2c-0.6,0-1,0.4-1,1v6c0,0.3,0.1,0.5,0.3,0.7l7.7,8
        C8.5,15.9,8.7,16,9,16s0.5-0.1,0.7-0.3l5.8-6C15.8,9.3,15.8,8.7,15.4,8.3z M9,13.6l-6.8-7V2h4.4l6.8,7L9,13.6z"/>
      <ellipse fill={color} cx="5.1" cy="5" rx="1" ry="1"/>
    </svg>
  )
}

function Welcome ({ color, className, style, width, height }) {
  return (
    <svg
      style={style}
      className={className}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill={color} d="M1.412 6.353a.822.822 0 0 1 1.157.296l1.727 3.006a.41.41 0 0 0 .579.149.452.452 0 0 0 .147-.604L2.67 5.106a.94.94 0 0 1 .154-1.16c.19-.17.44-.244.686-.204.245.04.46.192.587.414l2.375 4.133a.41.41 0 0 0 .578.149.452.452 0 0 0 .147-.604L4.63 3.364a.941.941 0 0 1 .155-1.16c.19-.169.44-.243.685-.203.245.04.46.191.588.413l2.59 4.51a.41.41 0 0 0 .579.148.452.452 0 0 0 .147-.604L7.02 2.374a.941.941 0 0 1 .154-1.16c.19-.17.44-.244.686-.203.245.04.46.191.587.413l3.365 5.857a.413.413 0 0 0 .424.207.433.433 0 0 0 .348-.33l.587-2.414c.083-.398.4-.7.789-.748a.844.844 0 0 1 .653.226.916.916 0 0 1 .286.65l.098 4.14c.045 1.904-.9 3.693-2.47 4.68l-1.445.906c-2.403 1.51-5.51.714-6.941-1.777L1.119 7.56a.903.903 0 0 1 .293-1.207z"/>
    </svg>
  )
}

function Website (props) {
  const path = 'M15 0H1C.4 0 0 .4 0 1v2c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1zM3 6H1c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1zM15 6H7c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h8c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1z'
  return <Icon path={path} {...props} />
}

function Chat ({ color, className, style, width, height }) {
  return (
    <svg
      style={style}
      className={className}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
    >
      <path d="M13.29,14.5h-12a1,1,0,0,1-.8-1.6l2.8-3.7V3.5a3,3,0,0,1,3-3h7a3,3,0,0,1,3,3v8A3,3,0,0,1,13.29,14.5Zm-10-2h10a.94.94,0,0,0,1-1v-8a.94.94,0,0,0-1-1h-7a.94.94,0,0,0-1,1v6a1.42,1.42,0,0,1-.2.6Z" transform="translate(-0.29 -0.5)" fill={color}/>
      <rect x="7" y="4" width="5" height="2" fill={color}/>
      <rect x="7" y="8" width="5" height="2" fill={color}/>
    </svg>
  )
}

function RotateForward (props) {
  const path = 'M16 7.5184V0l-2.3612 2.336A7.9156 7.9156 0 0 0 8.0004 0C4.2385 0 .9849 2.6212.1841 6.297c-.8007 3.6757 1.0678 7.4127 4.4888 8.9776 3.421 1.5648 7.47.5345 9.7272-2.475l-2.1332-1.6c-1.5048 2.0064-4.2042 2.6933-6.4849 1.65-2.2806-1.0432-3.5263-3.5345-2.9925-5.985.5339-2.4505 2.703-4.198 5.2109-4.198a5.2584 5.2584 0 0 1 3.7251 1.5614L9.167 6.761 16 7.5184z'
  return <Icon path={path} {...props} />
}

function Globe ({ color, className, style, width, height }) {
  return (
    <svg
      style={style}
      className={className}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
    >
      <path d="M8.5,0a8,8,0,1,0,8,8A8,8,0,0,0,8.5,0Zm5.9,7H12.5a16.57,16.57,0,0,0-.8-4.1A6.17,6.17,0,0,1,14.4,7ZM8.5,14c-.6,0-1.8-1.9-2-5h4C10.3,12.1,9.1,14,8.5,14Zm-2-7c.2-3.1,1.3-5,2-5s1.8,1.9,2,5ZM5.4,2.9A13,13,0,0,0,4.5,7H2.6A6,6,0,0,1,5.4,2.9ZM2.6,9H4.5a16.57,16.57,0,0,0,.8,4.1A6.17,6.17,0,0,1,2.6,9Zm9,4.1A13,13,0,0,0,12.4,9h1.9A5.55,5.55,0,0,1,11.6,13.1Z" transform="translate(-0.5)" fill={color}/>
    </svg>
  )
}

function At ({ color, className, style, width, height }) {
  return (
    <svg
      style={style}
      className={className}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
    >
      <path d="M15.44,9.68a3.33,3.33,0,0,1-3.07,2.44,2.08,2.08,0,0,1-2.1-1.52,3.51,3.51,0,0,1-2.88,1.52,3.18,3.18,0,0,1-2.5-1A4,4,0,0,1,4,8.33,4.5,4.5,0,0,1,5.19,5.07c1.3-1.35,3-1.39,4.89-1.12a9.35,9.35,0,0,1,1.6.37c0,.39-.22,4.4-.22,4.77q0,1.56,1,1.56.77,0,1.22-1a6.9,6.9,0,0,0-.23-5.47A5.23,5.23,0,0,0,8.65,1.55a6.29,6.29,0,0,0-6,3.31,8.07,8.07,0,0,0-.81,3.7c0,3.65,2,5.87,5.85,5.87a12.82,12.82,0,0,0,4.5-.88v1.6A11.65,11.65,0,0,1,7.77,16C3.1,16,.12,13.42.12,8.63A9.25,9.25,0,0,1,1.22,4.09,8.09,8.09,0,0,1,8.63,0,6.94,6.94,0,0,1,15,3.38,7.93,7.93,0,0,1,15.44,9.68ZM5.85,8.37q0,2.27,1.78,2.27T9.69,7.79l.12-2.33a3.1,3.1,0,0,0-3.26.66A3.39,3.39,0,0,0,5.85,8.37Z" fill={color}/>
    </svg>
  )
}

function Target (props) {
  const path = 'M13,6.94l3-3-3-1-1-3-3,3,.6,1.9-1,1a5.71,5.71,0,0,0-3.1-1A5.7,5.7,0,0,0,0,10.44a5.55,5.55,0,0,0,5.5,5.5,5.55,5.55,0,0,0,5.5-5.5,5.45,5.45,0,0,0-1-3.1l1-1Zm-4,3.5a3.54,3.54,0,0,1-3.5,3.5,3.5,3.5,0,0,1,0-7,4.71,4.71,0,0,1,1.7.4l-2.4,2.4a1,1,0,0,0,0,1.4,1.08,1.08,0,0,0,.7.3,1.08,1.08,0,0,0,.7-.3l2.4-2.4A4.71,4.71,0,0,1,9,10.44Z'
  return <Icon path={path} {...props} />
}

function IconRow ({ color = '#766CFF', secondaryColor = '#D7D7DE', className, width = '16', height = '14', style }) {
  return (
    <svg className={className} width={width} height={height} style={style} viewBox="0 0 16 14" xmlns="http://www.w3.org/2000/svg">
      <g fillRule="nonzero" fill="none">
        <path d="M9.846.615H1.231a.582.582 0 0 0-.616.616v1.846a.582.582 0 0 0 .616.615h8.615a.582.582 0 0 0 .616-.615V1.23a.582.582 0 0 0-.616-.616zM1.23 5.538a.582.582 0 0 0-.615.616V8a.582.582 0 0 0 .616.615h8.615A.582.582 0 0 0 10.462 8V6.154a.582.582 0 0 0-.616-.616H1.231zM9.846 10.462H1.231a.582.582 0 0 0-.616.615v1.846a.582.582 0 0 0 .616.615h8.615a.582.582 0 0 0 .616-.615v-1.846a.582.582 0 0 0-.616-.615z" fill={color}></path>
        <path d="M14.77.615h-1.847a.582.582 0 0 0-.615.616v11.692a.582.582 0 0 0 .615.615h1.846a.582.582 0 0 0 .616-.615V1.231a.582.582 0 0 0-.616-.616z" fill={secondaryColor}></path>
      </g>
    </svg>
  )
}

function IconColumn ({ color = '#766CFF', secondaryColor = '#D7D7DE', className, width = '16', height = '14', style }) {
  return (
    <svg className={className} width={width} height={height} style={style} viewBox="0 0 16 14" xmlns="http://www.w3.org/2000/svg">
      <g fillRule="nonzero" fill="none">
        <path d="M9.846.615H1.231a.582.582 0 0 0-.616.616v1.846a.582.582 0 0 0 .616.615h8.615a.582.582 0 0 0 .616-.615V1.23a.582.582 0 0 0-.616-.616zM1.23 5.538a.582.582 0 0 0-.615.616V8a.582.582 0 0 0 .616.615h8.615A.582.582 0 0 0 10.462 8V6.154a.582.582 0 0 0-.616-.616H1.231zM9.846 10.462H1.231a.582.582 0 0 0-.616.615v1.846a.582.582 0 0 0 .616.615h8.615a.582.582 0 0 0 .616-.615v-1.846a.582.582 0 0 0-.616-.615z" fill={secondaryColor}></path>
        <path d="M14.77.615h-1.847a.582.582 0 0 0-.615.616v11.692a.582.582 0 0 0 .615.615h1.846a.582.582 0 0 0 .616-.615V1.231a.582.582 0 0 0-.616-.616z" fill={color}></path>
      </g>
    </svg>
  )
}

function IconSection ({ color = '#84839C', className, width = '14', height = '14', style }) {
  return (
    <svg className={className} width={width} height={height} style={style} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
      <g fillRule="nonzero">
        <path d="M4.565 1H.435A.435.435 0 0 0 0 1.435v4.13C0 5.805.195 6 .435 6h4.13C4.805 6 5 5.805 5 5.565v-4.13A.435.435 0 0 0 4.565 1zM13.867 3.18L10.821.132a.455.455 0 0 0-.642 0L7.133 3.179a.455.455 0 0 0 0 .642l3.046 3.046a.455.455 0 0 0 .642 0l3.046-3.046a.455.455 0 0 0 0-.642zM12.565 9h-4.13A.435.435 0 0 0 8 9.435v4.13c0 .24.195.435.435.435h4.13c.24 0 .435-.195.435-.435v-4.13A.435.435 0 0 0 12.565 9zM4.565 9H.435A.435.435 0 0 0 0 9.435v4.13c0 .24.195.435.435.435h4.13c.24 0 .435-.195.435-.435v-4.13A.435.435 0 0 0 4.565 9z" fill={color}></path>
      </g>
    </svg>
  )
}

function FolderFilled (props) {
  const path = 'M16 6V4c0-.6-.4-1-1-1H7V1c0-.6-.4-1-1-1H1C.4 0 0 .4 0 1v5h16zM0 8v7c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V8H0z'
  return <Icon path={path} {...props} />
}

function BlogPost ({className, width, height, viewBox, style, color}) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} style={style} xmlns="http://www.w3.org/2000/svg">
      <g fill={color} fillRule="nonzero">
        <path d="M4 0v9H0v4c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3V0H4zm10 13c0 .6-.4 1-1 1H6V2h8v11z"/>
        <path d="M8 5h4v2H8zM8 9h4v2H8z"/>
      </g>
    </svg>
  )
}

function MenuItems ({className, width, height, viewBox, style, color}) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} style={style} xmlns="http://www.w3.org/2000/svg">
      <g fill={color} fillRule="nonzero"><circle cx="2" cy="2" r="2"/>
        <circle cx="2" cy="10" r="2"/>
        <path d="M6 1h10v2H6zM6 13h10v2H6zM6 9h10v2H6zM6 5h10v2H6z"/>
      </g>
    </svg>
  )
}

function Popup ({className, width, height, viewBox, style, color}) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} style={style} xmlns="http://www.w3.org/2000/svg">
      <g fill={color} fillRule="nonzero">
        <path d="M8 7l-4 4h3v5h2v-5h3z"/>
        <path d="M0 1v12a1 1 0 001 1h4v-2H2V6h12v6h-3v2h4a1 1 0 001-1V1a1 1 0 00-1-1H1a1 1 0 00-1 1zm2 3V2h12v2H2z"/>
      </g>
    </svg>
  )
}

function Flag (props) {
  const path = 'M12 6l2-5H2c0-.6-.4-1-1-1S0 .4 0 1v14c0 .6.4 1 1 1s1-.4 1-1v-4h12l-2-5z'
  return <Icon path={path} {...props} />
}

function Testimonials ({className, width, height, viewBox, style, color}) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} style={style} xmlns="http://www.w3.org/2000/svg">
      <g fill={color} fillRule="nonzero">
        <path d="M15 4h-1v6a1 1 0 01-1 1H6.828L5 13h5l3 3v-3h2a1 1 0 001-1V5a1 1 0 00-1-1z"/>
        <path d="M1 0h10a1 1 0 011 1v7a1 1 0 01-1 1H6l-3 3V9H1a1 1 0 01-1-1V1a1 1 0 011-1z"/>
      </g>
    </svg>
  )
}

function Chart ({className, width, height, viewBox, style, color}) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} style={style} xmlns="http://www.w3.org/2000/svg">
      <g fillRule="nonzero" fill={color}>
        <path d="M1 14h13a1 1 0 000-2H1a1 1 0 000 2zM6 0h3v10H6zM1 4h3v6H1zM11 6h3v4h-3z"/>
      </g>
    </svg>
  )
}

function HubspotLogo (props) {
  const path = 'M97.78 44.61V31.17a13.095 13.095 0 10-14.09 0v12.57a33.1755 33.1755 0 00-8.01 2.27L34.16 15.34c.04-.42.06-.83.06-1.24a14.1173 14.1173 0 10-8.49 12.93l37.76 27.89a33.2183 33.2183 0 00-3.57 38.34l-8.86 8.85a13.0885 13.0885 0 1010.11 10.11l8.42-8.41a32.9556 32.9556 0 0019.13 6.05 33.2498 33.2498 0 009.06-65.25zm-9.06 50.13a18.135 18.135 0 1118.15-18.13 18.1615 18.1615 0 01-18.15 18.13z'
  return <Icon path={path} {...props} viewBox="0 0 128 128" />
}

function Sidebar ({ className, width, height, viewBox, color }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width={width} height={height} viewBox={viewBox}>
      <path fill={color} d="M15,1H1A1,1,0,0,0,0,2V14a1,1,0,0,0,1,1H15a1,1,0,0,0,1-1V2A1,1,0,0,0,15,1ZM2,3h8V13H2Z" transform="translate(0 -1)"/>
    </svg>
  )
}

function Palette ({ className, width, height, viewBox, color }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width={width} height={height} viewBox={viewBox}>
      <path fill={color} fillRule="nonzero" d="M13.9 3.8c-3.6-1.7-6.6 1.8-8 0-.5-.7.7-2 0-2.9C5.4.3 4.2.4 3.5.9 1.4 2.4 0 4.8 0 7.5c0 4.4 3.6 8 8 8 3.7 0 6.8-2.5 7.7-5.9.4-1.1.8-4.5-1.8-5.8zM3 8c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm2 4c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm4 2c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm3-4c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
    </svg>
  )
}

function Lightbox ({ className, width, height, color }) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 562 562" xmlns="http://www.w3.org/2000/svg">
      <path fill={color} d="M561.547 408.098v-357c0-28.05-22.95-51-51-51h-357c-28.05 0-51 22.95-51 51v357c0 28.05 22.95 51 51 51h357c28.05 0 51-22.95 51-51zm-318.75-140.25l63.75 76.5 89.25-114.75 114.75 153h-357l89.25-114.75zM.547 127.098v383c0 28.05 22.95 51 51 51h383c13.807 0 25-11.193 25-25v-1c0-13.807-11.193-25-25-25h-383v-383c0-13.807-11.193-25-25-25h-1c-13.807 0-25 11.193-25 25z" fillRule="nonzero"/>
    </svg>
  )
}

function Filter ({ className, width, height, color }) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 402.577 402.577" xmlns="http://www.w3.org/2000/svg">
      <path fill={color} d="M400.858 11.427C397.617 4.006 392.008.295 384.004.291H18.564c-7.993 0-13.61 3.715-16.846 11.136-3.234 7.801-1.903 14.467 3.999 19.985l140.757 140.753V310.92c0 4.955 1.809 9.232 5.424 12.854l73.085 73.083c3.429 3.614 7.71 5.428 12.851 5.428 2.282 0 4.66-.479 7.135-1.43 7.426-3.238 11.14-8.851 11.14-16.845V172.166L396.861 31.413c5.904-5.518 7.232-12.182 3.997-19.986z"/>
    </svg>
  )
}

function Slider ({ className, width, height, color }) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <g fill={color} fillRule="evenodd">
        <path d="M458.694 320.33a21.207 21.207 0 01-12.778-4.267c-9.43-7.062-11.35-20.438-4.267-29.867l22.4-29.867-22.4-29.866c-7.083-9.43-5.163-22.806 4.267-29.867 9.408-7.104 22.762-5.163 29.845 4.267l32 42.666c5.696 7.574 5.696 18.027 0 25.6l-32 42.667c-4.16 5.59-10.56 8.533-17.067 8.533zM53.404 320.33c-6.507 0-12.886-2.945-17.088-8.534l-32-42.667c-5.696-7.573-5.696-18.026 0-25.6l32-42.666c7.06-9.408 20.437-11.35 29.866-4.267 9.43 7.061 11.35 20.437 4.267 29.867l-22.4 29.866 22.4 29.867c7.083 9.43 5.163 22.805-4.267 29.867a21.207 21.207 0 01-12.778 4.266z"/>
        <path d="M351.38 512.659H160.72c-35.285 0-54.004-22.49-54.004-64.887V64.888C106.716 22.491 125.435 0 160.72 0h190.66c35.285 0 54.002 22.491 54.002 64.888v382.884c0 42.397-18.717 64.887-54.002 64.887z" fillRule="nonzero"/>
      </g>
    </svg>
  )
}

function Flash ({ className, color, width = '11', height = '16', viewBox = '0 0 11 16' }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
      <g fill={color} fillRule="nonzero">
        <path d="M7.2,0 L3.4,0 C3,0 2.6,0.3 2.4,0.7 L0.4,7.7 C0.2,8.4 0.7,9 1.3,9 L5,9 L3.5,16 L10.8,6.6 C11.3,6 10.8,5 10,5 L7,5 L8.1,1.3 C8.3,0.6 7.8,0 7.2,0 Z" />
      </g>
    </svg>
  )
}

function Dashboard ({ className, color, width = '16', height = '16', viewBox = '0 0 16 16' }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
      <path d="M8 0C3.589 0 0 3.589 0 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm5.91 9H8.677L6.929 4.628l-1.858.744L6.523 9H2.09A5.998 5.998 0 012 8c0-3.309 2.691-6 6-6s6 2.691 6 6c0 .341-.035.674-.09 1z" fill={color} fillRule="nonzero"/>
    </svg>
  )
}

function Guides ({ className, color, width = '16', height = '16', viewBox = '0 0 16 16' }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
      <g fill={color} fillRule="nonzero">
        <path d="M7 3v10H5v2h3a1 1 0 001-1V4h2V2H8a1 1 0 00-1 1z"/>
        <circle cx="2" cy="14" r="2"/>
        <path d="M12 0v6l4-3z"/>
      </g>
    </svg>
  )
}

function Article ({ className, color, width = '16', height = '16', viewBox = '0 0 16 16' }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
      <path d="M15 15V5l-5-5H2c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h12c.6 0 1-.4 1-1zM3 2h6v4h4v8H3V2z" fill={color} fillRule="nonzero"/>
    </svg>
  )
}

function Pulse ({ className, color, width = '16', height = '16', viewBox = '0 0 16 16' }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
      <path fill={color} d="M15,0 L1,0 C0.4,0 0,0.4 0,1 L0,15 C0,15.6 0.4,16 1,16 L15,16 C15.6,16 16,15.6 16,15 L16,1 C16,0.4 15.6,0 15,0 Z M14,14 L2,14 L2,9 L4.5,9 L6,6.8 L10,12.8 L12.5,9 L14,9 L14,14 Z M14,7 L11.5,7 L10,9.2 L6,3.2 L3.5,7 L2,7 L2,2 L14,2 L14,7 Z" />
    </svg>
  )
}

function Edit ({ className, color, width = '16', height = '16', viewBox = '0 0 16 16' }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
      <path fill={color} d="M14.1,0.3 C13.7,-0.1 13.1,-0.1 12.7,0.3 L6,7 L6,10 L9,10 L15.7,3.3 C16.1,2.9 16.1,2.3 15.7,1.9 L14.1,0.3 Z" />
      <path fill={color} d="M15,9 C14.4,9 14,9.4 14,10 L14,14 L2,14 L2,2 L6,2 C6.6,2 7,1.6 7,1 C7,0.4 6.6,0 6,0 L1,0 C0.4,0 0,0.4 0,1 L0,15 C0,15.6 0.4,16 1,16 L15,16 C15.6,16 16,15.6 16,15 L16,10 C16,9.4 15.6,9 15,9 Z" />
    </svg>
  )
}

function ContentApproved ({ className, color, width = '16', height = '16' }) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 17 14" xmlns="http://www.w3.org/2000/svg">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g fill={color} fillRule="nonzero">
          <path d="M15.6247423,2 L1.65360816,2 C1.10274629,2 0.65567,1.552 0.65567,1 L0.65567,1 C0.65567,0.448 1.10274629,0 1.65360816,0 L15.6247423,0 C16.1756042,0 16.6226805,0.448 16.6226805,1 L16.6226805,1 C16.6226805,1.552 16.1756042,2 15.6247423,2 Z"/>
          <path d="M15.6247423,6 L1.65360816,6 C1.10274629,6 0.65567,5.552 0.65567,5 L0.65567,5 C0.65567,4.448 1.10274629,4 1.65360816,4 L15.6247423,4 C16.1756042,4 16.6226805,4.448 16.6226805,5 L16.6226805,5 C16.6226805,5.552 16.1756042,6 15.6247423,6 Z"/>
          <path d="M5.64536078,10 L1.65360816,10 C1.10174836,10 0.65567,9.553 0.65567,9 C0.65567,8.447 1.10174836,8 1.65360816,8 L5.64536078,8 C6.19722058,8 6.64329894,8.447 6.64329894,9 C6.64329894,9.553 6.19722058,10 5.64536078,10 Z"/>
          <path d="M5.64536078,14 L1.65360816,14 C1.10174836,14 0.65567,13.553 0.65567,13 C0.65567,12.447 1.10174836,12 1.65360816,12 L5.64536078,12 C6.19722058,12 6.64329894,12.447 6.64329894,13 C6.64329894,13.553 6.19722058,14 5.64536078,14 Z"/>
          <path d="M11.6329898,14 C11.3775176,14 11.1220454,13.902 10.9274475,13.707 L8.93157126,11.707 C8.54137745,11.316 8.54137745,10.684 8.93157126,10.293 C9.32176506,9.902 9.95246195,9.902 10.3426558,10.293 L11.6329898,11.586 L14.9192,8.293 C15.3093938,7.902 15.9400907,7.902 16.3302845,8.293 C16.7204783,8.684 16.7204783,9.316 16.3302845,9.707 L12.338532,13.707 C12.1439341,13.902 11.8884619,14 11.6329898,14 Z"/>
        </g>
      </g>
    </svg>
  )
}

function Dragger ({ className, width, height, viewBox, color }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width={width} height={height} viewBox={viewBox}>
      <g fill="none">
        <g fill={color}>
          <rect width="1" height="16" />
          <rect x="5" width="1" height="16" />
          <rect x="10" width="1" height="16" />
        </g>
      </g>
    </svg>
  )
}

function PaperClip ({ className, width, height, viewBox, color }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width={width} height={height} viewBox={viewBox}>
      <g fill={color}>
        <path d="M5 5v4c0 1.7 1.3 3 3 3s3-1.3 3-3V4.5C11 2 9 0 6.5 0S2 2 2 4.5V10c0 3.3 2.7 6 6 6s6-2.7 6-6V4h-2v6c0 2.2-1.8 4-4 4s-4-1.8-4-4V4.5C4 3.1 5.1 2 6.5 2S9 3.1 9 4.5V9c0 0.6-0.4 1-1 1S7 9.6 7 9V5H5z"/>
      </g>
    </svg>
  )
}

function Invoicing ({ className, width, height, viewBox, color }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width={width} height={height} viewBox={viewBox}>
      <path fill={color} fillRule="evenodd" d="M12 2l-2-2-2 2-2-2-2 2-3-2v15c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V0l-3 2zM4 12v-2h8v2H4zm0-6v2h8V6H4z" clipRule="evenodd"/>
    </svg>
  )
}

function Banking ({ className, width, height, viewBox, color }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width={width} height={height} viewBox={viewBox}>
      <g fill={color}>
        <path d="M8 6c2.9 0 6-.9 6-3s-3.1-3-6-3-6 .9-6 3 3.1 3 6 3z"/>
        <path d="M2 6.5V8c0 2.1 3.1 3 6 3s6-.9 6-3V6.5C12.6 7.4 10.5 8 8 8s-4.6-.6-6-1.5zM2 11.5V13c0 2.1 3.1 3 6 3s6-.9 6-3v-1.5c-1.4 1-3.5 1.5-6 1.5s-4.6-.6-6-1.5z"/>
      </g>
    </svg>
  )
}

function Checkbox ({ className, width = '16', height = '16', color }) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 15 16" xmlns="http://www.w3.org/2000/svg">
      <g fill={color}>
        <path d="M13.3 2.23L7 8.514 5.7 7.218c-.4-.4-1-.4-1.4 0-.4.399-.4.997 0 1.396l2 1.996c.2.2.4.3.7.3.3 0 .5-.1.7-.3l7-6.984c.4-.399.4-.998 0-1.397s-1-.399-1.4 0z"/>
        <path d="M1 15.897h12c.6 0 1-.399 1-.997V9.91c0-.598-.4-.997-1-.997s-1 .399-1 .997v3.991H2V3.925h5c.6 0 1-.399 1-.997 0-.599-.4-.998-1-.998H1c-.6 0-1 .4-1 .998V14.9c0 .598.4.997 1 .997z"/>
      </g>
    </svg>
  )
}

function Circle ({width, height, viewBox, color}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={viewBox}>
      <path fill={color} d="M8,16a8,8,0,1,1,8-8A8,8,0,0,1,8,16ZM8,1a7,7,0,1,0,7,7A7,7,0,0,0,8,1Z"/>
    </svg>
  )
}

function SolidCircle ({ className, width, height, viewBox, color }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
      <path fillRule="nonzero" fill={color} d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z"/>
    </svg>
  )
}

function Bank ({ className, width, height, viewBox, color }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.3333 14h-.6666V8.6667h-1.3334V14h-2.6666V8.6667H9.3333V14H6.6667V8.6667H5.3333V14H2.6667V8.6667H1.3333V14H.6667A.6665.6665 0 000 14.6667c0 .3686.2987.6666.6667.6666h14.6666c.368 0 .6667-.298.6667-.6666A.6665.6665 0 0015.3333 14zM15.6527 4.0815l-7.3334-4a.67.67 0 00-.6386 0l-7.3334 4A.6668.6668 0 000 4.6668v2c0 .3687.2987.6667.6667.6667h14.6666c.368 0 .6667-.298.6667-.6667v-2a.6668.6668 0 00-.3473-.5853zM8 5.3335c-.7367 0-1.3333-.5967-1.3333-1.3333 0-.7367.5966-1.3334 1.3333-1.3334.7367 0 1.3333.5967 1.3333 1.3334 0 .7366-.5966 1.3333-1.3333 1.3333z" fill={color}/>
    </svg>
  )
}

function Card ({ className, width='21', height='14', viewBox='0 0 21 14', color }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.98 0H1.02C.45 0 0 .4 0 .9v11.95c0 .5.45.9 1.02.9h18.96c.57 0 1.02-.4 1.02-.9V.9c0-.5-.45-.9-1.02-.9zM16.5 2.6c-.1-.14-.05-.32.1-.41a.4.4 0 01.49.07 3.46 3.46 0 010 4.33.4.4 0 01-.48.08c-.16-.09-.2-.27-.11-.4a2.93 2.93 0 000-3.67zm-1.05.9c-.1-.14-.05-.32.1-.4a.35.35 0 01.45.1c.6.84.6 1.92 0 2.77a.34.34 0 01-.27.14.35.35 0 01-.18-.05.3.3 0 01-.14-.18.27.27 0 01.04-.22c.47-.66.47-1.5 0-2.16zm-1.07.63c-.07-.15-.02-.35.12-.43.14-.08.31-.02.38.13.23.47.23 1.03 0 1.5a.28.28 0 01-.24.17c-.1 0-.2-.06-.25-.15a.36.36 0 010-.33c.13-.27.13-.6 0-.89zM2.8 2.75c0-.17.16-.3.35-.3h3.5c.2 0 .35.13.35.3v2.14c0 .17-.16.3-.35.3h-3.5c-.2 0-.35-.13-.35-.3V2.75zm9.11 7.94H3.14c-.19 0-.34-.14-.34-.3 0-.18.15-.31.34-.31h8.77c.19 0 .34.13.34.3 0 .17-.15.3-.34.3zm1.56-5.8c-.28 0-.52-.2-.52-.46 0-.25.24-.46.53-.46.28 0 .52.2.52.46 0 .25-.24.46-.53.46zm4.38 5.8h-3.5c-.2 0-.35-.14-.35-.3 0-.18.16-.31.35-.31h3.5c.2 0 .35.13.35.3 0 .17-.16.3-.35.3z" fill={color}/>
    </svg>
  )
}

function Contract ({ className, width='17', height='16', viewBox='0 0 17 16', color }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M3.906 4.726c-.733 1.219-1.14 2.774-.792 4.495a1 1 0 1 1-1.96.397c-.462-2.279.085-4.339 1.038-5.923C3.131 2.135 4.51.964 5.831.497 6.488.264 7.243.17 7.936.434c.75.286 1.238.918 1.426 1.73.177.766.095 1.698-.199 2.76-.238.863-.629 1.861-1.196 3.006.182-.114.37-.244.553-.385a9.251 9.251 0 0 1 1.358-.88c.378-.194.88-.403 1.367-.38.274.012.665.107.955.454.283.338.316.73.294 1-.041.497-.307 1.046-.639 1.59-.113.185-.209.348-.287.489.139-.028.298-.064.479-.11.817-.211 1.98-.601 3.594-1.222a1 1 0 0 1 .718 1.867c-1.637.63-2.884 1.052-3.814 1.291-.465.12-.875.2-1.23.233-.338.032-.711.03-1.054-.086-.392-.132-.753-.42-.908-.89-.13-.396-.062-.776.01-1.028.06-.21.151-.431.26-.655-.406.302-.83.565-1.234.77-.426.215-.896.397-1.334.45a1.744 1.744 0 0 1-.803-.075 1.299 1.299 0 0 1-.784-.766 1.598 1.598 0 0 1-.037-.942 3.34 3.34 0 0 1 .318-.79c.774-1.437 1.24-2.584 1.486-3.473.25-.902.25-1.466.178-1.778-.06-.262-.152-.297-.187-.31h-.002c-.09-.035-.323-.064-.727.078-.802.284-1.843 1.101-2.591 2.344zm7.371 5.736.002-.01a.067.067 0 0 1-.002.01zM6.794 8.454H6.8h-.006zm.581.672zM1 15a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1z" fill={color}/>
    </svg>
  )
}

function MinusCircle ({ className, width='16', height='16', viewBox='0 0 16 16', color }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0Z" fill={color}/>
      <rect x="4" y="7" width="8" height="2" fill="white"/>
    </svg>
  )
}

function RepeatCircle ({ className, width='16', height='16', viewBox='0 0 16 16', color }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M0 8C0 3.6 3.6 0 8 0C12.4 0 16 3.6 16 8C16 12.4 12.4 16 8 16C3.6 16 0 12.4 0 8ZM11.8067 4.01424C11.8389 4.00795 11.8723 4.01135 11.9027 4.024C11.933 4.03672 11.959 4.05812 11.9772 4.08551C11.9955 4.1129 12.0053 4.14507 12.0053 4.178V7.58C12.0055 7.60193 12.0013 7.62368 11.993 7.64399C11.9847 7.66429 11.9724 7.68273 11.9569 7.69824C11.9414 7.71375 11.923 7.72602 11.9027 7.73434C11.8824 7.74265 11.8606 7.74684 11.8387 7.74666H11.82L8.72667 7.404C8.69531 7.40075 8.66553 7.38861 8.64084 7.369C8.61616 7.3494 8.59759 7.32314 8.58733 7.29333C8.57716 7.26369 8.57552 7.23179 8.58259 7.20126C8.58967 7.17074 8.60517 7.14281 8.62733 7.12066L9.75733 6C9.27337 5.56939 8.64779 5.33207 8 5.33333C7.54545 5.33333 7.09844 5.44952 6.70143 5.67087C6.30441 5.89222 5.97057 6.21138 5.7316 6.59805C5.49263 6.98471 5.35646 7.42604 5.33603 7.88013C5.3156 8.33422 5.41158 8.786 5.61486 9.19256C5.81814 9.59913 6.12197 9.94698 6.49751 10.2031C6.87304 10.4592 7.3078 10.6151 7.76052 10.6559C8.21323 10.6967 8.66887 10.6211 9.08416 10.4363C9.49944 10.2515 9.8606 9.96364 10.1333 9.59999C10.2394 9.45855 10.3974 9.36503 10.5724 9.34003C10.6591 9.32765 10.7473 9.33246 10.8321 9.35419C10.9169 9.37591 10.9966 9.41413 11.0667 9.46666C11.2081 9.57275 11.3016 9.73068 11.3266 9.90571C11.3516 10.0807 11.3061 10.2585 11.2 10.4C10.7909 10.9455 10.2492 11.3773 9.62624 11.6545C9.0033 11.9317 8.31985 12.0451 7.64078 11.9838C6.96171 11.9226 6.30956 11.6888 5.74626 11.3046C5.18296 10.9205 4.72721 10.3987 4.42229 9.78885C4.11737 9.17901 3.9734 8.50134 4.00404 7.8202C4.03469 7.13906 4.23894 6.47707 4.5974 5.89707C4.95585 5.31707 5.45662 4.83833 6.05214 4.50631C6.64766 4.17428 7.31817 4 8 4C9.0046 3.9978 9.97245 4.37769 10.7073 5.06266L11.7213 4.05933C11.7447 4.03621 11.7744 4.02052 11.8067 4.01424Z" fill={color}/>
    </svg>
  )
}

function BadgeCard ({ className, width='16', height='16', viewBox='0 0 16 16', color }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M15 5H11V3C11 1.3 9.7 0 8 0C6.3 0 5 1.3 5 3V5H1C0.4 5 0 5.4 0 6V15C0 15.6 0.4 16 1 16H15C15.6 16 16 15.6 16 15V6C16 5.4 15.6 5 15 5ZM7 3C7 2.4 7.4 2 8 2C8.6 2 9 2.4 9 3V5H7V3ZM2 7V14H14V7H2Z" fill={color}/>
      <rect x="4" y="9" width="3" height="3" fill={color}/>
      <rect x="8" y="9" width="4" height="1" fill={color}/>
      <rect x="8" y="11" width="4" height="1" fill={color}/>
    </svg>
  )
}

function HeadphonesMic ({ className, width='16', height='16', color }) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 17.584V19C4 21.209 5.791 23 8 23H12" stroke={color} strokeWidth="2" strokeMiterlimit="10"/>
    <path d="M4 8.406V8C4 4.134 7.134 1 11 1H13C16.866 1 20 4.134 20 8V8.422" stroke={color} strokeWidth="2" strokeMiterlimit="10"/>
    <path d="M7 8.101C6.677 8.035 6.343 8 6 8C3.239 8 1 10.239 1 13C1 15.761 3.239 18 6 18C6.343 18 6.677 17.965 7 17.899V8.101Z" stroke={color} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square"/>
    <path d="M17 17.899C17.323 17.965 17.657 18 18 18C20.761 18 23 15.761 23 13C23 10.239 20.761 8 18 8C17.657 8 17.323 8.035 17 8.101V17.899Z" stroke={color} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square"/>
  </svg>
  )
}

function CheckmarkLarge ({ className, width='16', height='16', viewBox='0 0 16 16', color='#84839C' }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 8l4 4 8-8" stroke={color} strokeWidth="2" strokeLinecap="square"/>
    </svg>
  )
}

function NoticeOutlined ({ className, width='16', height='16', viewBox='0 0 16 16', color='#84839C' }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 8c0 3.848-3.152 7-7 7s-7-3.152-7-7 3.152-7 7-7 7 3.152 7 7z" stroke={color} strokeWidth="2"/>
      <path d="M8 4c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zM7 7h2v5H7V7z" fill={color}/>
    </svg>
  )
}

function Archive ({ className, width='16', height='16', viewBox='0 0 16 16', color='#84839C' }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" width={width} height={height} viewBox={viewBox}>
      <path fill={color} d="M15.977 4.887a.974.974 0 0 0-.04-.2.91.91 0 0 0-.089-.186 1.03 1.03 0 0 0-.048-.1l-3-4A1 1 0 0 0 12 0H4a1 1 0 0 0-.8.4l-3 4a1.047 1.047 0 0 0-.048.1.892.892 0 0 0-.089.187.957.957 0 0 0-.04.2A.885.885 0 0 0 0 5v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a.87.87 0 0 0-.023-.113ZM8 13.5 5 10h2V7h2v3h2l-3 3.5ZM3 4l1.5-2h7L13 4H3Z"/>
    </svg>
  )
}

function Questionnaire ({ className, width='16', height='16', viewBox='0 0 16 16', color='#84839C' }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.632 1.23H.75A.75.75 0 0 0 0 1.981v4.881c0 .415.336.751.75.751h4.882a.75.75 0 0 0 .75-.75V1.98a.75.75 0 0 0-.75-.75ZM10.138 17h4.88a.75.75 0 0 0 .752-.75v-4.882a.75.75 0 0 0-.751-.75h-4.881a.75.75 0 0 0-.751.75v4.881a.75.75 0 0 0 .75.751ZM5.632 10.617H.75a.75.75 0 0 0-.751.751v4.881A.75.75 0 0 0 .75 17h4.882a.75.75 0 0 0 .75-.75v-4.882a.75.75 0 0 0-.75-.75Z" fill={color}/>
      <path d="M11.417 5.843 9.574 4.001l-.796.796 2.275 2.276a.563.563 0 0 0 .399.165h.023a.566.566 0 0 0 .407-.2l4.493-5.31-.86-.728-4.098 4.843Z" fill={color} stroke={color}/>
    </svg>
  )
}

function Upload ({ className, width='16', height='16', viewBox='0 0 16 16', color='#84839C' }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.333 15.667h13.334" stroke={color} strokeWidth="2" strokeLinecap="square"/>
      <path d="M6.667 9.778H9.11V6.11h3.667L7.888 0 3 6.111h3.667v3.667Z" fill={color}/>
    </svg>
  )
}

function ShareFeedback ({ className, width='16', height='16', viewBox='0 0 16 16', color='#84839C' }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path clipRule="evenodd" d="M11.667 1h-9.6C1.477 1 1 1.478 1 2.067v6.4c0 .588.478 1.066 1.067 1.066H4.2v3.2l3.2-3.2h4.267c.588 0 1.066-.478 1.066-1.066v-6.4c0-.59-.478-1.067-1.066-1.067Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.4 13.8h3.2l3.2 3.2v-3.2h2.133c.59 0 1.067-.478 1.067-1.067v-6.4c0-.589-.478-1.066-1.067-1.066h-1.066" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function Spaceship ({ className, width='16', height='16', viewBox='0 0 16 16', color='#84839C' }) {
  return (
    <svg className={className} width={width} height={height} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M15.295 0a.67.67 0 0 1 .703.709c-.532 9.358-8.862 12.87-8.946 12.904a.67.67 0 0 1-.727-.146L2.533 9.675a.67.67 0 0 1-.148-.723C2.42 8.867 5.892.492 15.295 0ZM8.87 7.856a1.34 1.34 0 1 0 1.026-2.477A1.34 1.34 0 0 0 8.87 7.855Z" fill={color}/>
      <path d="M.746 12.544a1.906 1.906 0 1 1 2.696 2.696C2.697 15.984 0 16 0 16s0-2.712.746-3.456ZM6.942 1.483a5.973 5.973 0 0 0-6.18 2.871.67.67 0 0 0 .105.814L2.2 6.502a17.844 17.844 0 0 1 4.742-5.02ZM14.517 9.058a5.972 5.972 0 0 1-2.871 6.18.67.67 0 0 1-.815-.105L9.498 13.8a17.844 17.844 0 0 0 5.02-4.742Z" fill={color}/>
    </svg>
  )
}

function Zap ({ className, width='11', height='16', color='#D7D7DE', viewBox='0 0 11 16' }) {
  return (
    <svg width={width} height={height} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.84479 0H3.04479C2.64479 0 2.24479 0.3 2.04479 0.7L0.0447901 7.7C-0.15521 8.4 0.34479 9 0.94479 9H4.64479L3.14479 16L10.4448 6.6C10.9448 6 10.4448 5 9.64479 5H6.64479L7.74479 1.3C7.94479 0.6 7.44479 0 6.84479 0Z" fill={color} />
    </svg>
  )
}

const icons = [
  Check,
  Checkmark,
  Lock,
  Notice,
  Disabled,
  Help,
  Search,
  Draggable,
  ChevronRight,
  ChevronLeft,
  Home,
  TimesCircle,
  RemoveCircle,
  PlusCircle,
  SolidCircle,
  Plus,
  Minus,
  ShoppingCart,
  Team,
  Briefcase,
  Image,
  Video,
  Camera,
  Play,
  Award,
  Client,
  Testimonial,
  Blog,
  Announcement,
  Export,
  Link,
  Unlink,
  Calendar,
  QuestionCircle,
  BulletPoints,
  Product,
  DateIcon,
  Clock,
  ImageUpload,
  Close,
  ImageUpload,
  AlignCenter,
  AlignLeft,
  AlignRight,
  AppearanceAdvanced,
  AppearanceAppearance,
  AppearanceLayout,
  PageListingSections,
  PageListingSeo,
  CloseMedia,
  Back,
  Gear,
  Desktop,
  Tablet,
  Mobile,
  ClearFormatting,
  StrikeThrough,
  Underline,
  Bold,
  Italic,
  UnorderedList,
  OrderedList,
  ContentIcon,
  CheckSelected,
  CheckmarkCircle,
  CheckBold,
  XBold,
  Folder,
  Todo,
  Star,
  StarFilled,
  Post,
  CaseStudy,
  Form,
  ContactInformation,
  Customer,
  CustomerFilled,
  Event,
  Faq,
  Integration,
  Location,
  Media,
  Steps,
  Project,
  SimpleText,
  TestimonialRound,
  FieldMapping,
  Sort,
  HeaderFooter,
  Pages,
  AddSectionIntegration,
  Move,
  Duplicate,
  Delete,
  Visible,
  Hidden,
  ArrowCircle,
  InfoCircle,
  WindowCode,
  Analytics,
  SEO,
  IncompleteStep,
  Style,
  Share,
  Account,
  HomeEmpty,
  Logout,
  Badge,
  Pencil,
  Upgrade,
  CreditCard,
  Indent,
  B12Logo,
  Key,
  Animations,
  DiagonalArrow,
  Import,
  AddCustomer,
  CaretDown,
  Availability,
  Repeat,
  CalendarEvent,
  Service,
  Payments,
  Email,
  AppCube,
  MagicWand,
  Layout,
  Send,
  Code,
  User,
  Section,
  Tag,
  Welcome,
  Website,
  Chat,
  RotateForward,
  Globe,
  At,
  Target,
  IconRow,
  IconColumn,
  IconSection,
  FolderFilled,
  BlogPost,
  MenuItems,
  Popup,
  Flag,
  Testimonials,
  Chart,
  Pause,
  HubspotLogo,
  Sidebar,
  Palette,
  Lightbox,
  Filter,
  Slider,
  Dashboard,
  Guides,
  Article,
  Pulse,
  Edit,
  ContentApproved,
  Dragger,
  PaperClip,
  Invoicing,
  Banking,
  Circle,
  Bank,
  Card,
  Contract,
  MinusCircle,
  RepeatCircle,
  BadgeCard,
  HeadphonesMic,
  CheckmarkLarge,
  NoticeOutlined,
  Archive,
  Questionnaire,
  Upload,
  ShareFeedback,
  Spaceship,
  Zap
]

each(icons, (icon) => {
  icon.defaultProps = assign({}, defaultProps)
  icon.propTypes = assign({}, defaultPropTypes)
})

export { Check, Checkmark, Lock, Notice, Disabled, Help, Search, Draggable,
  ChevronRight, ChevronLeft, Home, TimesCircle, RemoveCircle, SolidCircle, PlusCircle, Plus, Minus, ShoppingCart, Team,
  Briefcase, Image, Video, Camera, Play, Award, Client, Testimonial, Blog,
  Announcement, Export, Link, Unlink, Calendar, QuestionCircle, DateIcon, Clock, ImageUpload,
  AlignCenter, AlignLeft, AlignRight, Close, AppearanceLayout, AppearanceAppearance,
  AppearanceAdvanced, CloseMedia, Product, BulletPoints, Gear, Back, Desktop, Tablet,
  Mobile, PageListingSections, PageListingSeo, ClearFormatting, StrikeThrough, Underline, Bold, Italic, UnorderedList, OrderedList,
  ContentIcon, CheckSelected, CheckmarkCircle, Folder, Todo, Star, StarFilled, Post, CaseStudy, Form,
  ContactInformation, Customer, CustomerFilled, Event, Faq, Integration, Location, Media,
  Steps, Project, SimpleText, TestimonialRound, FieldMapping, CheckBold, XBold, Sort,
  HeaderFooter, Pages, AddSectionIntegration, Move, Duplicate, Delete, Visible, Hidden,
  ArrowCircle, InfoCircle, WindowCode, Analytics, SEO, Style, Share, Account, HomeEmpty,
  IncompleteStep, Logout, Badge, Pencil, Upgrade, CreditCard, Indent, B12Logo, Key, Animations,
  DiagonalArrow, Import, AddCustomer, CaretDown, Availability, Repeat, CalendarEvent, Payments,
  Service, Email, AppCube, MagicWand, Layout, Send, Code, User, Section, Tag, Welcome, Website, Chat,
  RotateForward, Globe, At, Target, IconRow, IconColumn, IconSection, FolderFilled, BlogPost, MenuItems, Popup,
  Flag, Testimonials, Chart, Pause, HubspotLogo, AlignLeftV2, AlignRightV2, AlignCenterV2, AlignJustifyV2, Sidebar, Palette, Lightbox, Filter, Slider,
  Flash, Dashboard, Guides, Article, Pulse, Edit, ContentApproved, Dragger, PaperClip, Invoicing, Banking, Checkbox, Circle, Bank, Card, Contract,
  MinusCircle, RepeatCircle, BadgeCard, HeadphonesMic, CheckmarkLarge, NoticeOutlined, Archive, Questionnaire, Upload, ShareFeedback, Spaceship, Zap,
}
