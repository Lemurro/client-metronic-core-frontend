/**
 * Загрузка справочника
 *
 * @version 24.04.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.guide._load = function () {
    var page     = $('#js-page');
    var pageFile = location.protocol + '//' + location.host + '/guide_' + lemurro.guide._name + '.html';

    page.find('.js-guide__title').html(app.page.title);

    // Сбросим активность со всех ссылок
    page.find('.js-guide-link').each(function () {
        var link = $(this);

        link.removeClass(link.attr('data-active-class'));
    });

    page.find('.js-guide__content').load(pageFile, function () {
        // Установим активность ссылок с определенным классом
        page.find('.js-guide-link__' + lemurro.guide._name).each(function () {
            var link = $(this);

            link.addClass(link.attr('data-active-class'));
        });

        // Скомпилируем шаблоны
        lemurro.guide._templates = {
            item: Template7.compile($('#js-tpl-guide__item').html())
        };

        lemurro._bindForAll();

        // Получим данные справочника
        lemurro.guide._getData();
    });
};