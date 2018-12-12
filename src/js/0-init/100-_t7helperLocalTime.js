/**
 * Хелпер для Template7: lemurrolocaltime (lemurro.helper.localTime)
 *
 * @version 12.12.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro._t7helperLocalTime = function () {
    Template7.registerHelper('lemurrolocaltime', function (datetime, format) {
        return lemurro.helper.localTime(datetime, format);
    });
};