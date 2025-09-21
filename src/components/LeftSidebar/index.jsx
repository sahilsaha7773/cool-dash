import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './styles.module.css';
import {
  DefaultIcon,
  ECommerceIcon,
  ProjectsIcon,
  OnlineCoursesIcon,
  UserProfileIcon,
  BlogIcon,
  SocialIcon,
  CorporateIcon,
  AccountIcon,
  PersonIcon,
  GrayDotIcon,
} from '../../assets/icons';
import Item from './Item';
import { useParams } from 'react-router';

const items = [
  { key: 'home', path: '/home', icon: <DefaultIcon />, label: 'Default' },
  {
    key: 'ecommerce',
    icon: <ECommerceIcon />,
    label: 'Ecommerce',
    isDropdown: true,
    dropdownItems: [
      { key: 'order-list', label: 'Order List' },
      { key: 'ecommerce-2', label: 'Ecommerce 2' },
      { key: 'ecommerce-3', label: 'Ecommerce 3' },
    ],
  },
  {
    key: 'projects',
    icon: <ProjectsIcon />,
    label: 'Projects',
    isDropdown: true,
    dropdownItems: [
      { key: 'project-1', label: 'Project 1' },
      { key: 'project-2', label: 'Project 2' },
      { key: 'project-3', label: 'Project 3' },
    ],
  },
  {
    key: 'online-courses',
    icon: <OnlineCoursesIcon />,
    label: 'Online Courses',
    isDropdown: true,
    dropdownItems: [
      { key: 'online-courses-1', label: 'Online Courses 1' },
      { key: 'online-courses-2', label: 'Online Courses 2' },
      { key: 'online-courses-3', label: 'Online Courses 3' },
    ],
  },
];

const pagesItems = [
  {
    key: 'user-profile',
    icon: <UserProfileIcon />,
    label: 'User Profile',
    isDropdown: true,
    dropdownItems: [
      { key: 'overview', label: 'Overview' },
      { key: 'projects', label: 'Projects' },
      { key: 'campaigns', label: 'Campaigns' },
      { key: 'documents', label: 'Documents' },
      { key: 'followers', label: 'Followers' },
    ],
  },
  {
    key: 'blog',
    icon: <BlogIcon />,
    label: 'Blog',
    isDropdown: true,
    dropdownItems: [
      { key: 'blog-1', label: 'Blog 1' },
      { key: 'blog-2', label: 'Blog 2' },
      { key: 'blog-3', label: 'Blog 3' },
    ],
  },
  {
    key: 'social',
    icon: <SocialIcon />,
    label: 'Social',
    isDropdown: true,
    dropdownItems: [
      { key: 'social-1', label: 'Social 1' },
      { key: 'social-2', label: 'Social 2' },
      { key: 'social-3', label: 'Social 3' },
    ],
  },
  {
    key: 'corporate',
    icon: <CorporateIcon />,
    label: 'Corporate',
    isDropdown: true,
    dropdownItems: [
      { key: 'corporate-1', label: 'Corporate 1' },
      { key: 'corporate-2', label: 'Corporate 2' },
      { key: 'corporate-3', label: 'Corporate 3' },
    ],
  },
  {
    key: 'account',
    icon: <AccountIcon />,
    label: 'Account',
    isDropdown: true,
    dropdownItems: [
      { key: 'account-1', label: 'Account 1' },
      { key: 'account-2', label: 'Account 2' },
      { key: 'account-3', label: 'Account 3' },
    ],
  },
];

const LeftSidebar = ({ collapsed: propCollapsed = false, theme = 'light' }) => {
  const { tab } = useParams();
  console.log(tab);
  const [internalCollapsed, setInternalCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState('default');

  const collapsed =
    propCollapsed !== undefined ? propCollapsed : internalCollapsed;

  const handleMenuClick = ({ key }) => {
    setSelectedKey(key);
  };

  return (
    <div
      className={classNames(styles.sidebar, styles[theme], {
        [styles.collapsed]: collapsed,
      })}
    >
      <div className={styles.header}>
        <div className={styles.userInfo}>
          <div className={styles.userIcon}>
            <PersonIcon />
          </div>
          {!collapsed ? (
            <span
              className={`${styles.userName} ${collapsed ? styles.hidden : ''}`}
            >
              ByeWind
            </span>
          ) : null}
        </div>
      </div>
      {!collapsed ? (
        <>
          <div className={`${styles.tabs} ${collapsed ? styles.hidden : ''}`}>
            <button className={`${styles.tab} ${styles.activeTab}`}>
              Favorites
            </button>
            <button className={styles.tab}>Recently</button>
          </div>

          <div
            className={`${styles.favoritesList} ${collapsed ? styles.hidden : ''}`}
          >
            <div className={styles.favoriteItem}>
              <GrayDotIcon /> Overview
            </div>
            <div className={styles.favoriteItem}>
              <GrayDotIcon /> Projects
            </div>
          </div>
        </>
      ) : null}

      <div className={styles.section}>
        <div
          className={`${styles.sectionTitle} ${collapsed ? styles.hidden : ''}`}
        >
          Dashboards
        </div>
        <div className={styles.menuItems}>
          {items.map((item) => (
            <Item
              key={item.key}
              {...item}
              isCollapsed={collapsed}
              theme={theme}
              isActive={tab === item.key}
            />
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <div
          className={`${styles.sectionTitle} ${collapsed ? styles.hidden : ''}`}
        >
          Pages
        </div>
        <div className={styles.menuItems}>
          {pagesItems.map((item) => (
            <Item
              key={item.key}
              {...item}
              isCollapsed={collapsed}
              theme={theme}
              isActive={tab === item.key}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
