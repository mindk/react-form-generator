/**
 * Check object
 *
 * @param {string} path
 * @return {string}
 */
export default function buildUrl(path) {
    return `${process.env.REACT_APP_API_HOST}/${path}`; // eslint-disable-line
}
