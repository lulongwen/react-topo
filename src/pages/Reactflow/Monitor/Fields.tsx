/**
 * @author lulongwen
 * Date: 2023-06-10 21:42
 * Description:
 */

import React from 'react';
import { object } from 'prop-types';
import { Empty } from 'antd';
import { RenderJsonSchema } from '@/components';
import { isEmpty, isObject } from 'lodash-es';

const style = {
  width: 300,
  height: '100%',
  border: '1px solid #ddd',
  position: 'absolute',
  top: 0,
  right: 0,
  padding: 16,
  backgroundColor: '#fff',
  zIndex: 99,
  overflow: 'auto',
};

Fields.propTypes = {
  schema: object,
};

function Fields(props) {
  console.log('fields', props);
  const { schema } = props;

  return (
    <div
      style={style}
    >
      {
        !isEmpty(schema) && isObject(schema)
          ? (
            <RenderJsonSchema
              schema={schema}
              okText='保存'
              cancelText={null}
              form={{
                // "labelCol": 6,
                // "wrapperCol": 18,
                layout: 'vertical', // 2 行显示
                "feedbackLayout": "terse",
              }}
            />
          )
          : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/>
      }
    </div>
  );
}

export default Fields;
