/**
 * @author lulongwen
 * Date: 2023-06-10 17:05
 * Description:
 */

import React from 'react';
import { object } from 'prop-types';
import { Button as AntdButton } from 'antd';
import { Handle, Position } from 'reactflow';

const style = { width: 160, fontSize: 12, textAlign: 'left' }

Button.propTypes = {
  data: object,
};

function Button(props) {
  // console.log('nodeItem', props);
  const { selected, data, isConnectable, id } = props;
  const { label, ...rest } = data;
  const type = selected ? 'primary' : 'default';

  return (
    <>
      <AntdButton
        size='large'
        style={style}
        {...rest}
        type={type}
        // token={{
        //   fontSizeLG: 14,
        // }}
      >
        {label}
      </AntdButton>
      <Handle
        type='target'
        position={Position.Top}
        style={{ background: '#555' }}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
      />
      <Handle
        id={id}
        type='source'
        position={Position.Bottom}
        style={{ background: '#555' }}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
      />
    </>
  );
}

export default Button;
