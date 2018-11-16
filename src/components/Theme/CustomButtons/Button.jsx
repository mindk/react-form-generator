import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// nodejs library to set properties for components
import PropTypes from 'prop-types';

// material-ui components
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';

import buttonStyle from 'Layouts/Layout/jss/material-dashboard-pro-react/components/buttonStyle.jsx';
function RegularButton({ ...props }) {
    const {
        classes,
        color,
        round,
        children,
        fullWidth,
        disabled,
        simple,
        size,
        block,
        link,
        justIcon,
        withIcon,
        textButton,
        returnButton,
        className,
        muiClasses,
        ...rest
    } = props;
    const btnClasses = classNames({
        [classes.button]: true,
        [classes[size]]: size,
        [classes[color]]: color,
        [classes.round]: round,
        [classes.fullWidth]: fullWidth,
        [classes.disabled]: disabled,
        [classes.simple]: simple,
        [classes.block]: block,
        [classes.link]: link,
        [classes.justIcon]: justIcon,
        [classes.withIcon]: withIcon,
        [classes.textButton]: textButton,
        [classes.returnButton]: returnButton,
        [className]: className
    });
    return (
        <Button {...rest} classes={muiClasses} className={btnClasses}>
            {children}
        </Button>
    );
}

RegularButton.propTypes = {
    classes: PropTypes.object.isRequired,
    color: PropTypes.oneOf([
        'primary',
        'info',
        'success',
        'warning',
        'danger',
        'rose',
        'white',
        'twitter',
        'facebook',
        'google',
        'linkedin',
        'pinterest',
        'youtube',
        'tumblr',
        'github',
        'behance',
        'dribbble',
        'reddit',
        'transparent'
    ]),
    size: PropTypes.oneOf(['sm', 'lg']),
    simple: PropTypes.bool,
    round: PropTypes.bool,
    fullWidth: PropTypes.bool,
    disabled: PropTypes.bool,
    block: PropTypes.bool,
    link: PropTypes.bool,
    justIcon: PropTypes.bool,
    withIcon: PropTypes.bool,
    textButton: PropTypes.bool,
    returnButton: PropTypes.bool,
    className: PropTypes.string,
    muiClasses: PropTypes.object
};

export default withStyles(buttonStyle)(RegularButton);
