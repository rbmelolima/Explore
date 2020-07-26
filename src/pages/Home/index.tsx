import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './style.css'

import Grid from '../../components/Grid'
import Photo from '../../components/Photo'
import key from '../../key'
import apod from '../../protocols/apod'
import Loading from '../../components/Loading'

import backupPhotos from '../../backup/index'

export default function Home() {
  const [photos, setPhotos] = useState<apod[]>([])

  useEffect(() => {
    getPhotos()
  }, [])

  async function getPhotos() {
    const photosSession = sessionStorage.getItem('photos')

    if (photosSession === null) {
      try {
        const response = await axios.get<apod[]>(`https://api.nasa.gov/planetary/apod?api_key=${key}&count=35&hd=true`)
        if (response.status === 200) {
          const filtered = response.data.filter(photo => photo.media_type === "image")
          const jsonPhotos = JSON.stringify(filtered)
          setPhotos(filtered)
          sessionStorage.setItem('photos', jsonPhotos)
        }

      } catch (error) {
        setPhotos(backupPhotos)
      }
    }

    else {
      const parse = JSON.parse(photosSession)
      setPhotos(parse)
    }
  }

  async function getMorePhotos() {
    const clean = () => sessionStorage.clear()
    clean()
    getPhotos()
  }

  if (photos.length === 0) {
    return <Loading />
  }

  return (
    <main>
      <div className="content">
        <header>
          <h1>Explore</h1>
          <p>Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.</p>
          <button className="btn-primary" onClick={() => getMorePhotos()}>More photos!</button>
        </header>

        <Grid>
          {
            photos.length > 0 ?
              photos.map(item => (
                <Photo date={item.date} url={item.url} title={item.title} key={item.date} />
              ))
              : <> </>
          }
        </Grid>
      </div>
    </main>
  )
}

