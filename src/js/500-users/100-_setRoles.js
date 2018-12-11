/**
 * Нарисуем форму выбора прав доступа
 *
 * @version 11.12.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.users._setRoles = function () {
    var container = $('#js-user__roles');
    var userRoles = app.config.userRoles;

    for (var keyList in userRoles.list) {
        var role   = userRoles.list[keyList];
        var access = [];


        for (var keyAccess in role.access) {
            var code = role.access[keyAccess];
            var name = (userRoles.guideAccess.hasOwnProperty(code) ? userRoles.guideAccess[code] : '!unknown');

            access.push({
                code: code,
                name: name
            });
        }

        container.append(lemurro.users._templates.roles({
            roleName : role.name,
            roleTitle: role.title,
            access   : access
        }));
    }
};