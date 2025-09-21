import React, { useState, useMemo, useCallback } from 'react';
import { Table, Input, Button, Pagination, Avatar } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import styles from './styles.module.css';
import {
  ArrowLineLeftIcon,
  ArrowLineRightIcon,
  ArrowsDownUpIcon,
  FunnelIcon,
  PlusIcon,
  SearchIcon,
} from '../../../assets/icons';
import { dummies } from '../../../utils/dummies';

const columns = [
  {
    title: (
      <div className={styles.headerCell}>
        <span className={styles.columnTitle}>Order ID</span>
      </div>
    ),
    dataIndex: 'orderId',
    key: 'orderId',
    render: (text) => (
      <div className={styles.orderIdCell}>
        <span className={styles.orderId}>#{text}</span>
      </div>
    ),
  },
  {
    title: 'User',
    dataIndex: 'user',
    key: 'user',
    render: (user) => (
      <div className={styles.userCell}>
        <Avatar className={styles.userAvatar}>{user.avatar}</Avatar>
        <span className={styles.userName}>{user.name}</span>
      </div>
    ),
  },
  {
    title: 'Project',
    dataIndex: 'project',
    key: 'project',
    sorter: (a, b) => a.project.localeCompare(b.project),
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    render: (text, record) => (
      <div className={styles.addressCell}>
        <span>{text}</span>
      </div>
    ),
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    render: (text) => (
      <div className={styles.dateCell}>
        <CalendarOutlined className={styles.calendarIcon} />
        <span>{text}</span>
      </div>
    ),
    sorter: (a, b) => new Date(a.date) - new Date(b.date),
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status, record) => (
      <div className={styles.statusCell}>
        <div
          className={styles.statusDot}
          style={{ backgroundColor: status.color }}
        />
        <span className={styles.statusText}>{status.text}</span>
      </div>
    ),
    filters: [
      { text: 'In Progress', value: 'In Progress' },
      { text: 'Complete', value: 'Complete' },
      { text: 'Pending', value: 'Pending' },
      { text: 'Approved', value: 'Approved' },
      { text: 'Rejected', value: 'Rejected' },
    ],
    onFilter: (value, record) => record.status.text === value,
  },
];

const OrderList = ({ theme = 'light' }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState(['CM9804']);
  const [searchText, setSearchText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(3);

  const filteredData = useMemo(() => {
    if (!searchText) return dummies;
    return dummies.filter(
      (item) =>
        item.orderId.toLowerCase().includes(searchText.toLowerCase()) ||
        item.user.name.toLowerCase().includes(searchText.toLowerCase()) ||
        item.project.toLowerCase().includes(searchText.toLowerCase()) ||
        item.address.toLowerCase().includes(searchText.toLowerCase()),
    );
  }, [searchText]);

  const paginatedData = useMemo(() => {
    return filteredData.slice(
      (currentPage - 1) * pageSize,
      currentPage * pageSize,
    );
  }, [filteredData, currentPage, pageSize]);

  const handlePageChange = useCallback((page) => {
    setCurrentPage(page);
  }, []);

  const handleSearch = useCallback((e) => {
    setSearchText(e.target.value);
    setCurrentPage(1);
  }, []);

  const paginationItemRender = useCallback((page, type, originalElement) => {
    if (type === 'prev') {
      return <ArrowLineLeftIcon />;
    }
    if (type === 'next') {
      return <ArrowLineRightIcon />;
    }
    return originalElement;
  }, []);

  return (
    <div className={classNames(styles.orderListContainer, styles[theme])}>
      <div className={styles.header}>
        <h1 className={styles.title}>Order List</h1>
      </div>
      <div className={styles.actions}>
        <div className={styles.actionButtons}>
          <PlusIcon />
          <FunnelIcon />
          <ArrowsDownUpIcon />
        </div>
        <Input
          placeholder="Search"
          prefix={<SearchIcon />}
          className={styles.searchInput}
          value={searchText}
          onChange={handleSearch}
        />
      </div>
      <div className={styles.tableContainer}>
        <Table
          columns={columns}
          dataSource={paginatedData}
          rowSelection={{
            selectedRowKeys,
            onChange: setSelectedRowKeys,
          }}
          pagination={false}
          className={classNames(styles.orderTable, styles[theme])}
          rowClassName={(record) =>
            selectedRowKeys.includes(record.key) ? styles.selectedRow : ''
          }
        />
      </div>
      <div className={styles.paginationContainer}>
        <Pagination
          current={currentPage}
          total={filteredData.length}
          pageSize={pageSize}
          onChange={handlePageChange}
          showSizeChanger={false}
          className={classNames(styles.pagination, styles[theme])}
          itemRender={paginationItemRender}
        />
      </div>
    </div>
  );
};

export default OrderList;
