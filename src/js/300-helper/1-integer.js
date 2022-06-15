/**
 * Безопасное получение integer
 *
 * @param {string|number} value
 *
 * @return {number}
 */
lemurro.helper.integer = function (value) {
    var str = String(value);

    str = str.replace(/\s/g, '');
    str = str.replace(/,/g, '.');

    var parsed = parseInt(str, 10);

    if (isNaN(parsed)) {
        return 0;
    }

    return parsed;
};
