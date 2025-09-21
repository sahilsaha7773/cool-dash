import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import styles from './styles.module.css';

const Activities = ({ theme }) => {
  const activities = [
    {
      id: 1,
      avatar: <UserOutlined className={styles.avatarIcon} />,
      name: 'You have a bug that needs...',
      time: 'Just now',
      avatarColor: '#4ade80',
    },
    {
      id: 2,
      avatar: <UserOutlined className={styles.avatarIcon} />,
      name: 'Released a new version',
      time: '59 minutes ago',
      avatarColor: '#f59e0b',
    },
    {
      id: 3,
      avatar: <UserOutlined className={styles.avatarIcon} />,
      name: 'Submitted a bug',
      time: '12 hours ago',
      avatarColor: '#3b82f6',
    },
    {
      id: 4,
      avatar: <UserOutlined className={styles.avatarIcon} />,
      name: 'Modified A data in Page X',
      time: 'Today, 11:59 AM',
      avatarColor: '#ef4444',
    },
    {
      id: 5,
      avatar: <UserOutlined className={styles.avatarIcon} />,
      name: 'Deleted a page in Project X',
      time: 'Feb 2, 2023',
      avatarColor: '#8b5cf6',
    },
  ];

  return (
    <div className={classNames(styles.activitiesContainer, styles[theme])}>
      <h3 className={styles.title}>Activities</h3>
      <div className={styles.timeline}>
        {activities.map((activity, index) => (
          <div key={activity.id} className={styles.activityItem}>
            <div className={styles.avatarContainer}>
              <div
                className={styles.avatar}
                style={{ backgroundColor: activity.avatarColor }}
              >
                {activity.avatar}
              </div>
              {index < activities.length - 1 && (
                <div className={styles.timelineLine} />
              )}
            </div>
            <div className={styles.activityContent}>
              <div className={styles.activityText}>{activity.name}</div>
              <div className={styles.activityTime}>{activity.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;
