
import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import ExtensionIcon from '@material-ui/icons/Extension';
import PhoneIcon from '@material-ui/icons/Phone';

/* import your desired icon from material-ui icons library */
import {NavLink} from 'react-router-dom';


export const publicNavs = [
    {
        url:'/home',
        name:'Home',
        icon:<HomeIcon/>
    },
    {
        url:'/products',
        name:'Products',
        icon:<ExtensionIcon/>
    },
    {
        url:'/contact',
        name:'Contact',
        icon:<PhoneIcon/>
    },
    // add new Nav links here as a json object, in this file the public navigations
];
export default () => (
    publicNavs.map(navItem => (
        <NavLink to={navItem.url}  className="NavLinkItem" key={navItem.url} activeClassName="NavLinkItem-selected">
            <List component="nav">
                <ListItem button>
                    <ListItemIcon className="innerNavItem">
                        {navItem.icon}
                    </ListItemIcon>
              <ListItemText primary={navItem.name} className="innerNavItem" color="black"/>
                </ListItem>
            </List>
        </NavLink>
    )));





