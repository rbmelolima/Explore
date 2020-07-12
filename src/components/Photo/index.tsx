import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export default function Photo(props: any) { 
  const background = {
    backgroundImage: `url(${props.url})`
  }

  return (
    <Link to={`/details/${props.date}`} title={`Click to more details about ${props.title}`}>
      <div className="photo-background" style={background}></div>
    </Link>
  )
}