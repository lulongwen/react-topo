import { Input } from 'antd';
import React from 'react';
import styles from './index.module.less';

type SearchProps = {
  onSearch: (value: string) => void;
};

const Search: React.FC<SearchProps> = (props) => {
  return (
    <div className={styles.search}>
      <Input.Search
        placeholder="请输入"
        enterButton="搜索"
        size="large"
        onSearch={props.onSearch}
        style={{ maxWidth: 522, width: '100%' }}
      />
      <div className={styles['bg-shapes-right']} />
    </div>
  );
};

export default Search;
