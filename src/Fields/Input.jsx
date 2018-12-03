/**
 * Input Field component script class
 *
 * @package    Form Generator
 * @author     Dmytro Ieremenko <dieremenko@mindk.com>
 * @copyright  Copyright (c) 2010-2018 MindK (http://mindk.com). All rights reserved.
 * @license    http://mindk.com
 * @link       http://mindk.com
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CustomInput from 'Components/Theme/CustomInput/CustomInput';

export default class FGInput extends PureComponent {
    /**
     * @type {Object}
     */
    static propTypes = {
        name: PropTypes.string,
        idPrefix: PropTypes.string,
        readOnly: PropTypes.bool,
        input: PropTypes.any,
        label: PropTypes.string,
        type: PropTypes.string,
        meta: PropTypes.object,
        className: PropTypes.string,
        rowClassName: PropTypes.string,
        withLabel: PropTypes.bool,
        maxLength: PropTypes.number,
        classes: PropTypes.object,
        placeholder: PropTypes.string,
        touched: PropTypes.bool,
        error: PropTypes.string,
        fullWidth: PropTypes.bool,
        required: PropTypes.bool,
        autoComplete: PropTypes.bool,
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
        type: 'text',
        withLabel: false,
        fullWidth: true,
        readOnly: false,
        autoComplete: true,
        idPrefix: ''
    };

    render() {
        const {
            input,
            label,
            meta: { touched, error, submitFailed },
            withLabel,
            rowClassName,
            maxLength,
            type,
            placeholder,
            readOnly,
            fullWidth,
            required,
            autoComplete,
            name,
            idPrefix
        } = this.props;
        const { formatMessage } = this.context.intl;
        let errorMessage = (submitFailed || touched && error)
            ? (/validation.error.\w+/.test(error) ? formatMessage({ id: error }) : error)
            : '';
        const labelText = withLabel && label ? label : undefined;
        return (
            <div className={ rowClassName }>
                <CustomInput
                    labelText={labelText}
                    id={`id-${idPrefix}-${name}`}
                    labelProps={ {
                        disabled: readOnly,
                        disableAnimation: readOnly,
                        required: required
                    }}
                    formControlProps={{
                        fullWidth
                    }}
                    inputProps={{
                        type,
                        disabled: readOnly,
                        maxLength,
                        placeholder: placeholder ? formatMessage({ id: `field.${placeholder}.placeholder` }) : '',
                        ...input,
                        autoComplete: autoComplete ? 'on' : 'new-password'
                    }}
                    error={!!touched && !!error}
                    helpText={errorMessage}
                />
            </div>
        );
    }
}
