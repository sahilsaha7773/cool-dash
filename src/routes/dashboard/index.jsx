import { useContext } from 'react';
import SidebarProvider from '../../contexts/sidebarContext/provider';
import DashboardLayout from './DashboardLayout';
import ThemeContext from '../../contexts/themeContext/context';

const Dashboard = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <SidebarProvider>
      <DashboardLayout theme={theme} />
    </SidebarProvider>
  );
};

export default Dashboard;
