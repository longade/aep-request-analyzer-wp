import React from 'react';
import "./SidebarContainer.scss";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

const SidebarContainer = ({ children, ...props }) => {
  const { isOpen, toggle } = props;

  return (
    <div>
      <React.Fragment key={'left'}>
        <SwipeableDrawer
          anchor={'left'}
          open={isOpen}
          onClose={toggle}
          onOpen={toggle}
          classes={{ paper: 'paper' }}
        >
          {children}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}

export default SidebarContainer;