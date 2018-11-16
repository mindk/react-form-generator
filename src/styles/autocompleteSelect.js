// ##############################
// // // FGDateTime styles
// #############################

import { emphasize } from '@material-ui/core/styles/colorManipulator';
import {
    defaultFont,
    dangerColor,
    primaryColor,
    successColor,
    blackColor,
    ladelPrimaryColor,
} from 'Layouts/Layout/jss/material-dashboard-pro-react';


const AutocompleteSelectStyles = theme => ({
    root: {
        flexGrow: 1,
    },
    valueContainer: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        // width: 'calc(100% - 40px)',
        width: 'calc(100% - 73px)',
        color: blackColor,

        '& *': {
            color: 'inherit',
        }
    },
    singleValue: {
        fontSize: 14,
        order: 1,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        margin: 0,
    },
    placeholder: {
        position: 'absolute',
        left: 2,
        fontSize: 14,
        color: ladelPrimaryColor,
    },
    chip: {
        margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
    },
    chipFocused: {
        backgroundColor: emphasize(
            theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
            0.08,
        ),
    },
    noOptionsMessage: {
        padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    },
    paper: {
        position: 'absolute',
        zIndex: 1,
        left: 0,
        right: 0,
        top: '100%',
        marginTop: '-10px',
        color: ladelPrimaryColor,
    },
    paperItemRoot: {
        paddingTop: 5,
        paddingBottom: 5,
        fontSize: 14,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxWidth: '100%',
    },
    paperItemSelected:{
        "&:hover": {
            backgroundColor: "rgba(0,0,0,.1) !important"
        }
    },
    divider: {
        height: theme.spacing.unit * 2,
    },
    autocompleteFormControl: {
        margin: "15px 0 0",
        paddingTop: "0",
        paddingBottom: "10px",
        position: "relative",
        verticalAlign: "unset",

        "& svg,& .fab,& .far,& .fal,& .fas,& .material-icons": {
            color: ladelPrimaryColor,
            cursor: 'pointer',
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
    autocompleteLabel:{
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

        '& + .fg-select, & + $autocompleteInputRoot': {
            marginTop: "0",
        }
    },
    autocompleteInputRoot: {
        marginTop: 0,
    },
    autocompleteInput: {
        display: 'flex',
        padding: 0,
        margin: '-2px 0',
    },

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
});

export default AutocompleteSelectStyles;
