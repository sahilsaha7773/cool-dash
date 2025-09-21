import {
  BellIcon,
  LightModeIcon,
  RecentsIcon,
  SearchCommandIcon,
  SearchIcon,
  SidebarToggleIcon,
  StarIcon,
} from '../../assets/icons';
import Breadcrumb from '../Breadcrumb';
import Input from '../Input';
import styles from './styles.module.css';
import SidebarContext from '../../contexts/sidebarContext/context';
import { useCallback, useContext } from 'react';
import ThemeContext from '../../contexts/themeContext/context';
import classNames from 'classnames';

const Navbar = ({ theme }) => {
  const {
    leftSidebarCollapsed,
    rightSidebarCollapsed,
    setLeftSidebarCollapsed,
    setRightSidebarCollapsed,
  } = useContext(SidebarContext);
  const { setTheme } = useContext(ThemeContext);

  const handleSidebarToggle = useCallback(
    (position) => {
      switch (position) {
        case 'left':
          setLeftSidebarCollapsed(!leftSidebarCollapsed);
          break;
        case 'right':
          setRightSidebarCollapsed(!rightSidebarCollapsed);
          break;
      }
    },
    [
      leftSidebarCollapsed,
      rightSidebarCollapsed,
      setLeftSidebarCollapsed,
      setRightSidebarCollapsed,
    ],
  );

  const handleThemeToggle = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }, [theme, setTheme]);

  return (
    <div className={classNames(styles.container, styles[theme])}>
      <div className={styles.leftContainer}>
        <SidebarToggleIcon
          className={styles.icon}
          onClick={() => handleSidebarToggle('left')}
        />
        <StarIcon className={styles.icon} />
        <Breadcrumb
          className={styles.breadcrumb}
          items={[{ title: 'Dashboards' }, { title: 'Default' }]}
        />
      </div>
      <div className={styles.rightContainer}>
        <Input
          placeholder="Search"
          prefix={<SearchIcon />}
          suffix={<SearchCommandIcon />}
          className={styles.searchInput}
        />
        <LightModeIcon className={styles.icon} onClick={handleThemeToggle} />
        <RecentsIcon className={styles.icon} />
        <BellIcon className={styles.icon} />
        <SidebarToggleIcon
          className={styles.icon}
          onClick={() => handleSidebarToggle('right')}
        />
      </div>
    </div>
  );
};

export default Navbar;
