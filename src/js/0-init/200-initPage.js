/**
 * Определим загруженную страницу и запустим ее init() если он есть
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.initPage = function () {
    lemurro.lightajax.get(false, pathServerAPI + 'user', {}, function (result) {
        if (result.hasOwnProperty('errors')) {
            lemurro.showErrors(result.errors);
        } else {
            if (result.data.admin) {
                $('#m_header_menu').find('.js-role').show();
            } else {
                for (var pageID in result.data.roles) {
                    if (result.data.roles[pageID].indexOf('read') !== -1) {
                        $('#m_header_menu').find('.js-role__' + pageID).show();
                    }
                }
            }

            lemurro.settings.onLoad(result.data);

            var page = $('#js-page');

            if (page.length > 0) {
                var pageName = page.attr('data-page');

                if (pageName === 'lemurro.guide') {
                    if (window.hasOwnProperty('lemurro') && window.lemurro.hasOwnProperty('guide') && window.lemurro.guide.hasOwnProperty('init')) {
                        lemurro.guide.init();
                    }
                } else {
                    var pageScript = window[pageName];

                    if (pageScript !== undefined) {
                        if (pageScript.hasOwnProperty('init')) {
                            pageScript.init();
                        }
                    }
                }
            }
        }
    });
};