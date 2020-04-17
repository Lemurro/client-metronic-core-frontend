/**
 * Отобразим список пользователей
 *
 * @param {Object}   data
 * @param {function} callback
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 17.04.2020
 */
lemurro.users.showData = function (data, callback) {
    var container = $('#js-users__items');
    var html      = '';

    for (var i in data.items) {
        if (data.items.hasOwnProperty(i)) {
            html += users.templates.item(data.items[i]);
        }
    }

    container.html(html);

    lemurro.helper.initBootstrapConfirmation(container, null);

    if (users.hasOwnProperty('afterShowData') && notEmpty(users.afterShowData)) {
        users.afterShowData(data);
    }
};