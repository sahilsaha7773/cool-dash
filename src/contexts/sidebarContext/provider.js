import { useState } from 'react';
import SidebarContext from './context';

const SidebarProvider = ({ children }) => {
  const [leftSidebarCollapsed, setLeftSidebarCollapsed] = useState(false);
  const [rightSidebarCollapsed, setRightSidebarCollapsed] = useState(false);

  return (
    <SidebarContext.Provider
      value={{
        leftSidebarCollapsed,
        rightSidebarCollapsed,
        setLeftSidebarCollapsed,
        setRightSidebarCollapsed,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
