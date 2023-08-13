import React, { forwardRef } from 'react';
import classNames from 'classnames';
import type { DraggableSyntheticListeners } from '@dnd-kit/core';
import type { Transform } from '@dnd-kit/utilities';

import { Handle } from '../Handle';
import styles from './Draggable.module.less';

interface Props {
  dragOverlay?: boolean;
  dragging?: boolean;
  handle?: boolean;
  listeners?: DraggableSyntheticListeners;
  style?: React.CSSProperties;
  transform?: Transform | null;
}

export const Draggable = forwardRef<HTMLButtonElement, Props>(
  function Draggable(
    {
      dragOverlay,
      dragging,
      handle,
      listeners,
      transform,
      style,
      children,
      ...props
    },
    ref,
  ) {
    return (
      <div
        className={classNames(
          styles.Draggable,
          dragOverlay && styles.dragOverlay,
          dragging && styles.dragging,
          handle && styles.handle,
        )}
        style={
          {
            ...style,
            '--translate-x': `${transform?.x ?? 0}px`,
            '--translate-y': `${transform?.y ?? 0}px`,
          } as React.CSSProperties
        }
      >
        <div
          {...props}
          aria-label='Draggable'
          data-cypress='draggable-item'
          {...(handle ? {} : listeners)}
          tabIndex={handle ? -1 : undefined}
          ref={ref}
          className={styles.button}
        >
          {children}
          {handle ? <Handle {...(handle ? listeners : {})} /> : null}
        </div>
      </div>
    );
  },
);
