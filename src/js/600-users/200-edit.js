/**
 * Редактирование
 *
 * @param {string}   id       ИД пользователя
 * @param {function} callback Функция обратного вызова
 *
 * @version 09.08.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.users.edit = function (id, callback) {
    lemurro.lightajax.get(true, pathServerAPI + 'users/' + id, {}, function (result) {
        lemurro.lightajax.preloader('hide');

        if (result.hasOwnProperty('errors')) {
            lemurro.showErrors(result.errors);
        } else {
            var container = $('#js-user-form');

            container.attr('data-id', id);
            container.find('.js-title').text('Редактирование пользователя');

            if (id === '1') {
                container.find('.js-user-id-1').prop('disabled', true);

                swal('Внимание!', 'У данного пользователя некоторые поля запрещены к изменению', 'warning');
            } else {
                container.find('.js-user-id-1').prop('disabled', false);
            }

            $('#js-user__access-sets').find('select').val(null);

            $('#js-user__button-insert').hide();
            $('#js-user__button-save').show();

            $('#js-tab-form-button').html('<i class="fas fa-pencil-alt"></i> Редактировать');

            lemurro.tabs.tabInsertEdit('show');

            callback(result);
        }
    });
};