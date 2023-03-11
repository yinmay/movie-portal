/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import request from '../../util/request'
import { getTableColumnConfig, getItemConfig } from './config'
import FilterTable from '../../components/FilterTable'

export interface Data {
  Title: string
  Year: string
  Type: string
  imdbID: string
  Poster: string
}

export type Column = {
  title: string
  dataIndex: string
  key: string
}

export interface ITableConfig {
  onRow: (value: any) => void
}

const Dashboard: React.FC = () => {
  const [list, setList] = useState<Data[] | []>([])
  const navigate = useNavigate()
  const tableColumnConfig = getTableColumnConfig()

  const onFinish = (values: any) => {
    request({
      method: 'get',
      params: { s: values.search },
    }).then(resp => {
      setList(resp.Search)
    })
  }

  const handleClick = (record: Data) => {
    const id = record.imdbID
    if (id) {
      navigate(`/${id}`, { state: { id } })
    }
  }

  const getTableConfig = () => {
    return {
      onRow: (record: Data) => {
        return {
          onClick: () => handleClick(record),
        }
      },
    }
  }

  const getFormConfig = () => {
    return {
      dataSource: getItemConfig(),
      onFinish,
    }
  }

  const tableConfig = getTableConfig()
  const formConfig = getFormConfig()

  return (
    <div>
      <FilterTable
        dataSource={list}
        columns={tableColumnConfig}
        formConfig={formConfig}
        tableConfig={tableConfig}
      />
    </div>
  )
}

export default Dashboard
