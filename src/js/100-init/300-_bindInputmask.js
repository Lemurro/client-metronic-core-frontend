/**
 * Подключим Inputmask
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 29.11.2020
 */
lemurro._bindInputmask = function () {
    $('#js-page').find('.js-mask').each(function () {
        Inputmask({
            'mask': $(this).attr('data-mask')
        }).mask(this);
    });
};