/**
 * Сброс сессии
 *
 * @version 13.05.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
auth.logout = function () {
    helper.showConfirm('Выход', 'Вы действительно хотите выйти из системы?', 'Да', 'Нет', null, null, function () {
        $('.js-user-data').html('<i class="fa fa-spinner fa-pulse"></i>');
        localforage.clear();
        bootstrap.sessionID = '';
        bootstrap.authScreen('show');
    }, null);
};