import React from 'react';
import { Table as AntTable } from 'antd';
import classNames from 'classnames';
import styles from './styles.module.css';

const Table = ({
  columns,
  data,
  className = '',
  pagination = false,
  showHeader = true,
  theme = 'light',
  ...props
}) => {
  return (
    <div className={classNames(styles.tableWrapper, className)}>
      <AntTable
        columns={columns}
        dataSource={data}
        pagination={pagination}
        showHeader={showHeader}
        className={classNames(styles.antTable, styles[theme])}
        {...props}
      />
    </div>
  );
};

export default Table;
