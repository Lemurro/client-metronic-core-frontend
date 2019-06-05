/**
 * Зарегистрируем Template7-хелпер: lemurroaccesssets
 *
 * @version 05.06.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.users._t7helperAccessSets = function () {
    Template7.registerHelper('lemurroaccesssets', function (roles) {
        var data = [];

        var titles = {};
        for (var i in app.config.userRoles.list) {
            if (app.config.userRoles.list.hasOwnProperty(i)) {
                var role = app.config.userRoles.list[i];

                titles[role.name] = role.title;
            }
        }

        for (var name in roles) {
            if (roles.hasOwnProperty(name)) {
                var access    = roles[name];
                var arrAccess = [];

                for (var k in access) {
                    if (access.hasOwnProperty(k) && app.config.userRoles.guideAccess.hasOwnProperty(access[k])) {
                        arrAccess.push(app.config.userRoles.guideAccess[access[k]]);
                    }
                }

                data.push({
                    title : (titles.hasOwnProperty(name) ? titles[name] : '!неизвестно>>' + name),
                    access: arrAccess
                });
            }
        }

        return lemurro.users._templates.accessSetsRoles(data);
    });
};