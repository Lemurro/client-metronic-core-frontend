/**
 * Применим фильтр
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 * @version 27.09.2019
 */
lemurro.users.applyFilter = function () {
    var page = $('#js-page');
    var data = {};

    page.find('.js-filter').find('.js-filter__element').each(function () {
        var input = $(this);
        var name  = input.attr('name');

        data[name] = input.val();
    });

    page.find('.js-message__default').hide();
    page.find('.js-message__notfound').hide();

    lemurro.lightajax.post(true, pathServerAPI + 'users/filter', {
        data: data
    }, function (result) {
        lemurro.lightajax.preloader('hide');

        if (result.hasOwnProperty('errors')) {
            lemurro.showErrors(result.errors);
        } else {
            lemurro.users.showData(result.data);

            if (result.data.count === 0) {
                page.find('.js-message__notfound').show();
            }
        }
    });
};