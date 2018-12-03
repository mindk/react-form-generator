/**
 * Form generator component script class
 *
 * @package    Layouts
 * @author     Dmytro Ieremenko <dieremenko@mindk.com>
 * @copyright  Copyright (c) 2010-2018 MindK (http://mindk.com). All rights reserved.
 * @license    http://mindk.com
 * @link       http://mindk.com
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Field, reset } from 'redux-form';
import cx from 'classname';
import { withStyles } from '@material-ui/core/styles';
import Button from 'Components/Theme/CustomButtons/Button';
import GridContainer from 'Components/Theme/Grid/GridContainer';
import ItemGrid from 'Components/Theme/Grid/GridItem';
import ClearIcon from '@material-ui/icons/Clear';
import { FormattedMessage } from 'react-intl';
import { FormStyles } from './styles';

//Form components
import FGHidden from './Fields/Hidden';
import FGInput from './Fields/Input';
import FGAutocompleteSelect from './Fields/AutocompleteSelect';
import FGText from './Fields/Text';
import FGCheck from './Fields/Check';
import FGSwitcher from './Fields/Switcher';
import FGSelect from './Fields/Select';
import FGRadio from './Fields/Radio';
import FGDateTime from './Fields/DateTime';
import FGDate from './Fields/Date';
import FGTime from './Fields/Time';
import FGImage from './Fields/Image';
import FGColor from './Fields/Color';
import FGColorCircles from './Fields/ColorCircles';

import { FG_EMPTY } from 'Constants';
import {
    required,
    email,
    url,
    number,
    confirmPassword,
    checkRequired,
    autocompleteSelectRequired,
    years,
    money,
    gpa
} from './Validators';
import { GridPropsType } from 'Types';

export class FormGenerator extends PureComponent {
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
        submitting: PropTypes.bool.isRequired,
        valid: PropTypes.bool.isRequired,
        anyTouched: PropTypes.bool.isRequired,
        submitButtonProps: PropTypes.object,
        gridProps: GridPropsType,
        fieldsets: PropTypes.array,
        formOptions: PropTypes.object,
        formValues: PropTypes.object,
        handleRemoveField: PropTypes.func,
        clearRemovedFields: PropTypes.bool,
        enabledSubmit: PropTypes.func,
    };

    /**
     * All supported field types
     *
     * @type {string[]}
     */
    static types = [
        'hidden',
        'input',
        'autocompleteSelect',
        'text',
        'check',
        'switcher',
        'select',
        'radio',
        'datetime',
        'date',
        'time',
        'image',
        'color',
        'colorCircles',
        'content',
    ];

    /**
     * Fields
     *
     * @type {{}}
     */
    fields = {};

    state = {
        removedFields: []
    };

    /**
     * @type {Object}
     */
    static defaultProps = {
        readonly: false,
        submitButtonProps: {
            title: 'save',
            className: ''
        },
        formOptions: {},
        fieldsets: [],
        clearRemovedFields: false,
    };

    /**
     * @type {{required}}
     */
    static validators = {
        required,
        url,
        checkRequired,
        autocompleteSelectRequired,
        number,
        email,
        confirmPassword,
        money,
        years,
        gpa
    };

    componentDidUpdate() {
        const { clearRemovedFields, valid, enabledSubmit } = this.props;
        if (clearRemovedFields) {
            this.setState({ removedFields: [] });
        }

        enabledSubmit(valid);
    }

    /**
     * @type {Object}
     */
    static contextTypes = {
        intl: PropTypes.object.isRequired,
    };

    /**
     * Build Validators
     *
     * @param options
     * @return {Array}
     */
    buildValidators = (options) => {
        const result = [];
        const { isRequired, options: { validate = [] }, type } = options;
        const { validators } = this.constructor;

        if (isRequired) {
            switch (type) {
                case 'autocompleteSelect':
                    result.push(validators.autocompleteSelectRequired);
                    break;

                case 'check':
                    result.push(validators.checkRequired);
                    break;

                default:
                    result.push(validators.required);
            }
        }

        for (let name of validate) {
            if (validators[name]) {
                result.push(validators[name]);
            }
        }

        return result;
    };

    /**
     * Renderers
     *
     * @return {*}
     */
    renderers = {

        /**
         * Hidden Input renderer
         *
         * @param input
         * @param options
         * @return {*}
         */
        hidden: ({input, options}) => {
            const {
                name,
            } = options;
            return (
                <FGHidden
                    name={name}
                    input={input}
                />
            );
        },

        /**
         * Input renderer
         *
         * @param meta
         * @param input
         * @param options
         * @return {*}
         */
        input: ({meta, input, options}) => {
            const {
                title,
                readonly,
                options: { maxLength, type, autoComplete, idPrefix },
                isRequired,
                name,
            } = options;
            return (
                <FGInput
                    label={title}
                    name={name}
                    withLabel={!!title}
                    readOnly={readonly}
                    maxLength={maxLength}
                    meta={meta}
                    required={isRequired}
                    type={type}
                    autoComplete={!!autoComplete}
                    input={input}
                    idPrefix={idPrefix}
                />
            );
        },

        /**
         * Text renderer
         *
         * @param meta
         * @param input
         * @param options
         * @return {*}
         */
        text: ({meta, input, options}) => {
            const {
                title,
                readonly,
                options: { maxLength, type, autoComplete = true },
                isRequired,
                name,
            } = options;
            return (
                <FGText
                    className="fg-text"
                    label={title}
                    name={name}
                    withLabel={!!title}
                    readOnly={readonly}
                    maxLength={maxLength}
                    meta={meta}
                    required={isRequired}
                    autoComplete={autoComplete}
                    type={type}
                    input={input}
                />
            );
        },

        /**
         * Check renderer
         *
         * @param meta
         * @param input
         * @param options
         * @return {*}
         */
        check: ({meta, input, options}) => {
            const {
                name,
                title,
                value,
                readonly,
                isRequired,
                defaultValue,
                options: { rowClassName, rootClassName }
            } = options;

            return (
                <FGCheck
                    className="fg-check"
                    rowClassName={rowClassName}
                    rootClassName={rootClassName}
                    name={ name }
                    label={ title }
                    value={ options.options.value }
                    withLabel={ !!title }
                    disabled={ readonly }
                    required={ isRequired }
                    meta={ meta }
                    input={ input }
                    checked={
                        value === undefined
                            ? !!defaultValue
                            : !!value
                    }
                />
            );
        },

        /**
         * Switch renderer
         *
         * @param meta
         * @param input
         * @param options
         * @return {*}
         */
        switcher: ({meta, input, options}) => {
            const {
                name,
                title,
                value,
                readonly,
                isRequired,
                defaultValue,
            } = options;

            return (
                <FGSwitcher
                    className="fg-switcher"
                    name={ name }
                    label={ title }
                    value={ options.options.value }
                    withLabel={ !!title }
                    disabled={ readonly }
                    required={ isRequired }
                    meta={ meta }
                    input={ input }
                    checked={
                        value === undefined
                            ? !!defaultValue
                            : !!value
                    }
                />
            );
        },

        /**
         * Select renderer
         *
         * @param meta
         * @param input
         * @param options
         * @return {*}
         */
        select: ({meta, input, options}) => {
            const {
                name,
                title,
                value,
                readonly,
                isRequired,
                defaultValue,
                options: { list, showEmpty, emptyTitle }
            } = options;

            return (
                <FGSelect
                    className="fg-select"
                    name={name}
                    label={title}
                    value={value}
                    withLabel={!!title}
                    readOnly={readonly}
                    required={isRequired}
                    meta={meta}
                    options={list}
                    defaultValue={defaultValue}
                    showEmpty={showEmpty}
                    emptyTitle={emptyTitle}
                    input={input}
                />
            );
        },

        /**
         * Radio renderer
         *
         * @param meta
         * @param input
         * @param options
         * @return {*}
         */
        radio: ({meta, input, options}) => {
            const {
                name,
                title,
                value,
                readonly,
                isRequired,
                defaultValue,
                options: {list, showEmpty, emptyTitle}
            } = options;

            return (
                <FGRadio
                    className="fg-radio"
                    name={ name }
                    label={ title }
                    value={ value }
                    withLabel={ !!title }
                    disabled={ readonly }
                    required={ isRequired }
                    meta={ meta }
                    options={ list }
                    defaultValue={ defaultValue }
                    showEmpty={ showEmpty }
                    emptyTitle={ emptyTitle }
                    input={ input }
                />
            );
        },

        /**
         * Date Time Renderer
         *
         * @param Component
         * @param meta
         * @param input
         * @param options
         * @return {*}
         */
        _dateTime: (Component, meta, input, options) => {
            const {
                name,
                title,
                value,
                readonly,
                isRequired,
                options: { placeholder, manual, inputElement, closeOnSelect }
            } = options;

            return (
                <Component
                    className="fg-date"
                    name={name}
                    label={title}
                    value={value}
                    withLabel={!!title}
                    readOnly={readonly}
                    required={isRequired}
                    placeholder={placeholder}
                    inputElement={inputElement === undefined ? true : inputElement}
                    manual={manual === undefined ? true : manual}
                    meta={meta}
                    input={input}
                    closeOnSelect={closeOnSelect}
                />
            );
        },

        /**
         * DateTime renderer
         *
         * @param meta
         * @param input
         * @param options
         * @return {*}
         */
        datetime: ({meta, input, options}) => {
            return this.renderers._dateTime(FGDateTime, meta, input, options);
        },

        /**
         * Date renderer
         *
         * @param meta
         * @param input
         * @param options
         * @return {*}
         */
        date: ({meta, input, options}) => {
            return this.renderers._dateTime(FGDate, meta, input, options);
        },

        /**
         * Time renderer
         *
         * @param meta
         * @param input
         * @param options
         * @return {*}
         */
        time: ({meta, input, options}) => {
            return this.renderers._dateTime(FGTime, meta, input, options);
        },

        /**
         * Image renderer
         *
         * @param meta
         * @param input
         * @param options
         * @return {*}
         */
        image: ({meta, input, options}) => {
            const { formValues } = this.props;
            const {
                name,
                title,
                readonly,
                isRequired,
                options: { avatar, label = {}, buttons = {} }
            } = options;
            let src = formValues ? formValues[name] : undefined;

            return (
                <FGImage
                    className="fg-image"
                    name={name}
                    label={title}
                    labelOptions={label}
                    buttonsOptions={buttons}
                    withLabel={!!title}
                    readOnly={readonly}
                    required={isRequired}
                    avatar={!!avatar}
                    meta={meta}
                    input={input}
                    value={src}
                />
            );
        },

        /**
         * Color renderer
         *
         * @param meta
         * @param input
         * @param options
         * @return {*}
         */
        color: ({meta, input, options}) => {
            const {
                name,
                title,
                readonly,
                isRequired,
                defaultValue,
                options: { placeholder }
            } = options;

            return (
                <FGColor
                    className="fg-color"
                    name={ name }
                    label={ title }
                    withLabel={ !!title }
                    readOnly={ readonly }
                    required={ isRequired }
                    defaultValue={ defaultValue }
                    placeholder={ placeholder }
                    meta={ meta }
                    input={ input }
                />
            );
        },

        /**
         * Color Circles renderer
         *
         * @param meta
         * @param input
         * @param options
         * @return {*}
         */
        colorcircles: ({meta, input, options}) => {
            const {
                name,
                title,
                readonly,
                isRequired,
                defaultValue,
                options: { list }
            } = options;

            return (
                <FGColorCircles
                    className="fg-color-circles"
                    name={name}
                    label={title}
                    withLabel={!!title}
                    readOnly={readonly}
                    required={isRequired}
                    defaultValue={defaultValue}
                    colors={list}
                    meta={meta}
                    input={input}
                />
            );
        },

        /**
         * autocompleteSelect renderer
         *
         * @param meta
         * @param input
         * @param options
         * @return {*}
         */
        autocompleteselect: ({meta, input, options}) => {
            const {
                title,
                readonly,
                options: {
                    maxLength,
                    type,
                    autoComplete,
                    multi = false,
                    onInputChange,
                    list,
                    placeholder = ''
                },
                isRequired,
                name
            } = options;
            return (
                <FGAutocompleteSelect
                    label={title}
                    name={name}
                    withLabel={!!title}
                    readOnly={readonly}
                    maxLength={maxLength}
                    meta={meta}
                    required={isRequired}
                    type={type}
                    autoComplete={!!autoComplete}
                    input={input}
                    isMulti={multi}
                    onInputChange={onInputChange}
                    options={list}
                    placeholder={placeholder}
                />
            );
        },
    };

    /**
     * Build Fields
     */
    buildFields = () => {
        const { options } = this.props;
        const { types } = this.constructor;
        let result = {};
        let fieldSet;
        if (options && options.length) {
            options.map(option => {
                if (types.includes(option.type)) {
                    fieldSet = !option.fieldSet ? FG_EMPTY : option.fieldSet;
                    if (!result[fieldSet]) {
                        result[fieldSet] = [];
                    }
                    result[fieldSet].push(option);
                }
            });
        }

        this.fields = result;
    };

    /**
     * Render Column
     *
     * @param column
     * @return {Array}
     */
    renderColumn = column => {
        const { fieldsets } = this.props;
        const sets = fieldsets.filter(fieldSet => fieldSet.column === column);
        const fieldSetNames = sets.map(fieldSet => fieldSet.title);
        const result = [];
        for (let fieldSet in this.fields) {
            if (this.fields.hasOwnProperty(fieldSet) && fieldSetNames.includes(fieldSet)) {
                result.push(this.renderFieldSet(fieldSet));
            }
        }

        return result;
    };

    /**
     * Render Grid
     *
     * @param columns
     * @return {Array}
     */
    renderGrid = (columns) => {
        const result = [];
        for (let i = 1; i <= columns; i++) {
            result.push(
                <ItemGrid
                    key={`item-grid-${i}`}
                    xs={12 / columns}
                >
                    {this.renderColumn(i)}
                </ItemGrid>
            );
        }

        return result;
    };

    /**
     * Render Grid Container
     *
     * @return {*}
     */
    renderGridContainer = () => {
        const { formOptions: { columns = 1, spacing = 24 } } = this.props;
        this.buildFields();
        const children = columns > 1
            ? this.renderGrid(columns)
            : (
                <ItemGrid
                    xs={12}
                >
                    {this.renderFieldSets()}
                </ItemGrid>
            );
        return (
            <GridContainer
                spacing={spacing}
            >
                {children}
            </GridContainer>
        );
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
        const emptyFieldSet = this.fields[FG_EMPTY];
        return emptyFieldSet
            ? this.renderFields(emptyFieldSet)
            : '';
    };

    /**
     * Render FieldSet
     *
     * @param fieldSet
     * @return {*}
     */
    renderFieldSet = (fieldSet) => {
        const { classes, fieldsets } = this.props;
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
                <div className="fieldset-content">
                    {this.renderFields(this.fields[fieldSet])}
                </div>
            </div>
        );
    };

    /**
     * Render Field
     *
     * @param {object} options
     * @param {function} renderer
     * @param {array} validators
     * @return {*}
     */
    renderField = (options, renderer, validators) => {
        const { removable = false } = options;
        const { removedFields } = this.state;
        if (removedFields.includes(options.name)) {
            return null;
        }
        const field = (
            <Field
                name={options.name}
                options={options}
                component={renderer}
                label={options.title}
                validate={validators}
            />
        );

        return removable ? (
            <React.Fragment>
                {field}
                {this.renderRemoveButton(options.name)}
            </React.Fragment>
        ) : field;
    };

    renderRemoveButton = name => {
        const { classes } = this.props;

        return (
            <span className={classes.clearButton}>
                <ClearIcon
                    onClick={
                        (e) => {
                            this.handleRemoveField(e, name)
                        }
                    }
                />
            </span>
        )
    };

    handleRemoveField = (e, name) => {
        const { handleRemoveField } = this.props;
        const { removedFields } = this.state;
        this.setState({ removedFields });

        this.forceUpdate();

        handleRemoveField(e, name);
    };

    /**
     * Render Fields
     *
     * @param fields
     * @return {Array}
     */
    renderFields = (fields) => {
        const { renderers } = this;
        const { classes } = this.props;
        let result = [];
        let renderer, type, validators;
        for (let field of fields) {
            type = field.type.toLowerCase();
            if (type === 'content' && field.options.component && typeof field.options.component === 'function') {
                result.push(
                    <div key={`field-${field.name}`}>
                        {field.options.component()}
                    </div>
                );
            } else {
                renderer = renderers[type];
                if (renderer && typeof renderer === 'function') {
                    validators = this.buildValidators(field);
                    const { type, removable = false } = field.options;
                    const className = cx({ 'hidden': field.type === 'hidden'});
                    const clearClass = removable ? classes.fieldWrapperWithClear : '';
                    result.push(
                        <div key={`field-${field.name}`} className={cx('field-wrapper', className, clearClass)} >
                            {this.renderField(field, renderer, validators)}
                        </div>
                    );
                }
            }
        }

        return result;
    };

    /**
     * Render Button
     *
     * @return {*}
     */
    renderButton = () => {
        const {
            pristine,
            submitting,
            submitButtonProps: {
                title = 'save',
                className,
                noRender = false
            }
        } = this.props;

        return !noRender && (
            <div className={className}>
                <Button
                    type="submit"
                    color="primary"
                    disabled={pristine || submitting}
                >
                    <FormattedMessage id={`button.${title}`} />
                </Button>
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
            classes,
            handleSubmit,
            onSubmit,
            form,
            formOptions: {
                autoComplete = true,
            }
        } = this.props;
        return (
            <form
                id={form}
                onSubmit={handleSubmit(onSubmit)}
                className={cx(classes.form, classes.formGenForm)}
                noValidate
                encType="multipart/form-data"
                autoComplete={autoComplete ? 'on' : 'off'}
            >
                {this.renderGridContainer()}
                {this.renderButton()}
            </form>
        );
    }
}
export default withStyles(FormStyles)(FormGenerator);
