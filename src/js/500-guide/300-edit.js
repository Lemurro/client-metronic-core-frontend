/**
 * Редактирование записи
 *
 * @param {integer}  id       ИД записи
 * @param {function} callback Функция обратного вызова
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 * @version 21.01.2020
 */
lemurro.guide.edit = function (id, callback) {
    lemurro.lightajax.get(true, pathServerAPI + 'guide/' + lemurro.guide._name + '/' + id, {}, function (result) {
        lemurro.lightajax.preloader('hide');

        if (result.hasOwnProperty('errors')) {
            lemurro.showErrors(result.errors);
        } else {
            var container = $('#js-guide-form');

            container.attr('data-id', id);
            container.find('.js-title').text('Редактирование записи');

            $('#js-guide__button-insert').hide();
            $('#js-guide__button-save').show();

            $('#js-tab-form-button').html('<i class="fas fa-pencil-alt"></i> Редактировать');

            lemurro.tabs.tabInsertEdit('show');

            if (typeof callback === 'function') {
                callback(result);
            }
        }
    });
};