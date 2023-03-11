import React from 'react'
import { Space, Table } from 'antd'
import Form from '../Form'
import { IMovie } from '../../Pages/Dashboard'

interface IFilterTable {
  dataSource?: []
  tableColumn: Column[]
  formConfig: IFormItem[]
  onFinish: (values: Record<string, string>) => void
  tableData: Record<string, string>[] | []
  restTableConfig: { onRow: (arg0: IMovie, arg1: number) => void }
}

interface IFormItem {
  type: string
  field: string
  label: string
}

type Column = {
  title: string
  dataIndex: string
}

const FilterTable: React.FC<IFilterTable> = ({
  tableColumn,
  formConfig,
  onFinish,
  tableData,
  restTableConfig,
}) => {
  return (
    <div>
      <div>
        <Space wrap>
          <Form onFinish={onFinish} dataSource={formConfig} />
        </Space>
      </div>
      <Table dataSource={tableData} columns={tableColumn} {...restTableConfig}>
        {/* {tableColumn.map((elem: Column, index) => {
          return <Table.Column key={index} {...elem} />
        })} */}
      </Table>
    </div>
  )
}

export default FilterTable
