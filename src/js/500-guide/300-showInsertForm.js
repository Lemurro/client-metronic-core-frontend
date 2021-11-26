/**
 * Покажем форму добавления
 *
 * @param {function} callback Функция обратного вызова
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 15.08.2020
 */
lemurro.guide.showInsertForm = function (callback) {
    var container = $('#js-guide-form');

    container.attr('data-id', '0');
    container.find('.js-title').text('Добавление записи');
    lemurro.helper.clearFields(container);

    $('#js-guide__button-insert').show();
    $('#js-guide__button-save').hide();

    $('#js-tab-form-button').html(lemurro.tabs.getTabTitle('add'));

    lemurro.tabs.tabInsertEdit('show');

    if (typeof callback === 'function') {
        callback();
    }
};