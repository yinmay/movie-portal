import React from 'react'
import { Space, Table } from 'antd'
import Form from '../Form'
import { Data, Column, ITableConfig } from '../../Pages/Dashboard'

import { IItem } from '../Form'

interface IFilterTable {
  formConfig: IFormConfig
  dataSource: Data[] | []
  columns: Column[]
  tableConfig: ITableConfig
}

interface IFormConfig {
  dataSource: IItem[]
  onFinish: (values: any) => void
  handleReset: () => void
}

const FilterTable: React.FC<IFilterTable> = ({ formConfig, tableConfig, dataSource, columns }) => {
  return (
    <div>
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        <Form {...formConfig} />

        {/* @ts-ignore */}
        <Table dataSource={dataSource} columns={columns} {...tableConfig}></Table>
      </Space>
    </div>
  )
}

export default FilterTable
