import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Descriptions } from 'antd'

import request from '../../util/request'
import { styles } from '../Dashboard/config'

type Record<K extends string, T> = {
  [P in K]: T
}
const Movie = () => {
  const location = useLocation()

  const [movie, setMovie] = useState<Record<string, string> | {}>({})

  useEffect(() => {
    request({
      method: 'get',
      params: { i: location.state.id },
    }).then(resp => {
      setMovie(resp)
    })
  }, [location.state.id])
  if (!movie) {
    return <div>empty</div>
  }

  return (
    <div>
      <Descriptions title="Movie Summary">
        {Object.keys(movie).map(key => {
          if (key === 'Poster') {
            return (
              <Descriptions.Item label={key} key={key}>
                <img src={movie[key]} style={styles.poster} />
              </Descriptions.Item>
            )
          }
          if (!Array.isArray(movie[key])) {
            return (
              <Descriptions.Item label={key} key={key}>
                {movie[key]}
              </Descriptions.Item>
            )
          }
        })}
      </Descriptions>
    </div>
  )
}

export default Movie
