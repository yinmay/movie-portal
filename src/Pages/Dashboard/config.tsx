/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { ITEM_TYPE } from '../../components/Form'

const styles = {
  poster: { height: 100 },
}

const getTableColumnConfig = () => {
  return [
    {
      title: 'Title',
      dataIndex: 'Title',
      key: 'Title',
    },
    {
      title: 'Year',
      dataIndex: 'Year',
      key: 'Year',
    },
    {
      title: 'Type',
      dataIndex: 'Type',
      key: 'Type',
    },
    {
      title: 'Poster Image',
      dataIndex: 'Poster',
      key: 'Poster',
      render: (url: string) => <img style={styles.poster} alt="poster image" src={url} />,
    },
  ]
}

const getItemConfig = () => {
  return [
    {
      label: 'search',
      field: 'search',
      type: ITEM_TYPE.INPUT,
      itemProps: {
        rules: [],
      },
    },
  ]
}

export { getTableColumnConfig, getItemConfig, styles }
