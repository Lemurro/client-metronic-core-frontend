/**
 * Преобразование строки в дробное число
 *
 * @param {string|number} value     Строка с дробным числом или число
 * @param {number}        precision Точность результата (по умолчанию: 2)
 *
 * @return {number}
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 27.04.2020
 */
lemurro.helper.decimal = function (value, precision) {
    if (isEmpty(value)) {
        return 0;
    }

    if (typeof precision !== 'number' || isNaN(precision)) {
        precision = 2;
    }

    if (typeof value !== 'number') {
        value = value.replace(/ /g, '');
        value = value.replace(/,/g, '.');

        value = parseFloat(value);

        if (isNaN(value)) {
            return 0;
        }
    }

    if (precision === -1) {
        return value;
    }

    return parseFloat(value.toFixed(precision));
};