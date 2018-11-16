/**
 * Image Field component script class
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
import FormHelperText from '@material-ui/core/FormHelperText';
import defaultImage from 'Layouts/Layout/images/image_placeholder.jpg';
import defaultAvatar from 'Layouts/Layout/images/default-avatar.png';
import FGImageUpload from './ImageUpload';
import FGAvatarUpload from './AvatarUpload';

export default class FGImage extends PureComponent {

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
        color: PropTypes.string,
        avatar: PropTypes.bool,
        value: PropTypes.string,
        labelOptions: PropTypes.object,
        buttonsOptions: PropTypes.object,
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
        color: 'primary',
        labelPlacement: 'start',
        avatar: false,
        labelOptions: {},
        buttonsOptions: {},
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
                { touched && error &&
                    <FormHelperText
                        className="errors-list"
                        error={!!touched && !!error}
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
            name,
            label,
            withLabel,
            rowClassName,
            className,
            fullWidth,
            input: { onChange },
            required,
            readOnly,
            avatar,
            value,
            labelOptions: { hidden = false },
            buttonsOptions,
        } = this.props;
        const ComponentTagName = avatar ? FGAvatarUpload : FGImageUpload;
        const defaultPic = avatar ? defaultAvatar : defaultImage;

        return (
            <div className={rowClassName}>
                <FormControl
                    disabled={readOnly}
                    fullWidth={fullWidth}
                >
                    { !hidden && withLabel &&
                        <FormLabel
                            component="legend"
                            required={required}
                        >{label}</FormLabel>
                    }

                    <ComponentTagName
                        buttonsOptions={buttonsOptions}
                        className={cx(className)}
                        onChange={onChange}
                        name={name}
                        value={value ? value : defaultPic}
                        hasImage={!!value}
                    />
                    {this.renderErrorMessage()}
                </FormControl>
            </div>
        );
    }
}
