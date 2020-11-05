/**
 * Хелпер для Template7: lemurrodecimal (lemurro.helper.decimal)
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 05.11.2020
 */
lemurro._t7helperDecimal = function () {
    Template7.registerHelper('lemurrodecimal', function (value, precision) {
        var result = lemurro.helper.decimal(value, precision);

        return result.toFixed(2);
    });
};