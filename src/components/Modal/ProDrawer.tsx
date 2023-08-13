/**
 * User: lulongwen
 * Date: 2021-07-17 18:20
 * Description:
 */
import React, { cloneElement, forwardRef, isValidElement, useImperativeHandle, useState } from 'react';
import { Button, Drawer } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
// import { Icon } from '@/components'

// BaseDrawer.propTypes = {
//   title: PropTypes.string.isRequired,
//   btnText: PropTypes.string,
//   okText: PropTypes.string,
//   width: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.number,
//   ]),
//   icon: PropTypes.string,
// };
// BaseDrawer.defaultProps = {
//   okText: '确定',
//   width: 480,
//   icon: 'DownloadOutlined',
// }

function ProDrawer(props: any, ref: any) {
  const { children, element, buttonProps = {}, trigger = 'onClick', ...rest } = props;
  const [open, setOpen] = useState(false);

  function onShow() {
    setOpen(true);
  }

  function onClose() {
    // if (typeof onCancel === 'function') {
    //   onCancel();
    // }
    setOpen(false);
  }

  useImperativeHandle(ref, () => ({
    onShow,
    onClose,
  }));

  const attrs = {
    open,
    closable: false,
    // maskClosable: false,
    destroyOnClose: true,
    onClose,
    // footer: [
    //   <Button onClick={onSubmit} type="primary" key='submit'>
    //     保存
    //   </Button>,
    //   <Button onClick={onClose} className="ml16" key='cancel'>
    //     取消
    //   </Button>
    // ]
  };

  function renderAction() {
    if (isValidElement(element) && trigger) {
      return cloneElement(element, {
        [trigger as string]: onShow,
      });
    }

    if (buttonProps) {
      return (
        <Button
          type='primary'
          children='新建'
          // icon={<PlusOutlined />}
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

      <Drawer
        {...attrs}
        {...rest}
        maskClosable={false}
      >{children}
      </Drawer>
    </>
  );
}

const DrawerRef = forwardRef(ProDrawer);

DrawerRef.defaultProps = {
  buttonProps: { children: '新建' },
  trigger: 'onClick',
  destroyOnClose: true,
  maskClosable: false, // 点击遮罩不关闭抽递
  closable: false, // 不显示标题右侧的X
};

export default DrawerRef;
