/**
 * Покажем форму добавления
 *
 * @param {function} callback Функция обратного вызова
 *
 * @version 13.05.2018
 * @author Дмитрий Щербаков <atomcms@ya.ru>
 */
guide.showInsertForm = function (callback) {
    var container = $('#js-guide-form');

    container.attr('data-id', '0');
    container.find('.js-title').text('Добавление записи');
    helper.clearFields(container);

    $('#js-guide__button-insert').show();
    $('#js-guide__button-save').hide();

    $('#js-tab-form-button').html('<i class="fa fa-plus"></i> Добавить');

    tabs.tabInsertEdit('show');

    callback();
};