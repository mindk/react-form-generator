/**
 * ColorCircles Field component script class
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
import { CirclePicker } from 'react-color';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import { withStyles } from '@material-ui/core/styles';
import { DateTimeStyles } from '../styles';

class FGColorCircles extends PureComponent {

    /**
     * @type {Object}
     */
    static propTypes = {
        name: PropTypes.string.isRequired,
        label: PropTypes.string,
        defaultValue: PropTypes.string,
        meta: PropTypes.object,
        className: PropTypes.string,
        rowClassName: PropTypes.string,
        withLabel: PropTypes.bool,
        classes: PropTypes.object,
        error: PropTypes.string,
        fullWidth: PropTypes.bool,
        required: PropTypes.bool,
        readOnly: PropTypes.bool,
        input: PropTypes.object.isRequired,
        color: PropTypes.string,
        colors: PropTypes.array,
        circleSize: PropTypes.number,
        circleSpacing: PropTypes.number,
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
        fullWidth: false,
        readOnly: false,
        options: [],
        colors: [],
        circleSize: 28,
        circleSpacing: 14,
    };

    /**
     * Render Error Message
     *
     * @return {*}
     */
    renderErrorMessage = () => {
        const { meta: { error, submitFailed } } = this.props;
        const { touched } = this.state;

        const { formatMessage } = this.context.intl;
        let errorMessage = !!submitFailed || touched && !!error
            ? (/validation.error.\w+/.test(error) ? formatMessage({ id: error }) : error)
            : '';

        return (
            <div>
                { touched && error &&
                    <FormHelperText
                        className="errors-list"
                        error={touched && !!error}
                    >
                        { errorMessage }
                    </FormHelperText>
                }
            </div>
        );
    };

    /**
     * On Change
     *
     * @param value
     */
    handleChange = (value) => {
        const { input: { onChange } } = this.props;
        this.setState({
            background: value.hex,
            touched: true,
        });

        onChange(value.hex);
    };

    /**
     * Render
     *
     * @return {*}
     */
    render() {
        const {
            label,
            withLabel,
            rowClassName,
            className,
            required,
            readOnly,
            name,
            input: { value },
            defaultValue,
            colors,
            circleSize,
            circleSpacing,
            classes,
        } = this.props;

        const labelText = withLabel && label ? label : '';
        const id = `id-${name}`;
        const hex = value ? value : defaultValue;

        return (
            <div className={rowClassName}>
                <InputLabel
                    required={required}
                    disabled={readOnly}
                    disableAnimation={false}
                    shrink={true}
                    htmlFor={id}
                    className={classes.label}
                >
                    {labelText}
                </InputLabel>
                <CirclePicker
                    colors={colors}
                    color={hex}
                    circleSize={circleSize}
                    circleSpacing={circleSpacing}
                    onChangeComplete={this.handleChange}
                    className={cx(className)}
                />
                {this.renderErrorMessage()}
            </div>
        );
    }
}

export default withStyles(DateTimeStyles)(FGColorCircles);
