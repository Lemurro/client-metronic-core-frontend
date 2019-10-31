/**
 * Нарисуем форму выбора прав доступа
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 * @version 30.10.2019
 */
lemurro.users._initRoles = function () {
    var container        = $('#js-user__roles');
    var userRoles        = app.config.userRoles;
    var groupedListRoles = {};

    for (var keyList in userRoles.list) {
        if (userRoles.list.hasOwnProperty(keyList)) {
            var role   = userRoles.list[keyList];
            var access = [];
            var group  = role.title.replace(/"/g, '');

            // Создаем группу, если её нет
            if (!groupedListRoles.hasOwnProperty(group)) {
                groupedListRoles[group] = [];
            }

            for (var keyAccess in role.access) {
                if (role.access.hasOwnProperty(keyAccess)) {
                    var code = role.access[keyAccess];
                    var name = (userRoles.guideAccess.hasOwnProperty(code) ? userRoles.guideAccess[code] : '!unknown');

                    // Группируем права доступа по разделам
                    groupedListRoles[group].push({
                        roleName  : role.name,
                        accessCode: code,
                        accessName: name.replace(/"/g, '')
                    });

                    access.push({
                        code: code,
                        name: name
                    });
                }
            }

            container.append(lemurro.users._templates.roles({
                roleName : role.name,
                roleTitle: role.title,
                access   : access
            }));
        }
    }

    lemurro.users._setFilterListRoles(groupedListRoles);

    $('#js-access-sets__roles').html(container.html());
};