/**
 * Преобразование строки в дробное число
 *
 * @param {string} str Строка с дробным числом
 *
 * @return {string}
 *
 * @version 28.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.helper.decimal = function (str) {
    return parseFloat(str.replace(/,/g, '.'));
};