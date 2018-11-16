// ##############################
// // // Form styles
// #############################

import {
    ladelPrimaryColor,
} from "Layouts/Layout/jss/material-dashboard-pro-react";

const FormStyles = {
    hide: {
        display: 'none',
    },
    formGenForm: {
        width: '100%',
    },
    fieldWrapperWithClear:{
        position: 'relative',

        "& input": {
            // paddingRight: '20px',
        },
    },
    clearButton: {
        display: 'inline-block',
        lineHeight: 1,
        position: 'absolute',
        top: 0,
        // right: 0,
        left: '100%',
        marginTop: '23px',
        cursor: 'pointer',

        "& svg": {
            fontSize: '16px',
            fill: ladelPrimaryColor,
        },

        "&:hover": {
            opacity: '.8',
        }
    },
};

export default FormStyles;
