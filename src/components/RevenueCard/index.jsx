import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import classNames from 'classnames';
import styles from './styles.module.css';
import { BlackDotIcon, BlueDotIcon } from '../../assets/icons';

const data = [
  {
    name: 'Jan',
    currentWeek: 12,
    previousWeek: 7,
  },
  {
    name: 'Feb',
    currentWeek: 10,
    previousWeek: 17,
  },
  {
    name: 'Mar',
    currentWeek: 7,
    previousWeek: 15,
  },
  {
    name: 'Apr',
    currentWeek: 16,
    previousWeek: 10,
  },
  {
    name: 'May',
    currentWeek: 20,
    previousWeek: 18,
  },
  {
    name: 'Jun',
    currentWeek: 19,
    previousWeek: 23,
  },
];

const RevenueCard = ({ theme }) => {
  return (
    <div className={classNames(styles.container, styles[theme])}>
      <div className={styles.header}>
        <div className={styles.title}>Revenue</div>
        <div className={styles.divider}></div>
        <div className={styles.headerDataContainer}>
          <div className={styles.headerData}>
            <BlackDotIcon />
            <div className={styles.headerDataLabel}>Current Week</div>
            <div className={styles.headerDataValue}>$58,211</div>
          </div>
          <div className={styles.headerData}>
            <BlueDotIcon />
            <div className={styles.headerDataLabel}>Previous Week</div>
            <div className={styles.headerDataValue}>$68,768</div>
          </div>
        </div>
      </div>
      <div className={styles.chartContainer}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="var(--chart-grid-color)"
              vertical={false}
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'var(--chart-text-color)' }}
            />
            <YAxis
              domain={[0, 30]}
              tickCount={4}
              tickFormatter={(value) => `${value}M`}
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'var(--chart-text-color)' }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'var(--card-bg-color)',
                border: '1px solid var(--chart-grid-color)',
                color: 'var(--text-color)',
                borderRadius: '8px',
              }}
            />
            <Line
              type="monotone"
              dataKey="currentWeek"
              stroke="var(--line-color-1, #000000)"
              strokeWidth={2}
              dot={false}
              name="Current Week"
              strokeDasharray="5 5"
            />
            <Line
              type="monotone"
              dataKey="previousWeek"
              stroke="var(--line-color-2, #87CEEB)"
              strokeWidth={2}
              dot={false}
              name="Previous Week"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueCard;
