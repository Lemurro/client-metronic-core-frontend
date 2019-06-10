/**
 * Покажем скрытые элементы в зависимости от прав доступа
 *
 * @version 10.06.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro._showElementsByRoles = function () {
    var body = $('body');

    // Если пользователь админ, включим все возможности
    if (lemurro.userinfo.admin) {
        body.find('.js-role').removeClass('d-none');
    } else {
        for (var pageID in lemurro.userinfo.roles) {
            if (lemurro.userinfo.roles.hasOwnProperty(pageID)) {
                for (var i in lemurro.userinfo.roles[pageID]) {
                    if (lemurro.userinfo.roles[pageID].hasOwnProperty(i)) {
                        var access = lemurro.userinfo.roles[pageID][i];

                        body.find('.js-role__' + pageID + '--' + access).removeClass('d-none');
                    }
                }
            }
        }
    }
};