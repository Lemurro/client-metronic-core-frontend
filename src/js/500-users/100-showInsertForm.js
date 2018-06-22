/**
 * Покажем форму добавления
 *
 * @param {function} callback Функция обратного вызова
 *
 * @version 13.05.2018
 * @author Дмитрий Щербаков <atomcms@ya.ru>
 */
usersCore.showInsertForm = function (callback) {
    var container = $('#js-user-form');

    container.attr('data-id', '0');
    container.find('.js-title').text('Добавление пользователя');
    helper.clearFields(container);

    $('#js-user__button-insert').show();
    $('#js-user__button-save').hide();

    $('#js-tab-form-button').html('<i class="fas fa-plus"></i> Добавить');

    tabs.tabInsertEdit('show');

    callback();
};