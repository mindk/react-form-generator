import {
    primaryColor,
    dangerColor,
    successColor,
    blackColor,
    defaultFont,
    ladelPrimaryColor,
} from "Layouts/Layout/jss/material-dashboard-pro-react";

const customInputStyle = {
  disabled: {
    "&:before": {
      borderColor: "transparent !important"
    }
  },
  underline: {
    "&:hover:not($disabled):before,&:before": {
      borderColor: "#D2D2D2 !important",
      borderWidth: "1px !important"
    },
    "&:after": {
      borderColor: primaryColor
    }
  },
  underlineError: {
    "&:after": {
      borderColor: dangerColor
    }
  },
  underlineSuccess: {
    "&:after": {
      borderColor: successColor
    }
  },
  labelRoot: {
    ...defaultFont,
    color: `${ladelPrimaryColor} !important`,
    fontWeight: "400",
    fontSize: "14px",
    //lineHeight: "1.42857",
    lineHeight: "1",
    //top: "10px",
    top: "auto",
    bottom: "100%",
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      maxWidth: '100%',
      overflow: 'hidden',

    "& + $underline": {
      marginTop: "0px"
    },
  },
  labelRootError: {
    color: `${dangerColor} !important`
  },
  labelRootSuccess: {
    color: `${successColor} !important`
  },
  formControl: {
    //margin: "0 0 17px 0",
    //paddingTop: "27px",
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
      }
  },
  whiteUnderline: {
    "&:hover:not($disabled):before,&:before": {
      backgroundColor: "#FFFFFF"
    },
    "&:after": {
      backgroundColor: "#FFFFFF"
    }
  },
  input: {
    color: blackColor,
    "&,&::placeholder": {
        ...defaultFont,
      fontSize: "14px",
        fontWeight: "400",
      lineHeight: "1.42857",
      opacity: "1"
    },
    "&::placeholder": {
      color: "#AAAAAA"
    }
  },
  whiteInput: {
    "&,&::placeholder": {
      color: "#FFFFFF",
      opacity: "1"
    }
  }
};

export default customInputStyle;
