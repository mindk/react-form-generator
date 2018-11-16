import {
  defaultFont,
  primaryColor,
  dangerColor,
  tooltip
} from "Layouts/Layout/jss/material-dashboard-pro-react";
import customCheckboxRadioSwitch from "Layouts/Layout/jss/material-dashboard-pro-react/customCheckboxRadioSwitch";

const tasksStyle = {
  ...customCheckboxRadioSwitch,
  table: {
    marginBottom: "0"
  },
  tableRow: {
    position: "relative",
    borderBottom: "1px solid #dddddd"
  },
  tableActions: {
    border: "none",
    padding: "12px 8px !important",
    verticalAlign: "middle"
  },
  tableCell: {
    ...defaultFont,
    padding: "0",
    verticalAlign: "middle",
    border: "none",
    lineHeight: "1.42857143",
    fontSize: "14px"
  },
  tableActionButton: {
    width: "27px",
    height: "27px",
    padding: "0"
  },
  tableActionButtonIcon: {
    width: "17px",
    height: "17px"
  },
  edit: {
    backgroundColor: "transparent",
    color: primaryColor,
    boxShadow: "none"
  },
  close: {
    backgroundColor: "transparent",
    color: dangerColor,
    boxShadow: "none"
  },
  tooltip
};
export default tasksStyle;
