/**
 * AvatarUpload Field component script class
 *
 * @package    Form Generator
 * @author     Dmytro Ieremenko <dieremenko@mindk.com>
 * @copyright  Copyright (c) 2010-2018 MindK (http://mindk.com). All rights reserved.
 * @license    http://mindk.com
 * @link       http://mindk.com
 */

import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
// import cx from 'classname';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import isBase64 from 'is-base64';
import { buildUrl } from 'Utils';
import { ImageStyles } from '../styles';

class FGAvatarUpload extends PureComponent {

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
        const {
            onChange,
        } = this.props;
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
     * Render
     *
     * @return {*}
     */
    render() {
        const { value } = this.props;
        return (
            <div className="picture-container">
                <div className="picture">
                    <img
                        src={isBase64(value) ? value : buildUrl(value)}
                        className="picture-src"
                        alt="..."
                    />
                    <input
                        ref={ node => { this.setState({ inputNode: node }); } }
                        type="file"
                        onChange={ this.handleImageChange }
                    />
                </div>
                <h6 className="description"><FormattedMessage id="button.choose_avatar"/></h6>
            </div>
        );
    }
}

export default withStyles(ImageStyles)(FGAvatarUpload);
