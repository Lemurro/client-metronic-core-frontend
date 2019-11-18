/**
 * Отобразим список пользователей
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 * @version 01.11.2019
 */
lemurro.users.showData = function (data) {
    var container = $('#js-users__items');
    var html      = '';

    for (var i in data.items) {
        if (data.items.hasOwnProperty(i)) {
            html += users.templates.item(data.items[i]);
        }
    }

    container.html(html);

    lemurro.helper.initBootstrapConfirmation(container, null);
};