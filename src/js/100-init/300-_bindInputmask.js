/**
 * Подключим Inputmask
 *
 * @version 11.12.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro._bindInputmask = function () {
    $('#js-page').find('.js-mask').each(function () {
        var element = $(this);

        Inputmask({
            'mask': element.attr('data-mask')
        }).mask(element);
    });
};