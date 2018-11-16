/**
 * Common image cropper script class
 *
 * @package    Common
 * @author     Ihor Anishchenko <ianischenko@mindk.com>
 * @copyright  Copyright (c) 2010-2018 MindK (http://mindk.com). All rights reserved.
 * @license    http://mindk.com
 * @link       http://mindk.com
 */

import React, { PureComponent } from 'react';
import Cropper from 'react-cropper';
import PropTypes from 'prop-types';
import 'cropperjs/dist/cropper.css';
import imageCropperStyle from 'Components/Theme/ImageCropper/styles';
import { withStyles } from '@material-ui/core';

@withStyles(imageCropperStyle)

export default class ImageCropperForm extends PureComponent {
    /**
     * @type {Object}
     */
    static propTypes = {
        options: PropTypes.object,
        canvasOptions: PropTypes.object,
        onCrop: PropTypes.func.isRequired,
    };

    /**
     * @type {Object}
     */
    static defaultProps = {
        options: {
            viewMode: 1,
            dragMode: 'move',
            autoCropArea: 0.5,
            restore: false,
            guides: true,
            highlight: false,
            cropBoxMovable: true,
            cropBoxResizable: true,
            minCropBoxWidth: 268,
            minCropBoxHeight: 260,
            aspectRatio: 268 / 260,
        },
        canvasOptions: {
            width: 160,
            height: 90,
            minWidth: 256,
            minHeight: 256,
            maxWidth: 4096,
            maxHeight: 4096,
            fillColor: '#fff',
            imageSmoothingEnabled: false,
            imageSmoothingQuality: 'high',
        },
    };

    /**
     * @type {Object}
     */
    state = {
        node: null,
    };

    setNode = node => {
        this.setState({
            node,
        });
    };

    crop = () => {
        const { node } = this.state;

        const { canvasOptions, onCrop } = this.props;
        const canvas = node.getCroppedCanvas(canvasOptions);
        const dataURL = canvas.toDataURL();

        canvas.toBlob((blob) => {
            onCrop(blob, dataURL);
        });
    };

    render() {
        const { options, image } = this.props;

        return (
            <Cropper
                ref={ (node) => {
                    this.setNode(node);
                } }
                src={ image }
                style={ { height: 400, width: '100%' } }
                { ...options }
                crop={ this.crop }
            />
        );
    }
}
