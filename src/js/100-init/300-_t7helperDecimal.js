/**
 * Хелпер для Template7: lemurrodecimal (lemurro.helper.decimal)
 *
 * @version 12.12.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro._t7helperDecimal = function () {
    Template7.registerHelper('lemurrodecimal', function (value, precision) {
        return lemurro.helper.decimal(value, precision);
    });
};