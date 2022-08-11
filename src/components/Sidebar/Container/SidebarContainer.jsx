import React from 'react';
import useStyles from './styles';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

export default function SidebarContainer({ children, ...props }) {
    const classes = useStyles(props);

    const { isOpen, toggle } = props;

    return (
        <div>
            <React.Fragment key={'left'}>
                <SwipeableDrawer
                    anchor={'left'}
                    open={isOpen}
                    onClose={toggle}
                    onOpen={toggle}
                    classes={{ paper: classes.paper }}
                >
                    {children}
                </SwipeableDrawer>
            </React.Fragment>
        </div>
    );
}