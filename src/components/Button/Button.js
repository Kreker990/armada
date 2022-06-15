import React from 'react'
import './Button.css'



export default function Button(props) {
  return (
    <>
    <button variant="contained" disableElevation>
    {props.text}
    </button>
    </>
  )
}
