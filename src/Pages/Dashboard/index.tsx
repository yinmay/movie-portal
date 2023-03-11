/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Space } from 'antd'

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
      pagination: false,
      size: 'small',
      scroll: { x: 1500, y: '60vh' },
    }
  }

  const getFormConfig = () => {
    return {
      dataSource: getItemConfig(),
      onFinish,
      handleReset: () => setList([]),
    }
  }

  const tableConfig = getTableConfig()
  const formConfig = getFormConfig()

  return (
    <div>
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        <FilterTable
          dataSource={list}
          columns={tableColumnConfig}
          formConfig={formConfig}
          tableConfig={tableConfig}
        />
      </Space>
    </div>
  )
}

export default Dashboard
