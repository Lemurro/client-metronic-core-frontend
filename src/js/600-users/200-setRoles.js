/**
 * Установка ролей пользователя (отметка checkbox)
 *
 * @param {jQuery} form  Элемент формы
 * @param {object} roles Список ролей пользователя
 *
 * @version 11.12.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.users.setRoles = function (form, roles) {
    form.find('.js-role').prop('checked', false);

    for (var role in roles) {
        if (role === 'admin') {
            form.find('.js-role[data-role="admin"]').prop('checked', true);
        } else {
            for (var i in roles[role]) {
                form.find('.js-role[data-role="' + role + '"][data-access="' + roles[role][i] + '"]').prop('checked', true);
            }
        }
    }
};