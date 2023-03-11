/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import FilterTable from '../../components/FilterTable'
import request from '../../util/request'
import { ITEM_TYPE } from '../../components/Form'

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
      render: (url: string) => <img style={{ height: 100 }} alt="poster image" src={url} />,
    },
  ]
}

export interface IMovie {
  Title: string
  Year: string
  imdbID: string
  Poster: string
}

const getFormConfig = () => {
  return [
    {
      label: 'search',
      field: 'search',
      type: ITEM_TYPE.INPUT,
    },
  ]
}

const Dashboard: React.FC = () => {
  const [list, setList] = useState<Record<string, string>[] | []>([])
  const tableColumnConfig = getTableColumnConfig()
  const navigate = useNavigate()
  const formConfig = getFormConfig()
  const onFinish = (values: Record<string, string>) => {
    request({
      method: 'get',
      params: { s: values.search },
    }).then(resp => {
      setList(resp.Search)
    })
  }
  const handleClick = (record: IMovie) => {
    const id = record.imdbID
    if (id) {
      navigate(`/${id}`, { state: { id } })
    }
  }
  const getRestTableConfig = () => {
    return {
      onRow: (record: IMovie) => {
        return {
          onClick: () => handleClick(record),
        }
      },
    }
  }

  const restTableConfig = getRestTableConfig()

  return (
    <div>
      <FilterTable
        formConfig={formConfig}
        tableColumn={tableColumnConfig}
        onFinish={onFinish}
        tableData={list}
        restTableConfig={restTableConfig}
      />
    </div>
  )
}

export default Dashboard
