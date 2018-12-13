/**
 * Подключим Select2
 *
 * @version 27.11.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro._bindSelect2 = function () {
    $('#js-page').find('.js-select2').each(function () {
        $(this).select2({
            language   : 'ru',
            placeholder: 'Выберите из списка'
        });
    });
};