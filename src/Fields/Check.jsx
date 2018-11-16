/**
 * Check Field component script class
 *
 * @package    Form Generator
 * @author     Dmytro Ieremenko <dieremenko@mindk.com>
 * @copyright  Copyright (c) 2010-2018 MindK (http://mindk.com). All rights reserved.
 * @license    http://mindk.com
 * @link       http://mindk.com
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import cx from 'classname';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormHelperText from '@material-ui/core/FormHelperText';
import Check from '@material-ui/icons/Check';
import { withStyles } from '@material-ui/core/styles';
import styles from 'Layouts/Layout/jss/material-dashboard-pro-react/customCheckboxRadioSwitch';

class FGCheck extends PureComponent {
    /**
     * @type {Object}
     */
    static propTypes = {
        label: PropTypes.string,
        meta: PropTypes.object,
        className: PropTypes.string,
        rowClassName: PropTypes.string,
        rootClassName: PropTypes.string,
        withLabel: PropTypes.bool,
        classes: PropTypes.object,
        error: PropTypes.string,
        fullWidth: PropTypes.bool,
        required: PropTypes.bool,
        disabled: PropTypes.bool,
        icon: PropTypes.any,
        input: PropTypes.object,
        checkedIcon: PropTypes.any,
        value: PropTypes.any,
        color: PropTypes.string,
        checked: PropTypes.bool,
        showErrors: PropTypes.bool,
        indeterminate: PropTypes.bool,
    };

    /**
     * @type {Object}
     */
    static contextTypes = {
        intl: PropTypes.object.isRequired,
    };

    /**
     * State
     *
     * @type {{touched: boolean}}
     */
    state = {
        touched: false,
    };

    /**
     * Handle Change
     *
     * @param e
     * @param value
     */
    handleChange = (e, value) => {
        const {
            input: { onChange }
        } = this.props;
        const { touched } = this.state;
        if (!touched) {
            this.setState({ touched: true });
        }
        onChange(e, value);
    };

    /**
     * @type {Object}
     */
    static defaultProps = {
        color: 'default', // can be primary | secondary | default
        withLabel: true,
        fullWidth: true,
        showErrors: true,
        indeterminate: false,
    };

    /**
     * Render Checkbox
     *
     * @return {*}
     */
    renderCheckbox = () => {
        const {
            label,
            withLabel,
            disabled,
            value,
            color,
            // input: { onChange },
            input,
            indeterminate,
            classes,
            rootClassName,
        } = this.props;

        const labelText = withLabel && label ? label : '';

        return (
            <FormControlLabel
                control={
                    <Checkbox
                        name={name}
                        disabled={disabled}
                        checked={!!input.value}
                        value={value}
                        color={color}
                        onChange={this.handleChange}
                        indeterminate={indeterminate}
                        classes={{
                            checked: classes.checked,
                            disabled: classes.disabledCheckboxAndRadio,
                            root: 'checkbox',
                        }}
                        icon={<Check className={classes.uncheckedIcon}/>}
                        checkedIcon={<Check className={classes.checkedIcon}/>}
                    />
                }
                classes={{
                    label: classes.label,
                    root: rootClassName + ' checkbox-wrapper'
                }}
                label={labelText}
            />
        );
    };

    /**
     * Render Error Message
     *
     * @return {*}
     */
    renderErrorMessage = () => {
        const {
            meta: { error, submitFailed },
            showErrors,
        } = this.props;
        const { touched } = this.state;
        const { formatMessage } = this.context.intl;
        let errorMessage = error
            ? (/validation.error.\w+/.test(error) ? formatMessage({ id: error }) : error)
            : '';
        return (
            <div>
                { showErrors && (submitFailed || touched && !!error && errorMessage) &&
                    <FormHelperText
                        className="errors-list"
                        error={!!error}
                    >
                        {errorMessage}
                    </FormHelperText>
                }
            </div>
        );
    };

    render() {
        const { rowClassName, fullWidth, required, classes, disabled } = this.props;

        return (
            <div className={cx(rowClassName, classes.checkboxAndRadio, classes.checkboxAndRadioHorizontal)}>
                <FormControl
                    fullWidth={fullWidth}
                    required={required}
                    disabled={disabled}
                >
                    {this.renderCheckbox()}
                    {this.renderErrorMessage()}
                </FormControl>
            </div>
        );
    }
}

export default withStyles(styles)(FGCheck);
