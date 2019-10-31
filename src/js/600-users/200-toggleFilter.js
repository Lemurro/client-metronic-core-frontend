/**
 * Покажем \ Скроем фильтр
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 * @version 27.09.2019
 */
lemurro.users.toggleFilter = function () {
    var page = $('#js-page');

    var iconAngle = page.find('.js-filter__angle');
    var filter    = page.find('.js-filter');
    var visible   = filter.attr('data-visible');

    if (visible === '0') {
        filter.attr('data-visible', '1').show();

        iconAngle.removeClass('fa-angle-down').addClass('fa-angle-up');
    } else {
        filter.attr('data-visible', '0').hide();

        iconAngle.removeClass('fa-angle-up').addClass('fa-angle-down');
    }
};