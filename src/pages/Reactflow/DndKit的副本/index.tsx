/**
 * @author lulongwen
 * Date: 2023-06-10 22:46
 * Description:
 */

import React, { useMemo, useState } from 'react';
import {
  DndContext,
  useDraggable,
  useSensor,
  MouseSensor,
  TouchSensor,
  KeyboardSensor,
  PointerActivationConstraint,
  Modifiers,
  useSensors,
} from '@dnd-kit/core';
// import { CSS } from '@dnd-kit/utilities';
import { Wrapper } from './Wrapper';
import { Draggable } from './Draggable';

const defaultCoordinates = {
  x: 0,
  y: 0,
};

DraggableCard.propTypes = {};

function DraggableCard(props) {
  const {
    activationConstraint,
    axis,
    handle,
    label = 'Go ahead, drag me.',
    modifiers,
    style,
    buttonStyle,
  } = props;
  const [{ x, y }, setCoordinates] = useState(defaultCoordinates);

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint,
  });
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint,
  });
  const keyboardSensor = useSensor(KeyboardSensor, {});
  const sensors = useSensors(mouseSensor, touchSensor, keyboardSensor);

  return (
    <DndContext
      sensors={sensors}
      onDragEnd={({ delta }) => {
        console.log('dragEnd');
        setCoordinates(({ x, y }) => {
          return {
            x: x + delta.x,
            y: y + delta.y,
          };
        });
      }}
      modifiers={modifiers}
    >
      <Wrapper>
        <DraggableItem
          axis={axis}
          label={label}
          handle={handle}
          top={y}
          left={x}
          style={style}
          buttonStyle={buttonStyle}
        />
      </Wrapper>
    </DndContext>
  );
}

export default DraggableCard;

function DraggableItem(props) {
  const {
    axis,
    label,
    style,
    top,
    left,
    handle,
    buttonStyle,
  } = props;

  const {
    attributes,
    isDragging,
    listeners,
    setNodeRef,
    transform,
  } = useDraggable({
    id: 'draggable',
  });

  return (
    <Draggable
      ref={setNodeRef}
      dragging={isDragging}
      handle={handle}
      label={label}
      listeners={listeners}
      style={{ ...style, top, left }}
      buttonStyle={buttonStyle}
      transform={transform}
      axis={axis}
      {...attributes}
    />
  );
}
