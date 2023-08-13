import { PlusOutlined } from '@ant-design/icons';
import type { ButtonProps, ModalProps } from 'antd';
import { Button, Modal } from 'antd';
import type { ReactNode } from 'react';
import {
  cloneElement,
  forwardRef,
  isValidElement,
  useImperativeHandle,
  useState,
} from 'react';

interface IProps extends ModalProps {
  buttonProps?: ButtonProps;
  trigger?: string; // 不写问号都是必填项
  element?: ReactNode;
  children?: ReactNode;
  onCancel?: () => void;
  onOk?: () => Promise<boolean>;
}

function BaseModal(props: IProps, ref: any) {
  const { children, element, buttonProps, trigger, onCancel, onOk, ...rest } =
    props;
  const [open, setOpen] = useState(false);

  function onShow() {
    setOpen(true);
  }

  function handleClose() {
    if (typeof onCancel === 'function') {
      onCancel();
    }
    setOpen(false);
  }

  useImperativeHandle(ref, () => ({
    onShow,
    onClose: handleClose,
  }));

  async function handleOk() {
    if (typeof onOk !== 'function') return;
    const flag = await onOk();
    if (flag) {
      handleClose();
    }
  }

  function renderAction() {
    if (isValidElement(element) && trigger) {
      return cloneElement(element, {
        [trigger as string]: onShow,
      });
    }
    if (buttonProps) {
      return (
        <Button
          type="primary"
          children="新建"
          icon={<PlusOutlined />}
          {...buttonProps}
          onClick={onShow}
        />
      );
    }
    return null;
  }

  return (
    <>
      {renderAction()}

      {open && (
        <Modal {...rest} open={open} onCancel={handleClose} onOk={handleOk}>
          {children}
        </Modal>
      )}
    </>
  );
}

const ModalRef = forwardRef(BaseModal);

ModalRef.defaultProps = {
  buttonProps: { children: '新建' },
  trigger: 'onClick',
  destroyOnClose: true,
  maskClosable: false, // 点击遮罩不关闭抽递
  closable: false, // 不显示标题右侧的X
};

export default ModalRef;
