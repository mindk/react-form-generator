/**
 * DateTime Field component script class
 *
 * @package    Form Generator
 * @author     Dmytro Ieremenko <dieremenko@mindk.com>
 * @copyright  Copyright (c) 2010-2018 MindK (http://mindk.com). All rights reserved.
 * @license    http://mindk.com
 * @link       http://mindk.com
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Datetime from 'react-datetime';
import cx from 'classname';
import moment from 'moment';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import { FG_DATE_FORMAT, FG_TIME_FORMAT, FG_DATE_TIME_FORMAT } from 'Constants';
import { withStyles } from '@material-ui/core/styles';
import { DateTimeStyles } from '../styles';

class FGDateTime extends PureComponent {
    /**
     * Get Time Format
     *
     * @return {*}
     */
    get timeFormat() {
        const { timeFormat } = this.props;
        return timeFormat === false || timeFormat !== undefined
            ? timeFormat
            : FG_TIME_FORMAT;
    }

    /**
     * Get Date Format
     *
     * @return {*}
     */
    get dateFormat() {
        const { dateFormat } = this.props;
        return dateFormat === false || dateFormat !== undefined
            ? dateFormat
            : FG_DATE_FORMAT;
    }

    /**
     * @type {Object}
     */
    static propTypes = {
        name: PropTypes.string,
        label: PropTypes.string,
        meta: PropTypes.object,
        className: PropTypes.string,
        rowClassName: PropTypes.string,
        withLabel: PropTypes.bool,
        classes: PropTypes.object,
        error: PropTypes.string,
        fullWidth: PropTypes.bool,
        required: PropTypes.bool,
        readOnly: PropTypes.bool,
        placeholder: PropTypes.string,
        input: PropTypes.object,
        disableOnClickOutside: PropTypes.bool,
        dateFormat: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
        timeFormat: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
        dateTimeFormat: PropTypes.string,
        inputElement: PropTypes.bool,
        manual: PropTypes.bool,
        closeOnSelect: PropTypes.bool,
    };

    /**
     * @type {Object}
     */
    static contextTypes = {
        intl: PropTypes.object.isRequired,
    };

    state = {
        touched: false,
    };

    /**
     * @type {Object}
     */
    static defaultProps = {
        withLabel: true,
        fullWidth: true,
        disableOnClickOutside: false,
        dateFormat: FG_DATE_FORMAT,
        timeFormat: FG_TIME_FORMAT,
        dateTimeFormat: FG_DATE_TIME_FORMAT,
        inputElement: true,
        manual: true,
        closeOnSelect: false,
    };

    /**
     * Render Error Message
     *
     * @return {*}
     */
    renderErrorMessage = () => {
        const {
            meta: { error, submitFailed },
        } = this.props;
        const { formatMessage } = this.context.intl;
        const { touched } = this.state;
        const errorMessage = error
            ? (/validation.error.\w+/.test(error) ? formatMessage({ id: error }) : error)
            : '';
        return (
            <div>
                { (submitFailed || touched && !!error) &&
                    <FormHelperText
                        className="errors-list"
                        error={ !!error }
                    >
                        { errorMessage }
                    </FormHelperText>
                }
            </div>
        );
    };

    /**
     * Get Value
     *
     * @param value
     * @return {*}
     */
    getValue = value => {
        const { dateTimeFormat } = this.props;

        return moment.isMoment(value) ? value.format(dateTimeFormat) : value;
    };

    /**
     * Handle Change
     *
     * @param val
     */
    handleChange = val => {
        const { input: { onChange } } = this.props;
        onChange(this.getValue(val));
    };

    /**
     * Handle Focus
     *
     * @param e
     */
    handleFocus = (e) => {
        const { input: { onFocus } } = this.props;
        const { touched } = this.state;
        onFocus(e);
        if (!touched) {
            this.setState({ touched: true });
        }
    };

    /**
     * Render
     *
     * @return {*}
     */
    render() {
        const {
            name,
            rowClassName,
            fullWidth,
            required,
            withLabel,
            label,
            placeholder,
            readOnly,
            className,
            disableOnClickOutside,
            closeOnSelect,
            inputElement,
            manual,
            classes,
            input: { value },
        } = this.props;

        const labelText = withLabel && label ? label : '';
        const id = `id-${name}`;
        const { intl: { formatMessage } } = this.context;

        return (
            <div className={cx(classes.dateTimeWrapper, rowClassName)}>
                <FormControl
                    fullWidth={fullWidth}
                    className={classes.dateTimeFormControl}
                    disabled={readOnly}
                >
                    <InputLabel
                        required={required}
                        shrink={true}
                        className={cx(classes.dateTimeLabel, classes.label)}
                    >
                        {labelText}
                    </InputLabel>
                    <Datetime
                        timeFormat={this.timeFormat}
                        inputProps={{
                            id,
                            placeholder: placeholder || formatMessage({id: 'placeholder.datetime'}),
                            disabled: readOnly,
                            readOnly: !manual,
                        }}
                        className={cx(className)}
                        disableOnClickOutside={disableOnClickOutside}
                        dateFormat={this.dateFormat}
                        input={inputElement}
                        value={value}
                        closeOnSelect={closeOnSelect}
                        onFocus={this.handleFocus}
                        onChange={this.handleChange}
                    />
                    { this.renderErrorMessage() }
                </FormControl>
            </div>
        );
    }
}

export default withStyles(DateTimeStyles)(FGDateTime);
