/**
 * @author lulongwen
 * Date: 2023-08-06 17:18
 * Description:
 */

import React, { createElement } from 'react';
import { object } from 'prop-types';
import { Card, theme, Button } from 'antd';
import { Handle, Position } from 'reactflow';
import { capitalize, map } from 'lodash-es';

const style = { width: 160, fontSize: 12, textAlign: 'left' }

const elements = {
  Button,
}

AntdCard.propTypes = {
  data: object,
};

function AntdCard(props) {
  console.log('CardNode', props);
  const { data, isConnectable, id } = props;
  const { theme: _color = 'info', source, ...rest } = data;

  const { token } = theme.useToken();
  const themeKey = `color${capitalize(_color)}Border`;
  const { type, options, ...restProps } = source ?? {};

  return (
    <>
      <Card
        size='large'
        style={style}
        headStyle={{backgroundColor: token[themeKey], opacity: .8}}
        {...rest}
      >
        {map(options).map((it, index) => {
          return createElement(elements[type] ?? elements.Button, {
            key: it.value ?? index,
            ...restProps
          }, it.label)
        })}
      </Card>
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

export default AntdCard;

