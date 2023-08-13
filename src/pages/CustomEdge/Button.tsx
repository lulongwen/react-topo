/**
 * @author lulongwen
 * Date: 2023-06-10 17:05
 * Description:
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { Button as AntdButton } from 'antd';

Button.propTypes = {

};

function Button(props) {
  console.log('nodeItem', props)
  const {title, data} = props;

  return (
    <AntdButton
      size='large'
      style={{width: 160, fontSize: 14, textAlign: 'left' }}
      {...data.button}
      // token={{
      //   fontSizeLG: 14,
      // }}
    >
      {data.label}
    </AntdButton>
  );
}

export default Button;
