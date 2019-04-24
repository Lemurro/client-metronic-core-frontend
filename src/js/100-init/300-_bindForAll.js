/**
 * Применим код общий для разделов и справочников
 *
 * @version 24.04.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro._bindForAll = function () {
    // Обновление ссылок маршрутизатора
    lemurro.router.updatePageLinks();

    lemurro._bindInputmask();
    lemurro._bindSelect2();
    lemurro._bindTableFilter();
};