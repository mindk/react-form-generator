/**
 * Date Field component script class
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

class FGDate extends FGDateTime {
    /**
     * Get Time Format
     *
     * @return {*}
     */
    get timeFormat() { // eslint-disable-line
        console.log('aksdjkalsjdklsad');
        return false;
    }

    /**
     * Get Value
     *
     * @param value
     * @return {*}
     */
    getValue = (value) => {
        return moment.isMoment(value) ? value.format(this.props.dateFormat) : value;
    };
}

export default withStyles(DateTimeStyles)(FGDate);
