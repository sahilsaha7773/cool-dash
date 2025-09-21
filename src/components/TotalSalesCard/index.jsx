import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts';
import classNames from 'classnames';
import styles from './styles.module.css';

const salesData = [
  { name: 'Direct', value: 300.56, color: '#000000' },
  { name: 'Affiliate', value: 135.18, color: '#90EE90' },
  { name: 'Sponsored', value: 154.02, color: '#DDA0DD' },
  { name: 'E-mail', value: 48.96, color: '#87CEEB' },
];

const TotalSalesCard = ({ theme }) => {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(amount);
  };

  const totalValue = salesData.reduce((sum, item) => sum + item.value, 0);
  const affiliatePercentage = ((salesData[1].value / totalValue) * 100).toFixed(
    1,
  );

  return (
    <div className={classNames(styles.container, styles[theme])}>
      <div className={styles.title}>Total Sales</div>

      <div className={styles.chartContainer}>
        <div className={styles.chartWrapper}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={salesData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={0}
                dataKey="value"
                startAngle={90}
                endAngle={450}
              >
                {salesData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
                <Label
                  value={`${affiliatePercentage}%`}
                  position="center"
                  className={styles.centerLabel}
                />
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          <div className={styles.percentageLabel}>
            <div className={styles.percentageValue}>{affiliatePercentage}%</div>
            <div className={styles.percentagePointer}></div>
          </div>
        </div>
      </div>

      <div className={styles.legend}>
        {salesData.map((item, index) => (
          <div key={index} className={styles.legendItem}>
            <div
              className={styles.legendDot}
              style={{ backgroundColor: item.color }}
            ></div>
            <div className={styles.legendName}>{item.name}</div>
            <div className={styles.legendValue}>
              {formatCurrency(item.value)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TotalSalesCard;
