/**
 * @author lulongwen
 * Date: 2023-01-27 15:35
 * Description:
 */
import { Card, Col, Form, Row, Select } from 'antd';
import React from 'react';
import StandardFormRow from './StandardFormRow';
import TagSelect from './TagSelect';

const { Item } = Form;
const { Option } = TagSelect;
const formItemLayout = {
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 12 },
  },
};

const owners = [
  {
    value: 'wzj',
    label: '我自己',
  },
  {
    value: 'ym',
    label: '姚明',
  },
];

const Search: React.FC = () => {
  const [form] = Form.useForm();

  const setOwner = () => {
    form.setFieldsValue({
      owner: ['wzj'],
    });
  };

  return (
    <Card bordered={false}>
      <Form
        layout="inline"
        form={form}
        initialValues={{
          owner: ['wjh', 'zxx'],
        }}
        // onValuesChange={reload}
      >
        <StandardFormRow title="所属类目" block>
          <Item name="category">
            <TagSelect expandable>
              <Option value="cat1">类目一</Option>
              <Option value="cat2">类目二</Option>
              <Option value="cat3">类目三</Option>
              <Option value="cat4">类目四</Option>
              <Option value="cat5">类目五</Option>
              <Option value="cat6">类目六</Option>
              <Option value="cat7">类目七</Option>
            </TagSelect>
          </Item>
        </StandardFormRow>

        <StandardFormRow title="owner" grid>
          <Item name="owner" noStyle>
            <Select mode="multiple" options={owners} placeholder="选择 owner" />
          </Item>
          <a onClick={setOwner} className="ms-3">
            只看自己的
          </a>
        </StandardFormRow>

        <StandardFormRow title="其它选项" grid last>
          <Row gutter={16}>
            <Col span={8}>
              <Item {...formItemLayout} label="活跃用户" name="user">
                <Select
                  placeholder="不限"
                  options={[{ label: '李三', value: 1 }]}
                />
              </Item>
            </Col>
            <Col span={8}>
              <Item name="rate" label="好评度" {...formItemLayout}>
                <Select
                  placeholder="不限"
                  options={[{ label: '优秀', value: 1 }]}
                />
              </Item>
            </Col>
          </Row>
        </StandardFormRow>
      </Form>
    </Card>
  );
};

export default Search;
