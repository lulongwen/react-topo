import { CopyOutlined } from '@ant-design/icons';
import { Button, Input, message } from 'antd';
import React from 'react';

export async function copy(value: string) {
  // 动态创建一个textarea元素
  const input = document.createElement('input');
  input.setAttribute('readonly', 'readonly');
  input.value = value;

  document.body.appendChild(input);
  input.select(); // 选中内容

  // isSecureContext 检查是否处于安全上下文中
  if (navigator.clipboard && window.isSecureContext) {
    return await navigator.clipboard
      .writeText(value)
      .then(() => {
        document.body.removeChild(input);
        return true;
      })
      .catch(() => false);
  }

  /**
   * 选中的内容复制到剪贴板
   * document.execCommand('copy', false, null)
   * bool = document.execCommand(CommandName, ShowDefaultUI, ValueArgument)
   *  CommandName bold | copy | cut | createLink | delete
   *  ShowDefaultUI 是否展示用户界面
   *  ValueArgument 额外的参数 默认 null
   *  https://developer.mozilla.org/zh-CN/docs/Web/API/Document/execCommand
   *
   *  navigator.clipboard 代替 document.execCommand
   *    clipboard 需要https等安全上下文
   */
  const flag = document.execCommand('copy');
  document.body.removeChild(input);
  return flag;
}

const inputStyle = { background: '#f0f0f0' };

type IProps = {
  value: string;
  text?: string;
  only?: boolean;
};

export const CopyButton: React.FC<IProps> = (props) => {
  const { value, text = '复制', only = false } = props;

  async function onCopy() {
    const flag = await copy(value);
    return flag
      ? message.success(`${text}成功`)
      : message.warning(`${text}失败, 请重试`);
  }

  const btn = (
    <Button type="link" onClick={onCopy} className="d-flex align-items-center">
      <CopyOutlined />
      {text}
    </Button>
  );

  if (only) return btn;

  return (
    <div className="mb-2">
      <section className="d-inline-flex">
        <Input bordered={false} readOnly value={value} style={inputStyle} />
        {btn}
      </section>
    </div>
  );
};
