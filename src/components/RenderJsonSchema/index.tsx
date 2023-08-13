/**
 * @author lulongwen
 * Date: 2023-05-29 21:45
 * Description:
 */
import React, {
  useMemo,
  useEffect,
  forwardRef,
  useImperativeHandle,
  memo,
} from 'react';
import { object, func, string } from 'prop-types';
import { Card, Slider, Rate } from 'antd';
import { createForm, onFormValuesChange } from '@formily/core';
import { createSchemaField } from '@formily/react';
import {
  Form,
  FormItem,
  DatePicker,
  Checkbox,
  Cascader,
  Editable,
  Input,
  NumberPicker,
  Switch,
  Password,
  PreviewText,
  Radio,
  Reset,
  Select,
  Space,
  Submit,
  TimePicker,
  Transfer,
  TreeSelect,
  Upload,
  FormGrid,
  FormLayout,
  FormTab,
  FormCollapse,
  FormDrawer,
  FormDialog,
  FormStep,
  ArrayTable,
  ArrayCards,
  ArrayTabs,
  ArrayItems,
  FormButtonGroup,
} from '@formily/antd-v5';
import { merge, noop, isEqual } from 'lodash-es';
import cls from 'classnames';

const Text: React.FC<{
  value?: string
  content?: string
  mode?: 'normal' | 'h1' | 'h2' | 'h3' | 'p'
}> = (props) => {
  const { value, mode, content, ...prop } = props;
  const tagName = mode === 'normal' || !mode ? 'div' : mode;
  return React.createElement(tagName, prop, value || content);
};

const SchemaField = createSchemaField({
  components: {
    // 布局组件
    FormLayout,
    FormItem,
    FormGrid,
    FormTab,
    FormCollapse,
    FormButtonGroup,
    Space,
    Submit,
    Reset,

    // 场景组件
    ArrayTable,
    ArrayTabs,
    ArrayCards,
    ArrayItems,
    FormDrawer,
    FormDialog,
    FormStep,
    Editable,
    Text,

    // 输入组件
    Input,
    NumberPicker, // 数字输入框
    Switch,
    Password,
    Select,
    TimePicker,
    Transfer,
    TreeSelect,
    Radio,
    Checkbox,
    Upload,
    Card,
    Cascader,
    Slider,
    Rate,
    DatePicker,

    // 阅读态组件
    PreviewText,
  },
});

const FormRef = forwardRef(RenderJsonSchema);

const formProps = {
  labelCol: 6,
  wrapperCol: 18,
  // layout: 'vertical', // 2 行显示
};

FormRef.propTypes = {
  value: object,
  onChange: func,
  form: object,
  schema: object,
  onFinish: func,
  mode: string,
  okText: string,
  cancelText: string,
};
FormRef.defaultProps = {
  onChange: noop,
  mode: 'form',
  okText: '提交',
  cancelText: '重置',
};

// true 不渲染，false渲染
export default memo(FormRef, (oldProps, props) => {
  return isEqual(oldProps, props)
});

function RenderJsonSchema(props, ref) {
  const {
    value,
    onChange,
    schema,
    mode,
    onFinish,
    okText,
    cancelText,
    form,
    className,
  } = props;

  const formInstance = useMemo(() => createForm({
    values: value,
    effects: () => {
      onFormValuesChange((form) => {
        // console.log('onChange-fom', form.values)
        onChange(form.values)
      })
    },
  }), [value, onChange]);
  // console.log(1130, ref, formInstance);

  useImperativeHandle(ref, () => formInstance);
  // console.log(116, formInstance)

  useEffect(() => {
    if(!value) return;
    // formInstance.setInitialValues(value);
  }, [value]);
  console.log('merge(formProps, form)', value)

  return (
    <Form
      {...merge(formProps, form)}
      form={formInstance}
      onAutoSubmit={console.log}
      className={cls(className)}
    >
      <SchemaField
        schema={schema}
        className='mb-4'
      />

      {mode !== 'form' && (
        <FormButtonGroup.FormItem>
          <Submit onSubmit={onFinish}>{okText}</Submit>
          {cancelText && <Reset>{cancelText}</Reset>}
        </FormButtonGroup.FormItem>
      )}
    </Form>
  );
}
