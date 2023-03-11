import React from 'react'
import { Input, Form as AntdForm, Button, Space } from 'antd'
import FormItem from 'antd/lib/form/FormItem'

export const ITEM_TYPE = {
  INPUT: 'Input',
}

const cpnAlias = {
  [ITEM_TYPE.INPUT]: Input,
}
interface IItem {
  type: string
  label: string
  field: string
}

interface IForm {
  dataSource: IItem[]
  onFinish: (values: Record<string, string>) => void
}

const createFormItem = (type: string) => cpnAlias[type]

const Form: React.FC<IForm> = ({ onFinish, dataSource }) => {
  return (
    <>
      <AntdForm onFinish={onFinish} layout="inline">
        {dataSource.map((item: IItem) => {
          const Component = createFormItem(item.type)

          return (
            <FormItem name={item.label}>
              <Component />
            </FormItem>
          )
        })}
        <Space>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="reset">Submit</Button>
        </Space>
      </AntdForm>
    </>
  )
}

export default Form
