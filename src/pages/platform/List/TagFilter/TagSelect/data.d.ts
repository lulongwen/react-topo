import React from 'react';

/**
 * @author lulongwen
 * Date: 2023-01-27 16:03
 * Description:
 */

export interface TagSelectOptionProps {
  value: string | number;
  style?: React.CSSProperties;
  checked?: boolean;
  onChange?: (value: string | number, state: boolean) => void;
  children: React.ReactNode;
  isTagSelectOption: boolean;
}

export interface TagSelectProps {
  onChange?: (value: (string | number)[]) => void;
  expandable?: boolean;
  value?: (string | number)[];
  defaultValue?: (string | number)[];
  style?: React.CSSProperties;
  hideCheckAll?: boolean;
  actionsText?: {
    expandText?: React.ReactNode;
    collapseText?: React.ReactNode;
    selectAllText?: React.ReactNode;
  };
  className?: string;
  Option?: TagSelectOptionProps;
  children?: any;
  // children?: TagSelectOptionElement | TagSelectOptionElement[];
}
