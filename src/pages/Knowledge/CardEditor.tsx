/**
 * @author lulongwen
 * Date: 2023-08-13 16:55
 * Description:
 */
import React from 'react';
// import PropTypes from 'prop-types';
import { useParams } from '@umijs/max';
import CardDesign from './CardDesign';
import { ReactSource } from './CardDetail/mockData';

CardEditor.propTypes = {

};

function CardEditor() {
  const { id } = useParams();
  console.log('editor-id', id)

  return (
    <CardDesign
      schema={ReactSource}
    />
  );
}

export default CardEditor;
