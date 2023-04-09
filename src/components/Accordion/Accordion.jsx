import React from "react";
import "./Accordion.scss";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import { FaDownload, FaGithub } from 'react-icons/fa';

const BrowserAccordion = ({ browser, toggle }) => {

    const { browserName, githubInfo, storeInfo } = browser;

    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    {storeInfo.icon}
                </ListItemIcon>
                <ListItemText primary={browserName} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton onClick={toggle} sx={{ pl: 4 }} component="a" href={githubInfo.link} target='_blank' rel="noopener noreferrer">
                        <ListItemIcon>
                            <FaGithub />
                        </ListItemIcon>
                        <ListItemText primary="GitHub" />
                    </ListItemButton>
                    <ListItemButton onClick={toggle} sx={{ pl: 4 }} component="a" href={storeInfo.link} target='_blank' rel="noopener noreferrer">
                        <ListItemIcon>
                            <FaDownload />
                        </ListItemIcon>
                        <ListItemText primary={storeInfo.name} />
                    </ListItemButton>
                </List>
            </Collapse>
        </>
    );
}

export default BrowserAccordion;