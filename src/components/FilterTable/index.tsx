import React from 'react'
import { Space, Table } from 'antd'
import Form from '../Form'
import { Data, Column, ITableConfig } from '../../Pages/Dashboard'

interface IFilterTable {
  formConfig: IFormConfig
  dataSource: Data[] | []
  columns: Column[]
  tableConfig: ITableConfig
}

interface IFormConfig {
  dataSource: IFormItem[]
  onFinish: (values: any) => void
}

interface IFormItem {
  type: string
  field: string
  label: string
}

const FilterTable: React.FC<IFilterTable> = ({ formConfig, tableConfig, dataSource, columns }) => {
  return (
    <div>
      <div>
        <Space wrap>
          <Form {...formConfig} />
        </Space>
      </div>
      {/* @ts-ignore */}
      <Table dataSource={dataSource} columns={columns} {...tableConfig}></Table>
    </div>
  )
}

export default FilterTable
