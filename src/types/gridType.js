import PropTypes from 'prop-types';

export default PropTypes.shape({
    alignContent: PropTypes.oneOf(['stretch', 'center', 'flex-start', 'flex-end', 'space-between', 'space-around']),
    alignItems: PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'stretch', 'baseline']),
    children: PropTypes.node,
    classes: PropTypes.object,
    component: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
    container: PropTypes.bool,
    direction: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
    item: PropTypes.bool,
    justify: PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly']),
    lg: PropTypes.oneOf([false, 'auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    md: PropTypes.oneOf([false, 'auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    sm: PropTypes.oneOf([false, 'auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    x1: PropTypes.oneOf([false, 'auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    xs: PropTypes.oneOf([false, 'auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    spacing: PropTypes.oneOf([0, 8, 16, 24, 32, 40]),
    wrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
    zeroMinWidth: PropTypes.bool,

});
