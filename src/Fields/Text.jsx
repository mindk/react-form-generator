/**
 * Text Field component script class
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
import FormControl from '@material-ui/core/FormControl';

export default class FGText extends PureComponent {
    /**
     * @type {Object}
     */
    static propTypes = {
        input: PropTypes.object,
        label: PropTypes.string,
        meta: PropTypes.object,
        rowClassName: PropTypes.string,
        withLabel: PropTypes.bool,
        rows: PropTypes.number,
        type: PropTypes.string,
        placeholder: PropTypes.string,
        fullWidth: PropTypes.bool,
        required: PropTypes.bool,
        readOnly: PropTypes.bool,
        maxLength: PropTypes.number,
        showCounter: PropTypes.bool
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
        input: {},
        label: '',
        meta: {},
        rowClassName: '',
        placeholder: '',
        type: 'text',
        withLabel: false,
        fullWidth: true,
        rows: 3,
        required: false,
        readOnly: false,
        maxLength: -1,
        showCounter: false
    };

    /**
     * Render
     *
     * @return {*}
     */
    render() {
        const {
            input,
            label,
            meta: { touched, error, submitFailed },
            withLabel,
            rowClassName,
            rows,
            type,
            placeholder,
            fullWidth,
            required,
            readOnly,
            maxLength,
            showCounter
        } = this.props;
        const { intl: { formatMessage } } = this.context;
        const errorMessage = submitFailed || touched && error
            ? formatMessage({ id: error })
            : '';
        const labelText = withLabel && label ? label : '';
        return (
            <div className={ rowClassName }>
                <FormControl
                    fullWidth={fullWidth}
                >
                    <CustomInput
                        labelText={labelText}
                        maxLength={maxLength}
                        showCounter={showCounter}
                        labelProps={ {
                            disabled: readOnly,
                            disableAnimation: readOnly,
                            required,
                            shrink:true
                        }}
                        formControlProps={{
                            fullWidth
                        }}
                        inputProps={{
                            type,
                            disabled: readOnly,
                            multiline: true,
                            maxLength,
                            rows,
                            className: 'input-textarea',
                            placeholder: placeholder ? formatMessage({ id: `field.${placeholder}.placeholder` }) : '',
                            ...input
                        }}
                        error={!!touched && !!error}
                        helpText={errorMessage}
                    />
                </FormControl>
            </div>
        );
    }
}
