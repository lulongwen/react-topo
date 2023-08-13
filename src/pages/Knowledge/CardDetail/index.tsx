/**
 * @author lulongwen
 * Date: 2023-08-12 20:51
 * Description:
 */

import React from 'react';
// import PropTypes from 'prop-types';
import CardDesign from '../CardDesign';
import { ReactSource } from './mockData';

Index.propTypes = {

};

function Index() {

  return (
    <CardDesign
      schema={ReactSource}
      view
    />
  );
}

export default Index;
