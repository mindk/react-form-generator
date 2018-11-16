/**
 * Time Field component script class
 *
 * @package    Form Generator
 * @author     Dmytro Ieremenko <dieremenko@mindk.com>
 * @copyright  Copyright (c) 2010-2018 MindK (http://mindk.com). All rights reserved.
 * @license    http://mindk.com
 * @link       http://mindk.com
 */

import moment from 'moment';
import FGDateTime from './DateTime';
import { withStyles } from '@material-ui/core/styles';
import { DateTimeStyles } from '../styles';

class FGTime extends FGDateTime {
    /**
     * Get Data Format
     *
     * @return {*}
     */
    get dateFormat() { // eslint-disable-line
        return false;
    }

    /**
     * Get Value
     *
     * @param value
     * @return {*}
     */
    getValue = value =>
        moment.isMoment(value) ? value.format(this.props.timeFormat): value;
}

export default withStyles(DateTimeStyles)(FGTime);
