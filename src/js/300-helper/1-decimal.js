/**
 * Преобразование строки в дробное число
 *
 * @param {string|float} value     Строка с дробным числом или число
 * @param {integer}      precision Точность результата (по умолчанию: 2)
 *
 * @return {float}
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 27.04.2020
 */
lemurro.helper.decimal = function (value, precision) {
    if (value === undefined) {
        return 0;
    }

    if (precision === undefined || typeof precision !== 'number') {
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

    return parseFloat(value.toFixed(precision));
};