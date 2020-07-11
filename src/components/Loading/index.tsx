import React from 'react'
import Lottie from 'react-lottie'
import planetAnimation from '../../assets/lotties/13892-earth-and-connections.json'
import './style.css'

export default function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: planetAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className="loading">
      <div className="content">
        <Lottie
          options={defaultOptions}
          height={300}
          width={300}
          title={"Loading"}
        />

        <h4>Loading...</h4>
      </div>

    </div>
  )
}