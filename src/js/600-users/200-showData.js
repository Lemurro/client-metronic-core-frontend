/**
 * Отобразим список пользователей
 *
 * @param {Object} data
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 07.10.2020
 */
lemurro.users.showData = function (data) {
    var container = $('#js-users__items');
    var html = '';

    for (var i in data.items) {
        if (data.items.hasOwnProperty(i)) {
            html += users.templates.item(data.items[i]);
        }
    }

    container.html(html);

    localforage.getItem('lastSessionID', function (err, value) {
        if (value !== null) {
            container.find('.js-login-by-user').hide();
        }
    });

    lemurro.helper.initBootstrapConfirmation(container, null);

    if (users.hasOwnProperty('afterShowData') && notEmpty(users.afterShowData)) {
        users.afterShowData(data);
    }
};
