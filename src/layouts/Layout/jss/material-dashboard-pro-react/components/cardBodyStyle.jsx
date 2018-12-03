import {
    primaryCardHeader,
    borderPrimaryColor,
} from "Layouts/Layout/jss/material-dashboard-pro-react";

const cardBodyStyle = {
  cardBody: {
    padding: "0.9375rem 0",
    margin: "0 30px",
    flex: "1 1 auto",
    WebkitBoxFlex: "1",
    position: "relative",
    borderBottom: `1px solid ${borderPrimaryColor}`,

      "&:last-child, &:first-child:last-child": {
          borderBottom: "none"
      },

      "@media (max-width: 599px)": {
          margin: "0 15px",
      },

    "&:first-child": {
        paddingTop: "1.5rem",
    }
  },
  cardBodyBackground: {
    position: "relative",
    zIndex: "2",
    minHeight: "280px",
    paddingTop: "40px",
    paddingBottom: "40px",
    maxWidth: "440px",
    margin: "0 auto"
  },
  cardBodyPlain: {
    paddingLeft: "5px",
    paddingRight: "5px"
  },
  cardBodyFormHorizontal: {
    paddingLeft: "15px",
    paddingRight: "15px",
    "& form": {
      margin: "0"
    }
  },
  cardPricing: {
    padding: "15px!important",
    margin: "0px!important"
  },
  cardSignup: {
    padding: "0px 30px 0px 30px"
  },
  cardBodyColor: {
    borderRadius: "6px",
    "&": {
      "h1, h2, h3": {
        "& small": {
          color: "rgba(255, 255, 255, 0.8)"
        }
      }
    }
  },
  cardBodyProfile: {
    marginTop: "15px"
  },
  cardBodyCalendar: {
    padding: "0px !important"
  }
};

export default cardBodyStyle;
