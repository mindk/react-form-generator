import {
    primaryColor,
    primaryBoxShadow,
    ladelPrimaryColor,
    defaultFont,
    dangerColor,
    successColor,
    blackColor,
} from 'Layouts/Layout/jss/material-dashboard-pro-react';

const customSelectStyle = {
  select: {
    padding: "6px 0 7px",
    // fontSize: ".75rem",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "1.42857",
    textDecoration: "none",
    color: blackColor,
    letterSpacing: "0",
    "&:focus": {
      backgroundColor: "transparent"
    },
    "&[aria-owns] + input + svg": {
      transform: "rotate(180deg)"
    },
    "& + input + svg": {
      transition: "all 300ms linear"
    }
  },
  selectFormControl: {
    // margin: "10px 1px 10px 0px !important",
      margin: "15px 0 0",
      paddingTop: "0",
      paddingBottom: "10px",
      position: "relative",
      verticalAlign: "unset",

      "& svg,& .fab,& .far,& .fal,& .fas,& .material-icons": {
          color: ladelPrimaryColor
      },
      "& p": {
          marginTop: '5px',
          "& a": {
              color: 'inherit !important',
              textDecoration: 'underline',

              "&:hover": {
                  textDecoration: 'none',
              }
          }
      },
        "& > div": {
            "&:before": {
                borderBottomWidth: "1px !important",
                borderBottomColor: "#D2D2D2 !important"
            },
            "&:after": {
                borderBottomColor: `${primaryColor} !important`
            }
        }
  },
    selectLabel: {
      ...defaultFont,
      color: `${ladelPrimaryColor} !important`,
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "1",
      top: "auto",
      bottom: "100%",
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      maxWidth: '100%',
      overflow: 'hidden',
        '& + .fg-select': {
            marginTop: "0",
        }
    },
    selectLabelError: {
        color: `${dangerColor} !important`
    },
    selectLabelSuccess: {
        color: `${successColor} !important`
    },
  selectMenu: {
    "& > div > ul": {
      border: "0",
      padding: "5px 0",
      margin: "0",
      boxShadow: "none",
      minWidth: "100%",
      borderRadius: "4px",
      boxSizing: "border-box",
      display: "block",
      fontSize: "14px",
      textAlign: "left",
      listStyle: "none",
      backgroundColor: "#fff",
      backgroundClip: "padding-box"
    },
    "& $selectPaper $selectMenuItemSelectedMultiple": {
      backgroundColor: "inherit"
    },
    "& > div + div": {
      maxHeight: "266px !important",
    }
  },
  selectMenuItem: {
    fontSize: "13px",
    padding: "10px 20px",
    margin: "0 5px",
    borderRadius: "2px",
    transition: "all 150ms linear",
    display: "block",
    clear: "both",
    fontWeight: "400",
    lineHeight: "2",
    whiteSpace: "nowrap",
    color: "#333",
    paddingRight: "30px",
    "&:hover": {
      backgroundColor: primaryColor,
      color: "#FFFFFF",
      ...primaryBoxShadow
    }
  },
  selectMenuItemSelected: {
    backgroundColor: `${primaryColor}!important`,
    color: "#FFFFFF"
  },
  selectMenuItemSelectedMultiple: {
    backgroundColor: "transparent !important",
    "&:hover": {
      backgroundColor: `${primaryColor}!important`,
      color: "#FFFFFF",
      ...primaryBoxShadow,
      "&:after": {
        color: "#FFFFFF"
      }
    },
    "&:after": {
      top: "16px",
      right: "12px",
      width: "12px",
      height: "5px",
      borderLeft: "2px solid currentColor",
      transform: "rotate(-45deg)",
      opacity: "1",
      color: "#3c4858",
      position: "absolute",
      content: "''",
      borderBottom: "2px solid currentColor",
      transition: "opacity 90ms cubic-bezier(0,0,.2,.1)"
    }
  },
  selectPaper: {
    boxSizing: "borderBox",
    borderRadius: "4px",
    padding: "0",
    minWidth: "100%",
    display: "block",
    border: "0",
    boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.26)",
    backgroundClip: "padding-box",
    margin: "2px 0 0",
    fontSize: "14px",
    textAlign: "left",
    listStyle: "none",
    backgroundColor: "transparent",
    maxHeight: "266px"
  }
};

export default customSelectStyle;
