import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'

import request from '../../util/request'

const Movie = () => {
  // const params = useParams()
  const location = useLocation()

  const [movie, setMovie] = useState<Record<string, string>>({ title: '' })

  useEffect(() => {
    request({
      method: 'get',
      params: { i: location.state.id },
    }).then(resp => {
      setMovie(resp)
    })
  }, [location.state.id])

  console.log(123)
  console.log(movie)

  // if (movie?.title) {
  //   return <div>{movie?.title}</div>
  // }

  return <div>{movie?.title}13213</div>
}

export default Movie
