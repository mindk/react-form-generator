/**
 * Form container script
 *
 * @package    Component wrapper
 * @author     Dmytro Ieremenko <dieremenko@mindk.com>
 * @copyright  Copyright (c) 2010-2018 MindK (http://mindk.com). All rights reserved.
 * @license    http://mindk.com
 * @link       http://mindk.com
 */

import React from 'react';
import { connect } from 'react-redux';
import { getFormValues, reduxForm } from 'redux-form';
import FormGenerator from './FormGenerator.jsx';
import FormGridGenerator from './FormGridGenerator';

/**
 * Render Component
 *
 * @param props
 * @return {*}
 */
const renderComponent = props => {
    const { type } = props;
    let result;
    switch (type) {
        case 'grid':
            result = (
                <FormGridGenerator {...props} />
            );
            break;

        default:
            result = (
                <FormGenerator {...props}/>
            );
    }

    return result;
};

/**
 * Connect to Redux
 */
export default connect(
    (store, props) => {
        const {
            form,
            destroyOnUnmount = false,
            options,
            keepDirtyOnReinitialize = false,
        } = props;
        let initialValues = {};
        if (options) {
            options.map(option => {
                if (option.value !== undefined && option.value !== null) {
                    initialValues[option.name] = option.value;
                } else if (option.defaultValue !== undefined && option.defaultValue !== null) {
                    initialValues[option.name] = option.defaultValue;
                }
            });
        }

        return {
            form,
            destroyOnUnmount,
            initialValues,
            formValues: getFormValues(form)(store),
            keepDirtyOnReinitialize,
            enableReinitialize: true, // Don't delete or set false. True is important value
            asyncBlurFields: [] // this seems to prevent the error
        };
    }
)(reduxForm()(renderComponent));
