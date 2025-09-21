import classNames from 'classnames';
import styles from './styles.module.css';
import { ArrowFallIcon, ArrowRiseIcon } from '../../assets/icons';

const DataCard = ({
  title,
  currentValue,
  percentage,
  isPositive,
  className,
  backgroundColor,
  style,
  theme,
}) => {
  return (
    <div
      className={classNames(styles.container, className, styles[theme])}
      style={{ backgroundColor, ...style }}
    >
      <div className={styles.title}>{title}</div>
      <div className={styles.valueContainer}>
        <div className={styles.currentValue}>{currentValue}</div>
        <div className={styles.percentageContainer}>
          <div className={styles.percentage}>{percentage}</div>
          <div className={styles.isPositive}>
            {isPositive ? <ArrowRiseIcon /> : <ArrowFallIcon />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataCard;
