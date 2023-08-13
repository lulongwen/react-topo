/**
 * @author lulongwen
 * Date: 2023-03-12 15:43
 * Description:
 */

import React from 'react';
import styles from './style.module.less';
import iconCUBE from "@/assets/img/technologies/CUBE.png";
import iconCUBEERROR from "@/assets/img/technologies/CUBEERROR.png";

type IProps = {
  healthy: string;
  unhealthy: string;
}

const Legend: React.FC<IProps> = ({healthy, unhealthy }) => {

  return (
    <div className={styles.legend}>
      <p className='d-flex align-items-center'>
        <img src={iconCUBE} className='me-1' />
        {healthy}
      </p>
      <p className='d-flex align-items-center'>
        <img src={iconCUBEERROR} className='me-1' />
        {unhealthy}
      </p>
    </div>
  );
}

export default Legend;
