/**
 * Required validation
 *
 * @param value
 * @return {*}
 */
export function required(value) {
    return [undefined, null].includes(value) || typeof value === 'string' && !value.trim()
        ? 'validation.error.required'
        : undefined;
}

/**
 * Checkbox Required validation
 *
 * @param value
 * @return {*}
 */
export function checkRequired(value) {
    return [undefined, null, false].includes(value) ? 'validation.error.required' : undefined;
}

/**
 * AutocompleteSelect Required validation
 *
 * @param value
 * @return {*}
 */
export function autocompleteSelectRequired(value) {
    return [undefined, null].includes(value) || typeof value === 'array' && !value.length
        ? 'validation.error.required'
        : undefined;
}

/**
 * Email validation
 *
 * @param value
 * @return {*}
 */
export function email(value) {
    const val = value || '';
    // eslint-disable-next-line
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val.toLowerCase())
        ? undefined
        : 'validation.error.invalid_email';
}

/**
 * Number Validation
 *
 * @param {any} value
 *
 * @return {*}
 */
export function number(value) {
    if (!value) return undefined;
    /^\d+$/
    return /^\d+$/.test(value)
        ? undefined
        : 'validation.error.not_a_number';
}

/**
 * Number Validation
 *
 * @param {any} value
 *
 * @return {*}
 */
export function money(value) {
    if (!value) return undefined;
    return /^[0-9]+(\.[0-9]{1,2})?$/.test(value)
        ? undefined
        : 'validation.error.not_a_money';
}

/**
 * Number Validation
 *
 * @param {any} value
 *
 * @return {*}
 */
export function years(value) {
    if (!value) return undefined;
    return /^\d+$/.test(value)
        ? undefined
        : 'validation.error.not_a_year';
}

/**
 * Number Validation
 *
 * @param {any} value
 *
 * @return {*}
 */
export function gpa(value) {
    if (!value) return undefined;
    return /^\d(\.[0-9]{1,2})?$/.test(value)
        ? undefined
        : 'validation.error.not_a_gpa';
}

/**
 * Confirm Password
 *
 * @param value
 * @param values
 * @return {*}
 */
export function confirmPassword(value, values) {
    return value !== values.password ? 'validation.error.confirmation_password' : undefined;
}

/**
 * Url validation
 *
 * @param value
 * @return {*}
 */
export function url(value) {
    const val = value || '';
    // eslint-disable-next-line
    return value && !/^https?:\/\/(www\.)?([-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}|localhost)\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/.test(val.toLowerCase())
        ? 'validation.error.invalid_url'
        : undefined;
}
