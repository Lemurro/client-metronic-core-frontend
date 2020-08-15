/**
 * Определим загруженную страницу и запустим ее init() если он есть
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 14.08.2020
 */
lemurro._loadPage = function () {
    var pageFile = location.protocol + '//' + location.host + '/' + app.page.name + '.html';

    document.title = app.page.title + ' | ' + app.config.title;

    // Сбросим активность со всех ссылок
    $('#kt_header')
        .find('.js-link')
        .each(function () {
            var link = $(this);

            link.removeClass(link.attr('data-active-class'));
        });

    $('#js-page').load(pageFile, function () {
        // Установим активность ссылок с определенным классом
        $('#kt_header')
            .find('.js-link__' + app.page.name)
            .each(function () {
                var link = $(this);

                link.addClass(link.attr('data-active-class'));
            });

        lemurro._bindForAll();

        if (!isEmpty(app.page.onLoad)) {
            app.page.onLoad();
        }
    });
};
