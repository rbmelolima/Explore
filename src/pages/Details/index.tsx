import React, { useState, useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import axios from 'axios'
import key from '../../key'
import apod from '../../protocols/apod'

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
    try {
      const response = await axios.get<apod>(`https://api.nasa.gov/planetary/apod?api_key=${key}&date=${date}`)
      setData(response.data)
    }
    catch (error) {

    }
  }

  if (data === null) {
    return <h1>Aguarde</h1>
  }

  return (
    <main>
      <div className="content">
        <header>
          <h1>Details</h1>
          <p>{data?.explanation}</p>
        </header>

        <img src={data?.url} alt={data?.title} />
      </div>
    </main>
  )
}