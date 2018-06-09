/**
 * Покажем указанный таб
 *
 * @param {string} tabID Идентификатор нужного таба
 *
 * @version 13.05.2018
 * @author Дмитрий Щербаков <atomcms@ya.ru>
 */
tabs.showTab = function (tabID) {
    var tabsLinks    = $('#js-tabs__links');
    var tabsContents = $('#js-tabs__contents');

    tabsLinks.find('.nav-link').removeClass('active show');
    tabsContents.find('.tab-pane').removeClass('active show');

    tabsLinks.find('a[data-target="#' + tabID + '"]').addClass('active show');
    tabsContents.find('#' + tabID).addClass('active show');
};