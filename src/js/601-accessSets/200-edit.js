/**
 * Редактирование
 *
 * @param {string} id ИД набора
 *
 * @version 05.06.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.accessSets.edit = function (id) {
    lemurro.lightajax.get(true, pathServerAPI + 'access_sets/' + id, {}, function (result) {
        lemurro.lightajax.preloader('hide');

        if (result.hasOwnProperty('errors')) {
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