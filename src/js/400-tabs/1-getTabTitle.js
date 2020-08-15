/**
 * Получение заголовка для таба из шаблона
 *
 * @param {string} type Вид шаблона (add|edit)
 *
 * @return {string}
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 15.08.2020
 */
lemurro.tabs.getTabTitle = function (type) {
    var tpl = $('#js-tpl-tabtitle__' + type);

    if (tpl.length === 0) {
        return 'undefined';
    }

    return tpl.html();
};
