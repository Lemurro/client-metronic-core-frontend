/**
 * Подключим Select2
 *
 * @version 13.05.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
bootstrap._bindSelect2 = function () {
    $('.js-select2').each(function () {
        $(this).select2({
            language   : 'ru',
            placeholder: 'Выберите из списка'
        });
    });
};