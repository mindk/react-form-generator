/**
 * Form grid generator component script class
 *
 * @package    Layouts
 * @author     Dmytro Ieremenko <dieremenko@mindk.com>
 * @copyright  Copyright (c) 2010-2018 MindK (http://mindk.com). All rights reserved.
 * @license    http://mindk.com
 * @link       http://mindk.com
 */

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classname';
import { withStyles } from '@material-ui/core/styles';
import GridContainer from 'Components/Theme/Grid/GridContainer';
import GridItem from 'Components/Theme/Grid/GridItem';
import { FormGenerator } from './FormGenerator';
import { FormStyles } from './styles';
import { FG_EMPTY } from 'Constants';
import { GridPropsType } from 'Types';

class FormGridGenerator extends FormGenerator {
    /**
     * @type {Object}
     */
    static propTypes = {
        readonly: PropTypes.bool,
        form: PropTypes.string.isRequired,
        options: PropTypes.array,
        data: PropTypes.object,
        classes: PropTypes.object,
        initialValues: PropTypes.object,
        onSubmit: PropTypes.func,
        handleSubmit: PropTypes.func.isRequired,
        pristine: PropTypes.bool,
        submitting: PropTypes.bool,
        submitButtonProps: PropTypes.object,
        gridProps: GridPropsType,
        fieldsets: PropTypes.array,
        formOptions: PropTypes.object,
        formValues: PropTypes.object,
    };

    /**
     * @type {Object}
     */
    static contextTypes = {
        intl: PropTypes.object.isRequired,
    };

    /**
     * Render FieldSets
     *
     * @param includeEmpty
     * @return {Array}
     */
    renderFieldSets = (includeEmpty = true) => {
        let result = [];
        for (let fieldSet in this.fields) {
            if (this.fields.hasOwnProperty(fieldSet) && fieldSet !== FG_EMPTY) {
                result.push(this.renderFieldSet(fieldSet));
            }
        }

        if (includeEmpty && this.fields[FG_EMPTY]) {
            result.push(this.renderEmptyFieldSet());
        }

        return result;
    };

    /**
     * Render Empty FieldSet
     *
     * @return {*}
     */
    renderEmptyFieldSet = () => {
        const {
            formOptions: {
                spacing = 24
            }
        } = this.props;
        const emptyFieldSet = this.fields[FG_EMPTY];
        if  (!emptyFieldSet) {
            return '';
        }

        return (
            <GridContainer
                key={`row-${FG_EMPTY}`}
                spacing={spacing}
            >
                {this.renderFields(emptyFieldSet)}
            </GridContainer>
        );
    };

    /**
     * Render FieldSet
     *
     * @param fieldSet
     * @return {*}
     */
    renderFieldSet = fieldSet => {
        const {
            classes,
            fieldsets,
            formOptions: {
                spacing = 24
            }
        } = this.props;
        const options = fieldsets.find(fieldset => fieldset.title === fieldSet);

        return (
            <div
                id={`fieldset-${fieldSet}`}
                className="fieldset-wrapper"
                key={fieldSet}
            >
                <div className={cx(
                    'fieldset-label',
                    options.hidden ?  classes.hide : ''
                )}>{fieldSet}</div>
                <GridContainer
                    spacing={spacing}
                >
                    {this.renderFields(this.fields[fieldSet])}
                </GridContainer>
            </div>
        );
    };

    /**
     * Render Fields
     *
     * @param fields
     * @return {Array}
     */
    renderFields = fields => {
        const { renderers } = this;
        const {
            classes,
            formOptions: {
                grid = {},
            },
            submitButtonProps: {
                sameRowWithFields = false
            }
        } = this.props;
        const { removedFields } = this.state;
        let result = [];
        let renderer, type, validators;
        for (let field of fields) {
            type = field.type.toLowerCase();
            const { options: { grid: gridItemOptions = {} }, removable = false } = field;
            if (type === 'content' && field.options.component && typeof field.options.component === 'function') {
                result.push(
                    <GridItem
                        key={`grid-item-field-${field.name}`}
                        {...{...grid, ...gridItemOptions}}
                    >
                        <div key={`field-${field.name}`}>
                            {field.options.component()}
                        </div>
                    </GridItem>
                );
            } else {
                renderer = renderers[type];
                if (renderer && typeof renderer === 'function') {
                    validators = this.buildValidators(field);
                    const { type } = field.options;
                    const className = cx({ 'hidden': field.type === 'hidden'});
                    const clearClass = removable ? classes.fieldWrapperWithClear : '';
                    result.push(
                        <GridItem
                            className={cx(className, removedFields.includes(field.name) ? classes.hide : '')}
                            key={`field-${field.name}`}
                            {...grid}
                        >
                            <div className={cx('field-wrapper', className, clearClass)} >
                                {this.renderField(field, renderer, validators)}
                            </div>
                        </GridItem>
                    );
                }
            }
        }

        if (sameRowWithFields) {
            result.push(
                <GridItem
                    key="submit-button"
                    {...grid}
                >
                    {this.renderButton()}
                </GridItem>
            );
        }

        return result;
    };

    /**
     * Render
     *
     * @return {*}
     */
    render() {
        const {
            classes,
            handleSubmit,
            onSubmit,
            form,
            formOptions: {
                autoComplete = true,
            },
            submitButtonProps: {
                sameRowWithFields = false
            }
        } = this.props;
        this.buildFields();
        return (
            <form
                id={form}
                onSubmit={handleSubmit(onSubmit)}
                className={cx(classes.form, classes.formGenForm)}
                noValidate
                encType="multipart/form-data"
                autoComplete={autoComplete ? 'on' : 'off'}
            >
                {this.renderFieldSets()}
                {!sameRowWithFields && this.renderButton()}
            </form>
        );
    }
}

export default withStyles(FormStyles)(FormGridGenerator);
