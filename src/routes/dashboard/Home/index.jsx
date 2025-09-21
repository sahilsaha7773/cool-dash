import classNames from 'classnames';
import DataCard from '../../../components/DataCard';
import ProjectionsActualsCard from '../../../components/ProjectionsActualsCard';
import RevenueByLocationCard from '../../../components/RevenueByLocationCard';
import RevenueCard from '../../../components/RevenueCard';
import TopSellingProductsCard from '../../../components/TopSellingProductsCard';
import TotalSalesCard from '../../../components/TotalSalesCard';
import styles from './styles.module.css';

const Home = ({ theme }) => {
  return (
    <div className={classNames(styles.container, styles[theme])}>
      <div className={styles.header}>eCommerce</div>
      <div className={styles.dashboardGrid}>
        <div className={styles.dataCardContainer}>
          <DataCard
            title="Customers"
            currentValue="3,781"
            percentage="+11.1%"
            isPositive
            backgroundColor="rgba(227, 245, 255, 1)"
          />
          <DataCard
            title="Orders"
            currentValue="1,219"
            percentage="-0.03%"
            isPositive={false}
            backgroundColor={
              theme === 'light' ? 'rgba(247, 249, 251, 1)' : '#272727'
            }
            theme={theme}
          />
          <DataCard
            title="Revenue"
            currentValue="$693"
            percentage="+15.03%"
            isPositive
            backgroundColor={
              theme === 'light' ? 'rgba(247, 249, 251, 1)' : '#272727'
            }
            theme={theme}
          />
          <DataCard
            title="Growth"
            currentValue="30.1%"
            percentage="+6.08%"
            isPositive
            backgroundColor="rgba(229, 236, 246, 1)"
          />
        </div>
        <div className={styles.projectionsActualsCardContainer}>
          <ProjectionsActualsCard theme={theme} />
        </div>
        <div className={styles.revenueCardContainer}>
          <RevenueCard theme={theme} />
        </div>
        <div className={styles.revenueByLocationCardContainer}>
          <RevenueByLocationCard theme={theme} />
        </div>
        <div className={styles.topSellingProductsCardContainer}>
          <TopSellingProductsCard theme={theme} />
        </div>
        <div className={styles.totalSalesCardContainer}>
          <TotalSalesCard theme={theme} />
        </div>
      </div>
    </div>
  );
};

export default Home;
