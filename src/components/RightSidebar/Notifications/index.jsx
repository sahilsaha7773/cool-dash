import { BugIcon, UserIcon, SubscribeIcon } from '../../../assets/icons';
import classNames from 'classnames';
import NotificationsItem from './NotificationsItem';
import styles from './styles.module.css';

const notifications = [
  {
    icon: <BugIcon />,
    title: 'You have a new bug',
    time: 'Just now',
  },
  {
    icon: <UserIcon />,
    title: 'You have a new user',
    time: '12 hours ago',
  },
  {
    icon: <BugIcon />,
    title: 'You have a new bug',
    time: 'Just now',
  },
  {
    icon: <SubscribeIcon />,
    title: 'You have a new subscribe',
    time: '12 hours ago',
  },
];

const Notifications = ({ theme }) => {
  return (
    <div className={classNames(styles.container, styles[theme])}>
      <div className={styles.header}>
        <div className={styles.title}>Notifications</div>
      </div>
      <div className={styles.notifications}>
        {notifications.map((notification) => (
          <NotificationsItem
            key={notification.title}
            {...notification}
            theme={theme}
          />
        ))}
      </div>
    </div>
  );
};

export default Notifications;
