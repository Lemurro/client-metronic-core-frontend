/**
 * Получение отмеченных ролей пользователя
 *
 * @param {JQuery} form Элемент формы
 *
 * @return {object}
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 * @version 18.10.2019
 */
lemurro.users.getRoles = function (form) {
    var roles = {};

    form.find('.js-role:checked').each(function () {
        var elem = $(this);
        var role = elem.attr('data-role');

        if (role === 'admin') {
            roles.admin = true;
        } else {
            if (!roles.hasOwnProperty(role)) {
                roles[role] = [];
            }

            roles[role].push(elem.attr('data-access'));
        }
    });

    if (roles.hasOwnProperty('admin')) {
        roles = {admin: true};
    }

    return roles;
};