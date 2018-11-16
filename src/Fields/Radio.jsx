/**
 * Radio Field component script class
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
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import FormHelperText from '@material-ui/core/FormHelperText';
import FiberManualRecord from '@material-ui/icons/FiberManualRecord';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from 'Layouts/Layout/jss/material-dashboard-pro-react/customCheckboxRadioSwitch';

class FGRadio extends PureComponent {

    /**
     * @type {Object}
     */
    static propTypes = {
        name: PropTypes.string.isRequired,
        label: PropTypes.string,
        defaultValue: PropTypes.any,
        meta: PropTypes.object,
        className: PropTypes.string,
        rowClassName: PropTypes.string,
        withLabel: PropTypes.bool,
        classes: PropTypes.object,
        error: PropTypes.string,
        fullWidth: PropTypes.bool,
        required: PropTypes.bool,
        disabled: PropTypes.bool,
        input: PropTypes.object.isRequired,
        options: PropTypes.array,
        color: PropTypes.string,
        labelPlacement: PropTypes.oneOf(['start', 'end'])
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
        withLabel: true,
        fullWidth: true,
        disabled: false,
        options: [],
        multiple: false,
        color: 'primary',
        labelPlacement: 'start',
    };

    /**
     * Render Options
     *
     * @return {*}
     */
    renderOptions = () => {
        const {
            options,
            name,
            labelPlacement,
            color,
            classes,
            disabled,
            input: { value },
        } = this.props;
        let opt = {};
        const result = [];

        options.map(option => {
            opt = !option.value
                ? { value: option, title: option }
                : option;
            result.push(
                <FormControlLabel
                    key={`select-${name}-option-${opt.value}`}
                    label={opt.title}
                    labelplacement={labelPlacement}
                    classes={{
                        label: classes.label
                    }}
                    disabled={disabled}
                    control={
                        <Radio
                            checked={value === opt.value}
                            value={opt.value}
                            color={color}
                            classes={{
                                checked: classes.radio,
                                disabled: classes.disabledCheckboxAndRadio,
                            }}
                            icon={<FiberManualRecord className={classes.radioUnchecked}/>}
                            checkedIcon={<FiberManualRecord className={classes.radioChecked}/>}
                        />
                    }
                />
            );
        });

        return result;
    };

    /**
     * Component Did Mount
     */
    componentDidMount() {
        const { defaultValue } = this.props;
        this.defaultEmptyTitle = 'please_select';
        this.setState({
            value: defaultValue ? defaultValue : ''
        });
    }

    /**
     * Render Error Message
     *
     * @return {*}
     */
    renderErrorMessage = () => {
        const { meta: { error, touched, submitFailed } } = this.props;
        const { formatMessage } = this.context.intl;
        let errorMessage = !!submitFailed || !!touched && !!error
            ? (/validation.error.\w+/.test(error) ? formatMessage({ id: error }) : error)
            : '';

        return (
            <div>
                { touched && error &&
                    <FormHelperText
                        className="errors-list"
                        error={!!touched && !!error}
                    >
                        {errorMessage}
                    </FormHelperText>
                }
            </div>
        );
    };

    /**
     * Render
     *
     * @return {*}
     */
    render() {
        const {
            name,
            label,
            withLabel,
            rowClassName,
            className,
            fullWidth,
            input: {value, onChange},
            required,
            disabled,
        } = this.props;
        const labelText = withLabel && label ? label : '';
        const id = `select-${name}`;

        return (
            <div className={ rowClassName }>
                <FormControl
                    disabled={disabled}
                    fullWidth={fullWidth}
                >
                    <FormLabel
                        component="legend"
                        required={required}
                    >{labelText}</FormLabel>
                    <RadioGroup
                        id={id}
                        aria-label={name}
                        name={name}
                        className={cx(className)}
                        value={value}
                        onChange={onChange}
                    >
                        {this.renderOptions()}
                    </RadioGroup>
                    {this.renderErrorMessage()}
                </FormControl>
            </div>
        );
    }
}

export default withStyles(styles)(FGRadio);
