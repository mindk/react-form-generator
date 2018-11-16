/**
 * Hidden Input Field component script class
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

export default class FGHidden extends PureComponent {
    /**
     * @type {Object}
     */
    static propTypes = {
        input: PropTypes.object,
    };

    /**
     * @type {Object}
     */
    static defaultProps = {
        input: {},
    };

    /**
     * @type {Object}
     */
    static contextTypes = {
        intl: PropTypes.object.isRequired,
    };

    /**
     * Render
     *
     * @return {*}
     */
    render() {
        const {
            input,
        } = this.props;
        return (
            <div>
                <CustomInput
                    inputProps={{
                        type: 'hidden',
                        ...input,
                    }}
                />
            </div>
        );
    }
}
