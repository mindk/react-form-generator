/**
 * Color Field component script class
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
import ColorPicker from 'material-ui-color-picker';
import FormHelperText from '@material-ui/core/FormHelperText';

export default class FGColor extends PureComponent {

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
        placeholder: PropTypes.string,
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
            input: { onChange },
            required,
            readOnly,
            name,
            defaultValue,
            placeholder,
        } = this.props;
        const { touched } = this.state;
        const labelText = withLabel && label ? label : '';

        return (
            <div className={ rowClassName }>
                <ColorPicker
                    name={ name }
                    className={ cx(className) }
                    onChange={ onChange }
                    defaultValue={ defaultValue }
                    floatingLabelText={ labelText }
                    placeholder={ placeholder }
                    TextFieldProps={{
                        readOnly,
                        required,
                        onBlur: () => {
                            if (!touched) {
                                this.setState({ touched: true });
                            }
                        }
                    }}
                />
                { this.renderErrorMessage() }
            </div>
        );
    }
}
