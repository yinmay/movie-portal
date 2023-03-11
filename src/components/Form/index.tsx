import React from 'react'
import { Input, Form as AntdForm, Button, Space } from 'antd'
import FormItem from 'antd/lib/form/FormItem'
import type { FormInstance } from 'antd/es/form'

export const ITEM_TYPE = {
  INPUT: 'Input',
}

const cpnAlias = {
  [ITEM_TYPE.INPUT]: Input,
}
export interface IItem {
  type: string
  label: string
  field: string
  itemProps: IProps
}

interface IProps {
  rules: IRule[]
}

interface IRule {
  required?: boolean
  message?: string
}

interface IForm {
  dataSource: IItem[]
  onFinish: (values: any) => void
  handleReset: () => void
}

const createFormItem = (type: string) => cpnAlias[type]

const Form: React.FC<IForm> = ({ onFinish, dataSource, handleReset }) => {
  const formRef = React.useRef<FormInstance>(null)

  return (
    <AntdForm ref={formRef} onFinish={onFinish} layout="inline">
      <Space>
        {dataSource.map((item: IItem) => {
          const Component = createFormItem(item.type)

          return (
            <FormItem name={item.label} key={item.label} {...item.itemProps}>
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
