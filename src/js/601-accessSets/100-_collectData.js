/**
 * Сбор данных формы
 *
 * @return {object}
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 07.10.2020
 */
lemurro.accessSets._collectData = function () {
    var form = $('#js-access-sets-form');

    if (form.valid()) {
        return {
            id: form.attr('data-id'),
            name: form.find('input[name="name"]').val(),
            roles: lemurro.users.getRoles(form),
        };
    } else {
        Swal.fire('Внимание!', 'Заполните все поля, помеченные красным', 'warning');

        return {};
    }
};
