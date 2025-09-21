import Navbar from '../../../components/Navbar';
import Home from '../Home';
import SidebarContext from '../../../contexts/sidebarContext/context';
import { useContext, useMemo } from 'react';
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

  const TabComponent = useMemo(() => {
    switch (tab) {
      case 'home':
        return <Home theme={theme} />;
      case 'order-list':
        return <OrderList theme={theme} />;
      default:
        return <Home theme={theme} />;
    }
  }, [tab, theme]);

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
          {TabComponent}
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
