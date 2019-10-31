/**
 * Очистка фильтра
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 * @version 27.09.2019
 */
lemurro.users.clearFilter = function () {
    var filter = $('#js-page').find('.js-filter');

    filter.find('select').val('all').trigger('change');
    filter.find('input[type="text"]').val('');
};