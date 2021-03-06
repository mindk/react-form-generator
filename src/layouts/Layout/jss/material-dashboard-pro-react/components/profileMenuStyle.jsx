// ##############################
// // // Profile styles
// #############################

import {
    primaryColor,
    darkColor
} from 'Layouts/Layout/jss/material-dashboard-pro-react';

import customDropdownStyle from "Layouts/Layout/jss/material-dashboard-pro-react/components/customDropdownStyle";

const profileMenuStyle = theme => ({
  ...customDropdownStyle(theme),
    profileUserMenuButton: {
        margin: 0,

        '&:hover': {
            opacity: .8,
        },
  },
    profileUserMenu: {
        display: "inline-block",
        position: 'relative',

        [theme.breakpoints.up("md")]: {
            marginRight: '20px',
        },
  },
    profileUserMenuButtonInner: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profilePhoto: {
        transition: "all 300ms linear",
        width: 43,
        height: 43,
        overflow: "hidden",
        marginRight: 15,
        borderRadius: "50%",
        border: `1px solid ${primaryColor}`,
        textAlign: 'center',

        [theme.breakpoints.down("xs")]: {
            marginRight: 0,
        },
    },
    avatarImg: {
        display: 'inline-block',
        verticalAlign: "middle",
        maxWidth: "100%",
        border: "0"
    },
    profileName: {
        color: primaryColor,
        fontSize: 22,
        fontWeight: 600,
        textTransform: 'none',

        [theme.breakpoints.down("sm")]: {
            // fontSize: 20,
            display: 'none',
        },

        [theme.breakpoints.down("xs")]: {
           // display: 'none',
        },
    },
    pooperNav: {
        width: '250px',
    },
    profileUserMenuDropdown: {
        marginTop: "15px",
    },
    profileUserMenuItem: {
        display: 'flex',
        color: darkColor,
        fontSize: "16px",

        '&:hover $profileUserMenuIconWrapper': {
            color: '#FFF',
        },
    },
    profileUserMenuIconWrapper:{
        color: primaryColor,
    },
    profileUserMenuIcon: {
        color: 'inherit',
    },
    profileUserMenuItemText: {
        padding: 0,
        color: 'inherit',
    },
});

export default profileMenuStyle;
