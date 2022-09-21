import React from 'react';
import Icon from './Icon/Icon';
import SidebarMenu from './SidebarMenu/SidebarMenu';
import SidebarLink from './SidebarMenu/Link/SidebarLink';
import ButtonWrap from './ButtonWrap/ButtonWrap';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import SidebarContainer from './Container/SidebarContainer';

const Sidebar = ({ isOpen, toggle }) => {

    const list = () => (
        <Box
            role="presentation"
            onClick={toggle}
            onKeyDown={toggle}
        >
            <List>
                <ListItem>
                    <Icon onClick={toggle} />
                </ListItem>
                <ListItem style={{ display: 'flex', justifyContent: 'center' }}>
                    <SidebarMenu>
                        <SidebarLink title='Examples' elementId='#examples' />
                        <SidebarLink title='GitHub' to='https://github.com/longade/aep-request-analyzer' isExtLink />
                        <SidebarLink title='Donate' to='https://paypal.me/davidelongo97' isExtLink />
                    </SidebarMenu>
                </ListItem>
                <ListItem style={{ display: 'flex', justifyContent: 'center' }}>
                    <ButtonWrap title='Download from CWS' to='https://chrome.google.com/webstore/detail/aep-requests-analyzer/ackephkehloidacldkffjpohlhmmnfof' />
                </ListItem>
            </List>
        </Box>
    );

    return (
        <SidebarContainer isOpen={isOpen} toggle={toggle}>
            {list()}
        </SidebarContainer>
    );
};

export default Sidebar;
