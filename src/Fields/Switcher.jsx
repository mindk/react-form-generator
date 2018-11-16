/**
 * Switcher Field component script class
 *
 * @package    Form Generator
 * @author     Dmytro Ieremenko <dieremenko@mindk.com>
 * @copyright  Copyright (c) 2010-2018 MindK (http://mindk.com). All rights reserved.
 * @license    http://mindk.com
 * @link       http://mindk.com
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classname';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import FormHelperText from '@material-ui/core/FormHelperText';
import { withStyles } from '@material-ui/core/styles';
import styles from 'Layouts/Layout/jss/material-dashboard-pro-react/customCheckboxRadioSwitch';

class FGSwitcher extends PureComponent {
    /**
     * @type {Object}
     */
    static propTypes = {
        label: PropTypes.string,
        meta: PropTypes.object,
        className: PropTypes.string,
        rowClassName: PropTypes.string,
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
    };

    /**
     * @type {Object}
     */
    static contextTypes = {
        intl: PropTypes.object.isRequired,
    };


    /**
     * @type {Object}
     */
    static defaultProps = {
        color: 'default', // can be primary | secondary | default
        withLabel: true,
        fullWidth: true,
        showErrors: true,
        wrapByFormControl: true,
        indeterminate: false,
    };

    /**
     * Render Checkbox
     *
     * @return {*}
     */
    renderSwitch = () => {
        const {
            label,
            withLabel,
            disabled,
            value,
            color,
            input: { onChange },
            input,
            classes,
        } = this.props;

        const labelText = withLabel && label ? label : '';

        return (
            <FormControlLabel
                control={
                    <Switch
                        name={name}
                        disabled={disabled}
                        checked={!!input.value}
                        value={value}
                        color={color}
                        onChange={onChange}
                        classes={{
                            switchBase: classes.switchBase,
                            checked: classes.switchChecked,
                            icon: classes.switchIcon,
                            iconChecked: classes.switchIconChecked,
                            bar: classes.switchBar
                        }}
                    />
                }
                classes={{
                    label: classes.label
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
        const { formatMessage } = this.context.intl;
        let errorMessage = submitFailed || error
            ? (/validation.error.\w+/.test(error) ? formatMessage({ id: error }) : error)
            : '';
        return (
            <div>
                { showErrors && error &&
                    <FormHelperText
                        className="errors-list"
                        error={!!error}
                    >
                        { errorMessage }
                    </FormHelperText>
                }
            </div>
        );
    };

    render() {
        const { rowClassName, fullWidth, required, disabled } = this.props;
        return (
            <div className={cx(rowClassName)}>
                <FormControl
                    fullWidth={fullWidth}
                    required={required}
                    disabled={disabled}
                >
                    {this.renderSwitch()}
                    {this.renderErrorMessage()}
                </FormControl>
            </div>
        );
    }
}

export default withStyles(styles)(FGSwitcher);
