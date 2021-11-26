/**
 * Редактирование
 *
 * @param {string}   id       ИД пользователя
 * @param {function} callback Функция обратного вызова
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 07.10.2020
 */
lemurro.users.edit = function (id, callback) {
    lemurro.lightajax.get(true, pathServerAPI + 'users/' + id, {}, function (result) {
        lemurro.lightajax.preloader('hide');

        if (lemurro.hasErrors(result)) {
            lemurro.showErrors(result.errors);
        } else {
            var container = $('#js-user-form');

            container.attr('data-id', id);
            container.find('.js-title').text('Редактирование пользователя');

            if (id === '1') {
                container.find('.js-user-id-1').prop('disabled', true);

                Swal.fire('Внимание!', 'У данного пользователя некоторые поля запрещены к изменению', 'warning');
            } else {
                container.find('.js-user-id-1').prop('disabled', false);
            }

            $('#js-user__access-sets').find('select').val(null);

            $('#js-user__button-insert').hide();
            $('#js-user__button-save').show();

            $('#js-tab-form-button').html(lemurro.tabs.getTabTitle('edit'));

            lemurro.tabs.tabInsertEdit('show');

            if (typeof callback === 'function') {
                callback(result);
            }
        }
    });
};
