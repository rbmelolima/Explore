import React from 'react'
import './style.css'


export default function Photo(props) {
  const background = {
    backgroundImage: `url(${props.url})`
  }

  return (
    <a href="/" className="photo-link" name={props.description}>
      <div className="photo-background" style={background}></div>
    </a>
  )
}