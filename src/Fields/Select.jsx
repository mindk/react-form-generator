/**
 * Select Field component script class
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
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import { withStyles } from '@material-ui/core/styles';
import styles from 'Layouts/Layout/jss/material-dashboard-pro-react/customSelectStyle';

class FGSelect extends PureComponent {

    /**
     * Constructor
     *
     * @param props
     */
    constructor(props) {
        super(props);
        this.defaultEmptyTitle = 'please_select';
    }

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
        readOnly: PropTypes.bool,
        input: PropTypes.object.isRequired,
        options: PropTypes.array,
        multiple: PropTypes.bool,
        showEmpty: PropTypes.bool,
        emptyTitle: PropTypes.any,
        value: PropTypes.any,
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
        readOnly: false,
        options: [],
        multiple: false,
        showEmpty: false,
        emptyTitle: '',
    };

    /**
     * Render Options
     *
     * @return {*}
     */
    renderOptions = () => {
        const {
            options = [],
            name,
            showEmpty,
            emptyTitle,
            classes,
            value,
        } = this.props;
        let opt = {};
        const { formatMessage } = this.context.intl;
        const result = [];
        if (showEmpty) {
            const empty = emptyTitle ? emptyTitle : formatMessage({id: `field.select.${this.defaultEmptyTitle}`});
            result.push(
                <MenuItem value="" key={`select-${name}-option-empty`}><em>{empty}</em></MenuItem>
            );
        }

        options.map(option => {
            opt = option.value === undefined
                ? { value: option, title: option }
                : option;
            result.push(
                <MenuItem
                    key={`select-${name}-option-${opt.value}`}
                    disabled={!!opt.disabled}
                    selected={opt.value === value}
                    value={opt.value}
                    classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected
                    }}
                >
                    {opt.title}
                </MenuItem>
            );
        });

        return result;
    };

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
                <FormHelperText
                    className="errors-list"
                    error={!!touched && !!error}
                >
                    { errorMessage }
                </FormHelperText>
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
            input : {value, onChange},
            showEmpty,
            required,
            readOnly,
            classes,
            multiple
        } = this.props;
        const labelText = withLabel && label ? label : '';
        const id = `radio-${name}`;

        return (
            <div className={rowClassName}>
                <FormControl
                    disabled={readOnly}
                    fullWidth={fullWidth}
                    className={classes.selectFormControl}
                >
                    <InputLabel
                        required={required}
                        htmlFor={id}
                        className={classes.selectLabel}
                    >
                        {labelText}
                    </InputLabel>
                    <Select
                        MenuProps={{
                            className: classes.selectMenu
                        }}
                        classes={{
                            select: classes.select
                        }}
                        displayEmpty={showEmpty}
                        autoWidth
                        className={cx(className)}
                        inputProps={{
                            name,
                            id,
                        }}
                        multiple={multiple}
                        value={value !== undefined ? value : ''}
                        onChange={onChange}

                    >
                        {this.renderOptions()}
                    </Select>
                    {this.renderErrorMessage()}
                </FormControl>
            </div>
        );
    }
}

export default withStyles(styles)(FGSelect);
