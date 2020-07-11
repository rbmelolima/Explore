import React from 'react'
import './style.css'


export default function Grid(props) {
  return (
    <section className="grid">
      {
        props.children
      }
    </section>
  )
}