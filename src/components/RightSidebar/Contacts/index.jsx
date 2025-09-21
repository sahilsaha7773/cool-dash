import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import styles from './styles.module.css';

const Contacts = ({ theme }) => {
  const contacts = [
    {
      id: 1,
      name: 'Natali Craig',
      avatar: <UserOutlined className={styles.avatarIcon} />,
      avatarColor: '#6b7280',
    },
    {
      id: 2,
      name: 'Drew Cano',
      avatar: <UserOutlined className={styles.avatarIcon} />,
      avatarColor: '#ef4444',
    },
    {
      id: 3,
      name: 'Orlando Diggs',
      avatar: <UserOutlined className={styles.avatarIcon} />,
      avatarColor: '#f59e0b',
    },
    {
      id: 4,
      name: 'Andi Lane',
      avatar: <UserOutlined className={styles.avatarIcon} />,
      avatarColor: '#f3f4f6',
    },
    {
      id: 5,
      name: 'Kate Morrison',
      avatar: <UserOutlined className={styles.avatarIcon} />,
      avatarColor: '#3b82f6',
    },
    {
      id: 6,
      name: 'Koray Okumus',
      avatar: <UserOutlined className={styles.avatarIcon} />,
      avatarColor: '#06b6d4',
    },
  ];

  return (
    <div className={classNames(styles.contactsContainer, styles[theme])}>
      <h3 className={styles.title}>Contacts</h3>
      <div className={styles.contactsList}>
        {contacts.map((contact) => (
          <div key={contact.id} className={styles.contactItem}>
            <div
              className={styles.avatar}
              style={{ backgroundColor: contact.avatarColor }}
            >
              {contact.avatar}
            </div>
            <span className={styles.contactName}>{contact.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
