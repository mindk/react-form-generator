// ##############################
// // // Table styles
// #############################

import {
  warningColor,
  primaryColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  defaultFont,
  tableBorderColor,
  tableStripedRowBackground,
} from "Layouts/Layout/jss/material-dashboard-pro-react";

const tableStyle = theme => ({
  warning: {
    color: warningColor
  },
  primary: {
    color: primaryColor
  },
  danger: {
    color: dangerColor
  },
  success: {
    color: successColor
  },
  info: {
    color: infoColor
  },
  rose: {
    color: roseColor
  },
  gray: {
    color: grayColor
  },
  right: {
    textAlign: "right"
  },
  table: {
    marginBottom: "0",
    width: "100%",
    maxWidth: "100%",
    backgroundColor: "transparent",
    borderSpacing: "0",
    borderCollapse: "collapse",
    overflow: "auto",
      "& tbody": {
          borderBottom: `1px solid ${tableBorderColor}`,
      }
  },
  tableShoppingHead: {
    fontSize: "0.9em !important",
    textTransform: "uppercase !important"
  },
  tableHeadFontSize: {
    fontSize: "16px !important"
  },
  tableHeadCell: {
    color: "rgba(0, 0, 0, 0.87)",
    border: "none !important"
  },
  tableCell: {
    ...defaultFont,
    lineHeight: "1.42857143",
    padding: "12px 8px!important",
    verticalAlign: "middle",
    fontSize: "14px",
    borderBottom: "none",
    borderTop: `1px solid ${tableBorderColor}`,
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      minHeight: "24px",
      minWidth: "32px"
    }
  },
  tableCellTotal: {
    fontWeight: "500",
    fontSize: "1.25em",
    paddingTop: "14px",
    textAlign: "right"
  },
  tableCellAmount: {
    fontSize: "26px",
    fontWeight: "300",
    marginTop: "5px",
    textAlign: "right"
  },
  tableResponsive: {
    // width: "100%",
    minHeight: "0.1%",
    overflowX: "auto"
  },
  tableStripedRow: {
    backgroundColor: tableStripedRowBackground
  },
  tableRowHover: {
    "&:hover": {
      backgroundColor: "#f5f5f5"
    }
  },
  warningRow: {
    backgroundColor: "#fcf8e3",
    "&:hover": {
      backgroundColor: "#faf2cc"
    }
  },
  dangerRow: {
    backgroundColor: "#f2dede",
    "&:hover": {
      backgroundColor: "#ebcccc"
    }
  },
  successRow: {
    backgroundColor: "#dff0d8",
    "&:hover": {
      backgroundColor: "#d0e9c6"
    }
  },
  infoRow: {
    backgroundColor: "#d9edf7",
    "&:hover": {
      backgroundColor: "#c4e3f3"
    }
  }
});

export default tableStyle;
