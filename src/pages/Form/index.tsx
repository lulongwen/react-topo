/**
 * @author lulongwen
 * Date: 2023-08-06 22:37
 * Description:
 */

import React from 'react';
import PropTypes from 'prop-types';

import { RenderJsonSchema } from '@/components';
import { CardNodeSchema } from './schema'

FormPage.propTypes = {

};

function FormPage() {

  return (
    <RenderJsonSchema
      schema={CardNodeSchema}
    />
  );
}

export default FormPage;
