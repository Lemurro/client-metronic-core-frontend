/**
 * Редактирование записи
 *
 * @param {integer}  id       ИД записи
 * @param {function} callback Функция обратного вызова
 *
 * @version 13.05.2018
 * @author Дмитрий Щербаков <atomcms@ya.ru>
 */
guide.edit = function (id, callback) {
    bootstrap.lightajax.get(true, pathServerAPI + 'guide/' + guide.type + '/' + id, {}, function (result) {
        bootstrap.lightajax.preloader('hide');

        if (result.hasOwnProperty('errors')) {
            bootstrap.showErrors(result.errors);
        } else {
            var container = $('#js-guide-form');

            container.attr('data-id', id);
            container.find('.js-title').text('Редактирование записи');

            $('#js-guide__button-insert').hide();
            $('#js-guide__button-save').show();

            $('#js-tab-form-button').html('<i class="fa fa-pencil"></i> Редактировать');

            tabs.tabInsertEdit('show');

            callback(result);
        }
    });
};