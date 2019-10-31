/**
 * Отобразим список пользователей
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 * @version 27.09.2019
 */
lemurro.users.showData = function (data) {
    var html = '';

    for (var i in data.items) {
        html += users.templates.item(data.items[i]);
    }

    $('#js-users__items').html(html);
};