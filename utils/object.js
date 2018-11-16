
/**
 * Get object value by path
 *
 * @param {Object} object
 * @param {string} path
 * @param {*} defaultValue
 * @return {*}
 */
export function get(object, path, defaultValue = undefined) {
    const result = path.split('.').reduce((prev, curr) => prev ? prev[curr] : undefined, object || {});

    return result === undefined ? defaultValue: result;
}

/**
 * Check object
 *
 * @param {Object} obj
 * @return {boolean}
 */
export function isEmpty(obj) {
    return obj.constructor === Object && Object.keys(obj).length === 0;
}

/**
 * Array values
 *
 * @param {Array} arr
 * @return {array}
 */
export function arrayValues(arr) {
    const result = [];
    arr.forEach(item => {
        result.push(item);
    });

    return result;
}

export function sortBy(key) {
    return (a, b) => (a[key] > b[key]) ? 1 : ((b[key] > a[key]) ? -1 : 0); // eslint-disable-line
}
