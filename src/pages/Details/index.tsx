import React, { useState, useEffect } from 'react'
import { RouteComponentProps, Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import axios from 'axios'

import key from '../../key'
import apod from '../../protocols/apod'
import Loading from '../../components/Loading'

import './style.css'

interface params {
  date: string
}

export default function Details({ match }: RouteComponentProps<params>) {
  const [data, setData] = useState<apod>()

  useEffect(() => {
    const date = match.params.date
    getDetails(date)
  }, [match.params.date])

  async function getDetails(date: string) {
    const photos = sessionStorage.getItem('photos')

    if (photos !== undefined && photos !== null) {
      const arrayPhotos: apod[] = JSON.parse(photos)
      const detail = arrayPhotos.filter(item => item.date === date)

      if (detail.length <= 0) {
        try {
          const response = await axios.get<apod>(`https://api.nasa.gov/planetary/apod?api_key=${key}&date=${date}`)
          setData(response.data)
        } catch (error) {

        }
      }
      else {
        setData(detail[0])
      }
    }

    else {
      try {
        const response = await axios.get<apod>(`https://api.nasa.gov/planetary/apod?api_key=${key}&date=${date}`)
        setData(response.data)
      } catch (error) {

      }
    }
  }

  if (data === null) {
    console.log("Data is null " + data)
    return <Loading />

  }

  return (
    <main>
      <div className="content">
        <header>
          <Link to="/">
            <FaArrowLeft color="fff" size={24} />
          </Link>
          <h1>{data?.title}</h1>
          <p>{data?.explanation}</p>
        </header>

        <div className="img-container" style={{ backgroundImage: `url(${data?.hdurl})` }}></div>
        <div className="img-information">
          <p>{`${data?.copyright !== undefined ? 'Author: ' + data?.copyright : 'Public domain'}`}</p>
          <p>{data?.date}</p>
        </div>
      </div>
    </main>
  )
}