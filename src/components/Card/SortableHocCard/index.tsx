/**
 * @author lulongwen
 * Date: 2022-04-10 23:05
 * Description:
 */

import { Col, Row } from 'antd';
import { array, func, string } from 'prop-types';
import {
  arrayMove,
  SortableContainer,
  SortableElement,
} from 'react-sortable-hoc';
import SortableHocItem from './SortableHocItem';

// Drag 容器
const SortContainer = SortableContainer((props) => props.children);
// DragItem
const SortItem = SortableElement(SortableHocItem);

SortableHocCard.propTypes = {
  dataSource: array.isRequired,
  onChange: func.isRequired,
  onDelete: func,
  onEdit: func,
  gutter: array,
  theme: string,
};
SortableHocCard.defaultProps = {
  gutter: [16, 24],
};

function SortableHocCard({
  dataSource,
  onChange,
  onEdit,
  onDelete,
  gutter,
  theme,
}) {
  function onSortEnd(values) {
    // 点击或轻微拖拽不排序，index不会改变，但页面有抖动
    const { oldIndex, newIndex } = values;
    if (oldIndex === newIndex) return;
    const _data = arrayMove(dataSource, oldIndex, newIndex);
    onChange(_data);
  }

  return (
    <SortContainer axis={'xy'} distance={40} onSortEnd={onSortEnd}>
      <Row gutter={gutter}>
        {dataSource.map((item, index) => {
          const { id, source, name, type } = item;
          return (
            <Col span={8} key={index}>
              <SortItem
                name={name}
                type={type}
                data={source}
                key={index}
                index={index}
                extra
                onEdit={() => onEdit(id)}
                onDelete={() => onDelete(id)}
                theme={theme}
              />
            </Col>
          );
        })}
      </Row>
    </SortContainer>
  );
}

export default SortableHocCard;
