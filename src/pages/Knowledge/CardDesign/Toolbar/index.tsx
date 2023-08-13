import React, { memo } from 'react';
import { Button } from 'antd';
import cls from 'classnames';
import type { ReactFlowInstance } from 'reactflow';
import styles from './style.module.less';

const logoUrl = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';

type IProps = {
  instance: ReactFlowInstance | null;
}

/**
 * Instance.toObject，Return nodes, edges and viewport
 */
const Toolbar: React.FC<IProps> = (props) => {
  const { instance } = props;

  function onSave() {
    if (!instance) return;
    console.log('onSave', JSON.stringify(instance.toObject()));
  }

  return (
    <header className={styles.toolbar}>
      <div className={cls('flex items-center', styles.logo)}>
        <svg
          viewBox="0 0 300 220"
          fill="none"
          width="30"
        >
          <path d="M109 0H1C0.447715 0 0 0.447715 0 1V64C0 64.5523 0.447715 65 1 65H109C109.552 65 110 64.5523 110 64V1C110 0.447715 109.552 0 109 0Z" fill="rgb(26 25 43)"></path><path d="M110.5 32.5C123.089 30.923 134.255 35.756 144 47C157 62 153.573 63.798 166 78C175.333 88.667 183.5 93.833 190.5 93.5M156.5 176.5C182.312 177.658 202.478 174.158 217 166C231.522 157.842 241.022 144.675 245.5 126.5" stroke="rgb(26 25 43)" strokeWidth="10" strokeLinecap="square"></path>
          <path d="M155 144H47C46.4477 144 46 144.448 46 145V208C46 208.552 46.4477 209 47 209H155C155.552 209 156 208.552 156 208V145C156 144.448 155.552 144 155 144Z" fill="rgb(26 25 43)"></path>
          <path d="M299 61H191C190.448 61 190 61.4477 190 62V125C190 125.552 190.448 126 191 126H299C299.552 126 300 125.552 300 125V62C300 61.4477 299.552 61 299 61Z" fill="#FF0072"></path>
        </svg>
        <b className='ml-2'>Topology</b>
      </div>
      <Button
        type='primary'
        onClick={onSave}
      >
        保存
      </Button>
    </header>
  );
};

export default memo(Toolbar);
