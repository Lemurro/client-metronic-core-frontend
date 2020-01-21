/**
 * Покажем форму добавления
 *
 * @param {function} callback Функция обратного вызова
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 * @version 21.01.2020
 */
lemurro.users.showInsertForm = function (callback) {
    var container = $('#js-user-form');

    container.attr('data-id', '0');
    container.find('.js-title').text('Добавление пользователя');
    lemurro.helper.clearFields(container);

    container.find('.js-user-id-1').prop('disabled', false);

    $('#js-user__access-sets').find('select').val(null);

    $('#js-user__button-insert').show();
    $('#js-user__button-save').hide();

    $('#js-tab-form-button').html('<i class="fas fa-plus"></i> Добавить');

    lemurro.tabs.tabInsertEdit('show');

    if (typeof callback === 'function') {
        callback();
    }
};