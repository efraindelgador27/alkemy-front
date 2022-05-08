import React from 'react'
import style from './btn.module.css'

export default function Btn(props) {
  return (
    
        <button className={props.style?props.style:style.btn} onClick={props.CB}>{props.title}</button>
    
  )
}
