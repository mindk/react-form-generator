/**
 * ImageUpload Field component script class
 *
 * @package    Form Generator
 * @author     Dmytro Ieremenko <dieremenko@mindk.com>
 * @copyright  Copyright (c) 2010-2018 MindK (http://mindk.com). All rights reserved.
 * @license    http://mindk.com
 * @link       http://mindk.com
 */

import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import cx from 'classname';
import PropTypes from 'prop-types';
import Button from 'Components/Theme/CustomButtons/Button';
import isBase64 from 'is-base64';
import { get, buildUrl } from 'Utils';
import { ImageStyles } from '../styles';

class FGImageUpload extends PureComponent {

    /**
     * Prop Types
     *
     * @type {*}
     */
    static propTypes = {
        classes: PropTypes.object.isRequired,
        hasImage: PropTypes.bool,
        onChange: PropTypes.func,
        value: PropTypes.string,
        name: PropTypes.string,
        buttonsOptions: PropTypes.object,
        color: PropTypes.string,
    };

    /**
     * @type {Object}
     */
    static defaultProps = {
        buttonsOptions: {},
        color: 'info',
    };

    /**
     * @type {Object}
     */
    static contextTypes = {
        intl: PropTypes.object.isRequired,
    };

    /**
     * Handle Image Change
     *
     * @param e
     */
    handleImageChange = (e) => {
        const { onChange } = this.props;
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = (e) => {
            onChange(e.target.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    /**
     * Handle Click
     */
    handleClick = (e) => {
        this.state.inputNode.click(e);
    };

    /**
     * Handle Remove
     */
    handleRemove = () => {
        this.props.onChange('');
    };

    /**
     * Get Input Ref
     *
     * @param node
     */
    getInputRef = node => {
        this.setState({ inputNode: node });
    };

    /**
     * Get Button Title
     *
     * @param type
     * @param defaultTitle
     * @return {*}
     */
    getButtonTitle = (type, defaultTitle) => {
        const title = defaultTitle || type;
        const { buttonsOptions = {} } = this.props;
        const { formatMessage } = this.context.intl;

        return get(buttonsOptions, `${type}.title`, formatMessage({ id: `button.${title}` }));
    };

    /**
     * Get Button Color
     *
     * @param type
     * @param defaultColor
     * @return {*}
     */
    getButtonColor = (type, defaultColor) => {
        const { buttonsOptions = {}, color } = this.props;

        return get(buttonsOptions, `${type}.color`, defaultColor || color);
    };

    /**
     * Render
     *
     * @return {*}
     */
    render() {
        const { hasImage, classes, value, name } = this.props;
        return (
            <div className="fileinput text-center">
                <div className="thumbnail">
                    <img
                        src={isBase64(value) || !hasImage ? value : buildUrl(value)}
                        alt="..."
                    />
                    <input
                        className={cx(classes.hide)}
                        name={name}
                        ref={this.getInputRef}
                        type="file"
                        onChange={this.handleImageChange}
                        onBlur={this.handleImageChange}
                    />
                </div>
                <div>
                    { !hasImage ? (
                        <Button
                            round
                            color={this.getButtonColor('select')}
                            onClick={ this.handleClick }
                        >
                            {this.getButtonTitle('select', 'select_image')}
                        </Button>
                    ) : (
                        <span>
                            <Button
                                round
                                color={this.getButtonColor('change')}
                                onClick={ this.handleClick }
                            >
                                {this.getButtonTitle('change')}
                            </Button>
                            <Button
                                color={this.getButtonColor('change', 'danger')}
                                round
                                onClick={ this.handleRemove }
                            >
                                <i className="fa fa-times"/> {this.getButtonTitle('remove')}
                            </Button>
                        </span>
                    ) }
                </div>
            </div>
        );
    }
}

export default withStyles(ImageStyles)(FGImageUpload);
