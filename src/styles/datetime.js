// ##############################
// // // FGDateTime styles
// #############################

import {
    blackColor,
    dangerColor,
    defaultFont,
    ladelPrimaryColor,
    successColor,
} from 'Layouts/Layout/jss/material-dashboard-pro-react';

const DateTimeStyles = {
    dateTimeWrapper:{},
    dateTimeFormControl:{
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
        "& input, & input::placeholder": {
            fontWeight: "400",
            color: blackColor,
        }
    },
    dateTimeLabel: {
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

        "& + $underline": {
            marginTop: "0px"
        },
    },
    dateTimeLabelError: {
        color: `${dangerColor} !important`
    },
    dateTimeLabelSuccess: {
        color: `${successColor} !important`
    },
};

export default DateTimeStyles;
