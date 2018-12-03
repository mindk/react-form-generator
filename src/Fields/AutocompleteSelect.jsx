/**
 * Autocomplete Select Field component script class
 *
 * @package    Form Generator
 * @author     Dmytro Ieremenko <dieremenko@mindk.com>
 * @copyright  Copyright (c) 2010-2018 MindK (http://mindk.com). All rights reserved.
 * @license    http://mindk.com
 * @link       http://mindk.com
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import cx from 'classname';
import { AutocompleteSelectStyles } from '../styles';
import Select from 'react-select';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import CancelIcon from '@material-ui/icons/Cancel';
import FormHelperText from '@material-ui/core/FormHelperText/FormHelperText';
import classNames from 'classnames';

class FGAutocompleteSelect extends PureComponent {
    /**
     * @type {Object}
     */
    static propTypes = {
        name: PropTypes.string,
        readOnly: PropTypes.bool,
        input: PropTypes.any,
        label: PropTypes.string,
        meta: PropTypes.object,
        className: PropTypes.string,
        rowClassName: PropTypes.string,
        withLabel: PropTypes.bool,
        maxLength: PropTypes.number,
        classes: PropTypes.object,
        theme: PropTypes.object,
        placeholder: PropTypes.string,
        touched: PropTypes.bool,
        error: PropTypes.string,
        fullWidth: PropTypes.bool,
        required: PropTypes.bool,
        options: PropTypes.array,
        isMulti: PropTypes.bool,
        isSearchable: PropTypes.bool,
        isClearable: PropTypes.bool,
        autoFocus: PropTypes.bool,
        onInputChange: PropTypes.func.isRequired,
        reduxInputChangeFeedback: PropTypes.bool,
        onBlur: PropTypes.func,
    };

    /**
     * @type {Object}
     */
    static contextTypes = {
        intl: PropTypes.object.isRequired,
    };

    state = {
        touched: false
    };


    /**
     * @type {Object}
     */
    static defaultProps = {
        options: [],
        withLabel: false,
        fullWidth: true,
        readOnly: false,
        isMulti: false,
        isSearchable: true,
        autoFocus: false,
        isClearable: true,
        onBlur: () => {},
        reduxInputChangeFeedback: false
    };

//***********************************************************************************************************************
    Menu = props => {
        return (
            <Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
                {props.children}
            </Paper>
        );
    };

    MultiValue = props => {
        const { readOnly } = this.props;
        return (
            <Chip
                tabIndex={-1}
                label={props.children}
                className={cx(props.selectProps.classes.chip, {
                    [props.selectProps.classes.chipFocused]: props.isFocused,
                })}
                onDelete={props.removeProps.onClick}
                deleteIcon={<CancelIcon
                    style={{
                        display: readOnly ? 'none' : 'inline-block'
                    }}
                    {...props.removeProps}
                />}
            />
        );
    };

    /**
     * Option
     *
     * @param props
     * @return {*}
     * @constructor
     */
    Option = props => {
        const {
            selectProps: { classes },
            innerRef,
            isFocused,
            isSelected,
            innerProps,
            children,
        } = props;

        return (
            <MenuItem
                buttonRef={innerRef}
                selected={isFocused}
                component="div"
                classes={{
                    root: classes.paperItemRoot,
                    selected: classes.paperItemSelected,
                }}
                style={{
                    fontWeight: isSelected ? 500 : 400,
                }}
                {...innerProps}
            >
                {children}
            </MenuItem>
        );
    };

    /**
     * Input Component
     *
     * @return {*}
     * @constructor
     */
    InputComponent = ({ inputRef, ...props }) => <div ref={inputRef} {...props} />;

    /**
     * Placeholder
     *
     * @param props
     * @return {*}
     * @constructor
     */
    Placeholder = props => {
        const {
            selectProps: { classes },
            children,
            innerProps
        } = props;

        const { placeholder } = this.props;

        return (
            <Typography
                color="textSecondary"
                className={cx(classes.placeholder, 'autocomplete-placeholder')}
                {...innerProps}
            >
                {placeholder === undefined ? children : placeholder}
            </Typography>
        );
    };

    /**
     * No Options Message
     *
     * @return {*}
     * @constructor
     */
    NoOptionsMessage = props => {
        const { selectProps: { classes }, innerProps, children } = props;

        return (
            <Typography
                color="textSecondary"
                className={classes.noOptionsMessage}
                {...innerProps}
            >
                {children}
                { /* TODO: Here we can get some props for message without option like in Placeholder component */ }
            </Typography>
        );
    };

    /**
     * Control
     *
     * @param props
     * @return {*}
     * @constructor
     */
    Control = props => {
        const {
            label,
            touched,
            input: { value },
            meta: { error },
            withLabel,
            required,
        } = this.props;
        const labelText = withLabel && label ? label : undefined;

        const {
            selectProps: { textFieldProps, classes },
            innerRef,
            children,
            innerProps,
        } = props;

        const underlineClasses = classNames({
            [classes.underlineError]: error,
            [classes.underline]: true
        });

        return (
            <TextField
                fullWidth
                label={labelText}
                required={required}
                error={touched && !!error}
                classes={{
                    root: classes.autocompleteFormControl,
                }}
                InputLabelProps={{
                    error: touched && !!error,
                    shrink: !value ? undefined : true,
                    className: classes.autocompleteLabel,
                }}
                InputProps={{
                    inputComponent: this.InputComponent,
                    classes:{
                        root: classes.autocompleteInputRoot,
                        underline: underlineClasses
                    },
                    inputProps: {
                        className: cx(classes.input, classes.autocompleteInput),
                        inputRef: innerRef,
                        children,
                        ...innerProps,
                    },
                }}
                {...textFieldProps}
            />
        );
    };

    /**
     * Single Value
     *
     * @param props
     * @return {*}
     * @constructor
     */
    SingleValue = props => (
        <Typography
            className={cx(props.selectProps.classes.singleValue, 'autocomplete-single-value')} {...props.innerProps}
        >
            {props.children}
        </Typography>
    );

    /**
     * Value Container
     *
     * @param props
     * @return {*}
     * @constructor
     */
    ValueContainer = props => (
        <div
            className={cx(props.selectProps.classes.valueContainer, 'autocomplete-value-container')}
        >
            {props.children}
        </div>
    );
//***********************************************************************************************************************

    getComponents = () => ({
        Control: this.Control,
        Menu: this.Menu,
        MultiValue: this.MultiValue,
        NoOptionsMessage: this.NoOptionsMessage,
        Option: this.Option,
        Placeholder: this.Placeholder,
        SingleValue: this.SingleValue,
        ValueContainer: this.ValueContainer
    });

    /**
     * Handle Change
     *
     * @param value
     * @param options
     */
    handleChange = (value, options) => {
        const { action } = options;
        const { input: { onChange }, isMulti } = this.props;
        switch (action) {
            case 'select-option':
                if (!isMulti) {
                    onChange(value.value);
                } else {
                    onChange(value.map(val => val.value))
                }
                break;

            case 'pop-value':
            case 'clear':
                onChange(null);
                break;

            case 'remove-value':
                if (!isMulti) {
                    onChange(null);
                } else {
                    onChange(value.map(val => val.value))
                }
                break;
        }
    };

    handleBlur = () => {
        const { onBlur } = this.props;
        this.setState({ touched: true });

        onBlur();
    };

    /**
     * handleInputChange
     *
     * @param value
     * @param options
     */
    handleInputChange = (value, options) => {
        const {
            input: {
                // value: val,
                onChange
            },
            onInputChange,
            reduxInputChangeFeedback
        } = this.props;
        if (reduxInputChangeFeedback) {
            const { action } = options;
            switch (action) {
                case 'input-change':
                    onChange(value);
                    break;
            }
        }
        onInputChange(value, options);
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
        const { touched } = this.state;
        const { formatMessage } = this.context.intl;
        const errorMessage = (submitFailed || touched && error)
            ? (/validation.error.\w+/.test(error) ? formatMessage({ id: error }) : error)
            : '';

        return (
            <div>
                <FormHelperText
                    className="errors-list"
                    error={touched && !!error}
                >
                    {errorMessage}
                </FormHelperText>
            </div>
        );
    };

    render() {
        const {
            input: { value },
            classes,
            rowClassName,
            readOnly,
            options,
            isMulti,
            isSearchable,
            autoFocus,
            isClearable,
            reduxInputChangeFeedback,
        } = this.props;
        const val = !isMulti
            ? options.find(option => option.value === value)
            : options.filter(option => value.includes(option.value));

        const inputValue = !reduxInputChangeFeedback || val || isMulti ? undefined : value;

        return (
            <div className={cx(rowClassName, classes.root)}>
                <Select
                    components={this.getComponents()}
                    classes={classes}
                    onChange={this.handleChange}
                    value={val || null}
                    inputValue={inputValue}
                    options={options}
                    isMulti={isMulti}
                    isSearchable={isSearchable}
                    isDisabled={readOnly}
                    onInputChange={this.handleInputChange}
                    isClearable={isClearable}
                    autoFocus={autoFocus}
                    controlShouldRenderValue
                    onBlur={this.handleBlur}
                />
                {this.renderErrorMessage()}
            </div>
        );
    }
}

export default withStyles(AutocompleteSelectStyles)(FGAutocompleteSelect);
