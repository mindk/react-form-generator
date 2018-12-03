// ##############################
// // // Header styles
// #############################

import {
  containerFluid,
  defaultFont,
  primaryColor,
  defaultBoxShadow,
  infoColor,
  successColor,
  warningColor,
  dangerColor
} from "Layouts/Layout/jss/material-dashboard-pro-react";

const headerStyle = {
  appBar: {
    backgroundColor: "#FFF",
    boxShadow: "none",
    borderBottom: "0",
    marginBottom: "0",
    position: "absolute",
    width: "100%",
    // paddingTop: "10px",
    zIndex: "1029",
    color: "#555555",
    border: "0",
    // borderRadius: "3px",
    borderRadius: 0,
    // padding: "10px 0",
    padding: "8px 0",
    transition: "all 150ms ease 0s",
    minHeight: "50px",
    display: "block"
  },
  container: {
    ...containerFluid,
    minHeight: "50px"
  },
  flex: {
    flex: 1
  },
  title: {
    ...defaultFont,
    lineHeight: "30px",
    fontSize: "18px",
    borderRadius: "3px",
    textTransform: "none",
    color: "inherit",
    paddingTop: "0.625rem",
    paddingBottom: "0.625rem",
    margin: "0 !important",
    "&:hover,&:focus": {
      background: "transparent"
    }
  },
  primary: {
    backgroundColor: primaryColor,
    color: "#FFFFFF",
    ...defaultBoxShadow
  },
  info: {
    backgroundColor: infoColor,
    color: "#FFFFFF",
    ...defaultBoxShadow
  },
  success: {
    backgroundColor: successColor,
    color: "#FFFFFF",
    ...defaultBoxShadow
  },
  warning: {
    backgroundColor: warningColor,
    color: "#FFFFFF",
    ...defaultBoxShadow
  },
  danger: {
    backgroundColor: dangerColor,
    color: "#FFFFFF",
    ...defaultBoxShadow
  },
  sidebarMinimize: {
    float: "left",
    padding: "0 0 0 5px",
    display: "block",
    color: "#555555"
  },
  sidebarMinimizeRTL: {
    padding: "0 15px 0 0 !important"
  },
  sidebarMiniIcon: {
    color: primaryColor,
    width: "22px !important",
    height: "22px !important",
    margin: 0,
  },
    logoMobileBlock: {},
    logoMobile: {},
    headerContentBlock: {
      textAlign: 'center',
    },
    createNetworkButtonWrapper: {

      '& .create-network-button': {
          textTransform: 'none',
          fontSize: 18,
          fontWeight: 300,
          margin: 0,
          boxShadow: 'none',

          "&:hover, &:hover:focus": {
              boxShadow: "0px 4px 8px rgba(0, 0, 0, .2)",
          },

          '& img': {
              marginRight: 15
          },

          '@media (max-width: 599px)': {
              fontSize: 14,
              paddingLeft: 20,
              paddingRight: 20,

              '& img': {
                  marginRight: 7,
              },
          }
      },
    },
    linkReset: {
        "&, &:hover, &:focus": {
            color: "inherit",
            textDecoration: "none",
            outline: "none",
        }
    },
};

export default headerStyle;
