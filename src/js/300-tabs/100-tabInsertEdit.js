/**
 * Скрыть\Показать вторую вкладку
 *
 * @param {string} action Действие (show|hide)
 *
 * @version 13.05.2018
 * @author Дмитрий Щербаков <atomcms@ya.ru>
 */
tabs.tabInsertEdit = function (action) {
    var tabsLinks    = $('#js-tabs__links');
    var tabsContents = $('#js-tabs__contents');

    if (action === 'show') {
        tabsLinks.find('a[data-target="#tab-form"]').parent().show();
        tabsContents.find('#tab-form').addClass('active show');
        tabs.showTab('tab-form');
    } else {
        tabsLinks.find('a[data-target="#tab-form"]').parent().hide();
        tabsContents.find('#tab-form').removeClass('active show');
        tabs.showTab('tab-list');
    }
};