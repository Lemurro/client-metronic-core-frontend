/**
 * Установка ролей пользователя (отметка checkbox)
 *
 * @param {JQuery} form  Элемент формы
 * @param {object} roles Список ролей пользователя
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 * @version 18.10.2019
 */
lemurro.users.setRoles = function (form, roles) {
    form.find('.js-role').prop('checked', false);

    for (var role in roles) {
        if (role === 'admin') {
            form.find('.js-role[data-role="admin"]').prop('checked', true);
        } else {
            for (var i in roles[role]) {
                if (roles[role].hasOwnProperty(i)) {
                    form.find('.js-role[data-role="' + role + '"][data-access="' + roles[role][i] + '"]')
                        .prop('checked', true);
                }
            }
        }
    }
};