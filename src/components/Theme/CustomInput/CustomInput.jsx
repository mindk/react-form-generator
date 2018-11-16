import React from 'react';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// nodejs library that concatenates classes
import classNames from 'classnames';
import { Link } from 'react-router-dom'; // eslint-disable-line
import renderHTML from 'react-render-html';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';

import customInputStyle from 'Layouts/Layout/jss/material-dashboard-pro-react/components/customInputStyle.jsx';

function CustomInput({ ...props }) {
    const {
        classes,
        formControlProps,
        labelText,
        id,
        labelProps,
        inputProps,
        error,
        white,
        inputRootCustomClasses,
        success,
        helpText,
        onChange,
        onBlur,
        fullWidth,
        defaultValue
    } = props;

    const labelClasses = classNames({
        [' ' + classes.labelRootError]: error,
        [' ' + classes.labelRootSuccess]: success && !error
    });
    const underlineClasses = classNames({
        [classes.underlineError]: error,
        [classes.underlineSuccess]: success && !error,
        [classes.underline]: true,
        [classes.whiteUnderline]: white
    });
    const marginTop = classNames({
        [inputRootCustomClasses]: inputRootCustomClasses !== undefined
    });
    const inputClasses = classNames({
        [classes.input]: true,
        [classes.whiteInput]: white
    });
    var formControlClasses;
    if (formControlProps !== undefined) {
        formControlClasses = classNames(formControlProps.className, classes.formControl);
    } else {
        formControlClasses = classes.formControl;
    }
    var helpTextClasses = classNames({
        [classes.labelRootError]: error,
        [classes.labelRootSuccess]: success && !error
    });

    return (

        <FormControl
            fullWidth={fullWidth}
            {...formControlProps}
            className={formControlClasses}
        >
            {labelText !== undefined ? (
                <InputLabel
                    className={classes.labelRoot + ' ' + labelClasses}
                    htmlFor={id}
                    {...labelProps}
                >
                    {labelText}
                </InputLabel>
            ) : null}
            <Input
                classes={{
                    input: inputClasses,
                    root: marginTop,
                    disabled: classes.disabled,
                    underline: underlineClasses
                }}
                id={id}
                onChange={onChange}
                onBlur={onBlur}
                defaultValue={defaultValue}
                {...inputProps}
            />
            {helpText !== undefined ? (
                <FormHelperText id={id + '-text'} className={helpTextClasses}>
                    {renderHTML(helpText)}
                </FormHelperText>
            ) : null}
        </FormControl>
    );
}

CustomInput.propTypes = {
    classes: PropTypes.object.isRequired,
    labelText: PropTypes.node,
    labelProps: PropTypes.object,
    id: PropTypes.string,
    inputProps: PropTypes.object,
    formControlProps: PropTypes.object,
    inputRootCustomClasses: PropTypes.string,
    error: PropTypes.bool,
    success: PropTypes.bool,
    white: PropTypes.bool,
    helpText: PropTypes.node,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    defaultValue: PropTypes.string,
    fullWidth: PropTypes.bool,
};

export default withStyles(customInputStyle)(CustomInput);
