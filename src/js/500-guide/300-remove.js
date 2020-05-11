/**
 * Удаление записи
 *
 * @param {integer}  id       ИД записи
 * @param {function} callback Функция обратного вызова
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 11.05.2020
 */
lemurro.guide.remove = function (id, callback) {
    lemurro.lightajax.post(true, pathServerAPI + 'guide/' + lemurro.guide._name + '/' + id + '/remove', {}, function (result) {
        lemurro.lightajax.preloader('hide');

        if (result.hasOwnProperty('errors')) {
            lemurro.showErrors(result.errors);
        } else {
            if (typeof callback === 'function') {
                callback(result);
            } else {
                var container = $('#js-guide__items');

                container.find('tr[data-item-id="' + result.data.id + '"]').remove();

                if (container.find('tr').length === 0) {
                    $('#js-guide__empty').show();
                    $('#js-guide__list').hide();
                }

                swal('Выполнено', 'Запись успешно удалена', 'success');
            }
        }
    });
};