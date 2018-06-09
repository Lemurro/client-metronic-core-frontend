/**
 * Определим загруженную страницу и запустим ее init() если он есть
 *
 * @version 13.05.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
bootstrap.initPage = function () {
    bootstrap.settings.onLoad();

    var page = $('#js-page');

    if (page.length > 0) {
        var pageScript = window[page.attr('data-page')];

        if (pageScript !== undefined) {
            if (pageScript.hasOwnProperty('init')) {

                pageScript.init();
            }
        }
    }
};