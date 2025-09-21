import React, { useCallback, useMemo } from 'react';
import classNames from 'classnames';
import Table from '../Table';
import styles from './styles.module.css';

const productData = [
  {
    name: 'ASOS Ridley High Waist',
    price: 79.49,
    quantity: 82,
    amount: 6518.18,
  },
  {
    name: 'Marco Lightweight Shirt',
    price: 128.5,
    quantity: 37,
    amount: 4754.5,
  },
  {
    name: 'Half Sleeve Shirt',
    price: 39.99,
    quantity: 64,
    amount: 2559.36,
  },
  {
    name: 'Lightweight Jacket',
    price: 20.0,
    quantity: 184,
    amount: 3680.0,
  },
  {
    name: 'Marco Shoes',
    price: 79.49,
    quantity: 64,
    amount: 1965.81,
  },
];

const TopSellingProductsCard = ({ theme }) => {
  const formatCurrency = useCallback((amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(amount);
  }, []);

  const columns = useMemo(
    () => [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        sorter: (a, b) => a.name.localeCompare(b.name),
        sortDirections: ['ascend', 'descend'],
      },
      {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        sorter: (a, b) => a.price - b.price,
        sortDirections: ['ascend', 'descend'],
        render: (price) => formatCurrency(price),
      },
      {
        title: 'Quantity',
        dataIndex: 'quantity',
        key: 'quantity',
        sorter: (a, b) => a.quantity - b.quantity,
        sortDirections: ['ascend', 'descend'],
      },
      {
        title: 'Amount',
        dataIndex: 'amount',
        key: 'amount',
        sorter: (a, b) => a.amount - b.amount,
        sortDirections: ['ascend', 'descend'],
        render: (amount) => formatCurrency(amount),
      },
    ],
    [formatCurrency],
  );

  return (
    <div className={classNames(styles.container, styles[theme])}>
      <div className={styles.title}>Top Selling Products</div>
      <div className={styles.divider}></div>

      <div className={styles.tableContainer}>
        <Table
          columns={columns}
          data={productData}
          className={styles.productTable}
          pagination={false}
          showHeader={true}
          theme={theme}
        />
      </div>
    </div>
  );
};

export default TopSellingProductsCard;
