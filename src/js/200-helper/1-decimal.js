/**
 * Преобразование строки в дробное число
 *
 * @param {string|float} value     Строка с дробным числом или число
 * @param {integer}      precision Точность результата (по умолчанию: 2)
 *
 * @return {float}
 *
 * @version 07.12.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.helper.decimal = function (value, precision) {
    if (value === undefined) {
        return 0;
    }

    if (precision === undefined || typeof precision !== 'number') {
        precision = 2;
    }

    if (typeof value === 'number') {
        return parseFloat(value.toFixed(precision));
    } else {
        value = value.replace(/ /g, '');
        value = value.replace(/,/g, '.');

        value = parseFloat(value);

        if (isNaN(value)) {
            return 0;
        }

        return parseFloat(value.toFixed(precision));
    }
};