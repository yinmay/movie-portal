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
  onFinish: (values: any) => void
  handleReset: () => void
}

const createFormItem = (type: string) => cpnAlias[type]

const Form: React.FC<IForm> = ({ onFinish, dataSource, handleReset }) => {
  return (
    <AntdForm onFinish={onFinish} layout="inline">
      <Space>
        {dataSource.map((item: IItem) => {
          const Component = createFormItem(item.type)

          return (
            <FormItem name={item.label}>
              <Component />
            </FormItem>
          )
        })}

        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="reset" onClick={handleReset}>
          Reset
        </Button>
      </Space>
    </AntdForm>
  )
}

export default Form
