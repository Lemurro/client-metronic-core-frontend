/**
 * Создадим маску для кода авторизации
 *
 * @version 13.05.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
bootstrap._bindCodeMask = function () {
    $('.js-code-mask').each(function () {
        var element = $(this);

        Inputmask({
            'mask': '9999'
        }).mask(element);
    });
};