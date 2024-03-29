import React from 'react';
import Icon from './Icon/Icon';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import SidebarContainer from './Container/SidebarContainer';
import { FaChrome, FaFirefoxBrowser, FaPaypal, FaShapes } from 'react-icons/fa';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import BrowserAccordion from '../Accordion/Accordion';

const infos = {
    chrome: {
        browserName: "Chrome",
        githubInfo: {
            link: "https://github.com/longade/aep-request-analyzer",
        },
        storeInfo: {
            link: "https://chrome.google.com/webstore/detail/aep-requests-analyzer/ackephkehloidacldkffjpohlhmmnfof?clickfrom=sidebar",
            icon: <FaChrome />,
            name: "Chrome Web Store"
        }
    },
    firefox: {
        browserName: "Firefox",
        githubInfo: {
            link: "https://github.com/longade/aep-request-analyzer-firefox",
        },
        storeInfo: {
            link: "https://addons.mozilla.org/it/firefox/addon/aep-requests-analyzer?clickfrom=sidebar",
            icon: <FaFirefoxBrowser />,
            name: "Firefox Addons Page"
        }
    }
}

const smoothScroll = (element, offset = 0) => {
    const rect = element.getBoundingClientRect();
    let targetPosition = rect.top + window.pageYOffset + offset;
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });

    return new Promise((resolve, reject) => {
        resolve();
    });
}

const Sidebar = ({ isOpen, toggle }) => {

    const scrollIntoElement = (elementId) => {
        const fixedElementId = elementId.startsWith('#') ? elementId : '#' + elementId;
        const element = document.querySelector(fixedElementId);
        smoothScroll(element).then(() => toggle());
    };

    const list = () => (
        <List>
            <ListItem>
                <Icon toggle={toggle} />
            </ListItem>
            <ListItemButton onClick={() => scrollIntoElement("#examples")}>
                <ListItemIcon>
                    <FaShapes />
                </ListItemIcon>
                <ListItemText primary="Examples" />
            </ListItemButton>
            <BrowserAccordion browser={infos.chrome} toggle={toggle} />
            <BrowserAccordion browser={infos.firefox} toggle={toggle} />
            <ListItemButton onClick={toggle} component="a" href={"https://paypal.me/davidelongo97"} target='_blank' rel="noopener noreferrer">
                <ListItemIcon>
                    <FaPaypal />
                </ListItemIcon>
                <ListItemText primary="Donate" />
            </ListItemButton>
        </List>
    );

    return (
        <SidebarContainer isOpen={isOpen} toggle={toggle}>
            {list()}
        </SidebarContainer>
    );
};

export default Sidebar;
