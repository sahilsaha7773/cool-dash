import Navbar from '../../../components/Navbar';
import SidebarProvider from '../../../contexts/sidebarContext/provider';
import Home from '../home';
import SidebarContext from '../../../contexts/sidebarContext/context';
import { useContext } from 'react';
import styles from './styles.module.css';
import LeftSidebar from '../../../components/LeftSidebar';
import RightSidebar from '../../../components/RightSidebar';
import { useParams } from 'react-router';
import OrderList from '../OrderList';
import classNames from 'classnames';

const DashboardLayout = ({ theme }) => {
  const { tab } = useParams();
  const { leftSidebarCollapsed, rightSidebarCollapsed } =
    useContext(SidebarContext);

  return (
    <div>
      <div className={classNames(styles.mainContainer, styles[theme])}>
        <div className={styles.leftSidebar}>
          <LeftSidebar
            className={styles.leftSidebar}
            collapsed={leftSidebarCollapsed}
            theme={theme}
          />
        </div>
        <div className={styles.middleContainer}>
          <Navbar theme={theme} />
          {tab === 'home' ? (
            <Home theme={theme} />
          ) : (
            <OrderList theme={theme} />
          )}
        </div>
        <div className={styles.rightSidebar}>
          <RightSidebar
            className={styles.rightSidebar}
            collapsed={rightSidebarCollapsed}
            theme={theme}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
