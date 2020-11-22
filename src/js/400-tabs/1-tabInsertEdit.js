/**
 * Скрыть\Показать вторую вкладку
 *
 * @param {string} action Действие (show|hide)
 * @param {string} tabFormName Имя таба с формой или null, тогда будет: tab-form
 * @param {string} tabPrevName Имя предыдущего таба или null, тогда будет: tab-list
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 19.11.2020
 */
lemurro.tabs.tabInsertEdit = function (action, tabFormName, tabPrevName) {
    var tabsLinks = $('#js-tabs__links');
    var tabsContents = $('#js-tabs__contents');

    if (isEmpty(tabFormName)) {
        tabFormName = 'tab-form';
    }

    if (isEmpty(tabPrevName)) {
        tabPrevName = 'tab-list';
    }

    if (action === 'show') {
        tabsLinks
            .find('a[data-target="#' + tabFormName + '"]')
            .parent()
            .show();
        tabsContents.find('#' + tabFormName).addClass('active show');
        lemurro.tabs.showTab(tabFormName);
    } else {
        tabsLinks
            .find('a[data-target="#' + tabFormName + '"]')
            .parent()
            .hide();
        tabsContents.find('#' + tabFormName).removeClass('active show');
        lemurro.tabs.showTab(tabPrevName);
    }
};
