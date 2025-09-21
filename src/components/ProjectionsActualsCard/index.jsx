import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import styles from './styles.module.css';
import classNames from 'classnames';

const data = [
  {
    name: 'Jan',
    projections: 16,
    actuals: 3,
  },
  {
    name: 'Feb',
    projections: 20,
    actuals: 4,
  },
  {
    name: 'Mar',
    projections: 17,
    actuals: 4,
  },
  {
    name: 'Apr',
    projections: 21,
    actuals: 6,
  },
  {
    name: 'May',
    projections: 14,
    actuals: 3,
  },
  {
    name: 'Jun',
    projections: 20,
    actuals: 4,
  },
];

const ProjectionsActualsCard = ({ theme }) => {
  return (
    <div className={classNames(styles.container, styles[theme])}>
      <div className={styles.title}>Projections vs Actuals</div>
      <div className={styles.chartContainer}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}
            barSize={20}
            style={{
              color: 'var(--chart-text-color)',
            }}
          >
            <CartesianGrid stroke="var(--chart-grid-color)" vertical={false} />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              padding={'no-gap'}
              tick={{ fill: 'var(--chart-text-color)' }}
            />
            <YAxis
              domain={[0, 30]}
              tickCount={4}
              tickFormatter={(value) => (value ? `${value}M` : value)}
              axisLine={false}
              tickLine={false}
              padding={'no-gap'}
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
            <Bar
              dataKey="projections"
              stackId="a"
              fill="var(--chart-projection-color)"
            />
            <Bar
              dataKey="actuals"
              stackId="a"
              fill="var(--chart-actual-color)"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProjectionsActualsCard;
