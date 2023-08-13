/**
 * User: lulongwen
 * Date: 2021-07-17 18:20
 * Description:
 */
import { Icon } from '@/components';
import { Button, Drawer } from 'antd';
import { useState } from 'react';

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

function BaseDrawer(props: any) {
  const { title, btnText, okText, width, icon, children } = props;
  const [visible, setVisible] = useState(false);

  function onSubmit() {}

  function onClose() {
    setVisible(false);
  }

  const attrs = {
    visible,
    title,
    width,
    closable: false,
    // maskClosable: false,
    destroyOnClose: true,
    onClose,
    footer: [
      <Button onClick={onClose} className="mr16" block key="cancel">
        取消
      </Button>,
      <Button onClick={onSubmit} type="primary" block key="submit">
        {okText}
      </Button>,
    ],
    footerStyle: { display: 'flex' },
  };

  return (
    <>
      <Button type="link" onClick={() => setVisible(true)}>
        {icon && <Icon icon={icon} />} {btnText || title}
      </Button>
      <Drawer {...attrs}>{children}</Drawer>
    </>
  );
}

export default BaseDrawer;
