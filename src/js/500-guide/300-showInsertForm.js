/**
 * Покажем форму добавления
 *
 * @param {function} callback Функция обратного вызова
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 * @version 21.01.2020
 */
lemurro.guide.showInsertForm = function (callback) {
    var container = $('#js-guide-form');

    container.attr('data-id', '0');
    container.find('.js-title').text('Добавление записи');
    lemurro.helper.clearFields(container);

    $('#js-guide__button-insert').show();
    $('#js-guide__button-save').hide();

    $('#js-tab-form-button').html('<i class="fas fa-plus"></i> Добавить');

    lemurro.tabs.tabInsertEdit('show');

    if (typeof callback === 'function') {
        callback();
    }
};