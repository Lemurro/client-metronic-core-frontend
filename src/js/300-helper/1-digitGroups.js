/**
 * Группировка цифр по разрядам
 *
 * @param {string|number} value Строка или число
 * @param {number} precision Точность результата (по умолчанию: 2)
 *
 * @return {string}
 */
lemurro.helper.digitGroups = function (value, precision) {
    if (typeof value === 'string') {
        value = parseFloat(value);
    }

    if (isEmpty(value)) {
        return String(0);
    }

    if (typeof value !== 'number') {
        return String(0);
    }

    if (typeof precision !== 'number' || isNaN(precision)) {
        precision = 2;
    }

    var re = /(\d)(?=(\d\d\d)+([^\d]|$))/g;

    if (precision === -1) {
        return String(value).replace(re, '$1 ');
    }

    return value.toFixed(precision).replace(re, '$1 ');
};
