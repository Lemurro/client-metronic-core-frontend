/**
 * Редактирование
 *
 * @param {string} id ИД набора
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 19.06.2020
 */
lemurro.accessSets.edit = function (id) {
    lemurro.lightajax.get(true, pathServerAPI + 'access_sets/' + id, {}, function (result) {
        lemurro.lightajax.preloader('hide');

        if (lemurro.hasErrors(result)) {
            lemurro.showErrors(result.errors);
        } else {
            var container = $('#js-access-sets-form');

            container.attr('data-id', id);
            container.find('.js-title').text('Редактирование набора');
            container.find('input[name="name"]').val(result.data.name);

            $('#js-access-sets__button-insert').hide();
            $('#js-access-sets__button-save').show();
            $('#js-access-sets__button-add').hide();

            lemurro.users.setRoles(container, result.data.roles);

            container.show();
        }
    });
};
