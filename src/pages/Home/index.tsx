import React from 'react'
import './style.css'

import Grid from '../../components/Grid'
import Photo from '../../components/Photo'

export default function Home() {
  return (
    <main>
      <div className="content">
        <header>
          <h1>Explore</h1>
          <p>Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.</p>
          <button>More photos!</button>
        </header>

        <Grid>
          <Photo
            url={"https://images.unsplash.com/photo-1594323721261-d4905cea3791?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80"}
            description={"aaa"}
          />
          <Photo
            url={"https://images.unsplash.com/photo-1594323721261-d4905cea3791?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80"}
            description={"aaa"}
          />
          <Photo
            url={"https://images.unsplash.com/photo-1594323721261-d4905cea3791?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80"}
            description={"aaa"}
          />
          <Photo
            url={"https://images.unsplash.com/photo-1594323721261-d4905cea3791?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80"}
            description={"aaa"}
          />
          <Photo
            url={"https://images.unsplash.com/photo-1594323721261-d4905cea3791?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80"}
            description={"aaa"}
          />
          <Photo
            url={"https://images.unsplash.com/photo-1594323721261-d4905cea3791?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80"}
            description={"aaa"}
          />
        </Grid>

      </div>
    </main>
  )
}

