import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './styles.module.css';
import Notifications from './Notifications';
import Activities from './Activities';
import Contacts from './Contacts';

const RightSidebar = ({
  collapsed: propCollapsed = false,
  onCollapse,
  theme = 'light',
}) => {
  const [internalCollapsed, setInternalCollapsed] = useState(false);

  const collapsed =
    propCollapsed !== undefined ? propCollapsed : internalCollapsed;

  return (
    <div
      className={classNames(styles.sidebar, styles[theme], {
        [styles.collapsed]: collapsed,
      })}
    >
      <Notifications theme={theme} />
      <Activities theme={theme} />
      <Contacts theme={theme} />
    </div>
  );
};

export default RightSidebar;
