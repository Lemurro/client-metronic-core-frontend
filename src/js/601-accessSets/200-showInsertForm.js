/**
 * Покажем форму добавления
 *
 * @version 05.06.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.accessSets.showInsertForm = function () {
    var container = $('#js-access-sets-form');

    container.attr('data-id', '0');
    container.find('.js-title').text('Добавление набора');
    lemurro.helper.clearFields(container);

    $('#js-access-sets__button-insert').show();
    $('#js-access-sets__button-save').hide();
    $('#js-access-sets__button-add').hide();

    container.show();
};