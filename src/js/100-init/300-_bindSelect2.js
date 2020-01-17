/**
 * Подключим Select2
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 * @version 17.01.2020
 */
lemurro._bindSelect2 = function () {
    $('#js-page').find('.js-select2').each(function () {
        $(this).select2();
    });
};