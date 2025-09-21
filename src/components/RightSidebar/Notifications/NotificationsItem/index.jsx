import classNames from 'classnames';
import styles from './styles.module.css';
const NotificationsItem = ({ icon, title, time, theme = 'light' }) => {
  return (
    <div className={classNames(styles.container, styles[theme])}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.time}>{time}</div>
      </div>
    </div>
  );
};

export default NotificationsItem;
