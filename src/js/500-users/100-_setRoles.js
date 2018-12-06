/**
 * Нарисуем форму выбора прав доступа
 *
 * @version 30.11.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.users._setRoles = function () {
    var container = $('#js-user__roles');
    var userRoles = app.config.userRoles;

    for (var pageCode in userRoles.guidePages) {
        if (userRoles.guidePages.hasOwnProperty(pageCode) && userRoles.list.hasOwnProperty(pageCode)) {
            var pageName = userRoles.guidePages[pageCode];
            var list     = userRoles.list[pageCode];
            var access   = [];

            for (var i in list) {
                var code = list[i];
                var name = (userRoles.guideAccess.hasOwnProperty(code) ? userRoles.guideAccess[code] : '!unknown');

                access.push({
                    code: code,
                    name: name
                });
            }

            container.append(lemurro.users._templates.roles({
                pageName: pageName,
                pageCode: pageCode,
                access  : access
            }));
        }
    }
};