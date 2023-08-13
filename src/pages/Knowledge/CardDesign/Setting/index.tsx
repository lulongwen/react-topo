import React, { useCallback } from 'react';
// import PropTypes from 'prop-types';
import { useNodes, useReactFlow } from 'reactflow';
import { merge, pick } from 'lodash-es';

import { RenderJsonSchema } from '@/components';
import { CardNodeSchema } from './schema';

Setting.propTypes = {};

function Setting() {
  const reactFlowInstance = useReactFlow();
  const nodes = useNodes();
  const selectedItem = nodes.find(it => it.selected) ?? {};
  const { title, theme, source } = pick(selectedItem?.data, ['title', 'theme', 'source']);
  const fields = { title, theme, options: source?.options };
  console.log('selectedItem', selectedItem);

  const onValuesChanged = useCallback((values) => {
    // 获取 options 放到 source.options
    const { title, theme, options } = values;

    reactFlowInstance.setNodes(nds => {
      console.log('nds', nds, 'values', JSON.stringify(values));
      return nds.map(it => {
        if(it.selected) {
          const data = {
            title,
            theme,
            source: {
              ...it.data.source,
              options: options.map((it, i) => merge(it, {value: it.value ?? i+1}))
            }
          };
          return merge(it, { data })
        }
        return it;
      });
    });
  }, []);

  return (
    <div
      style={{
        width: 300,
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        padding: 8,
        backgroundColor: '#fff',
      }}
    >
      <RenderJsonSchema
        value={fields}
        onChange={onValuesChanged}
        schema={CardNodeSchema}
        form={{ layout: 'vertical' }}
        className='__small__'
      />
    </div>
  );
}

export default Setting;
