/**
 * Наполним список прав доступа для фильтра
 *
 * @param {object} groupedListRoles
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 * @version 30.10.2019
 */
lemurro.users._setFilterListRoles = function (groupedListRoles) {
    var html    = '';
    var ordered = {};

    // Сортируем по группам
    Object.keys(groupedListRoles).sort().forEach(function (key) {
        ordered[key] = groupedListRoles[key];
    });

    function compare(a, b) {
        var genreA = a.accessName.toUpperCase();
        var genreB = b.accessName.toUpperCase();

        var comparison = 0;

        if (genreA > genreB) {
            comparison = 1;
        } else if (genreA < genreB) {
            comparison = -1;
        }

        return comparison;
    }

    for (var groupName in ordered) {
        if (ordered.hasOwnProperty(groupName)) {
            var items = ordered[groupName];

            html += '<optgroup label="' + groupName + '">';

            // Сортируем элементы внутри групп
            items.sort(compare);

            for (var j in items) {
                if (items.hasOwnProperty(j)) {
                    html += '<option value="' + items[j].roleName + '|' + items[j].accessCode + '">' + groupName + ': ' + items[j].accessName + '</option>';
                }
            }

            html += '</optgroup>';
        }
    }

    $('#js-page').find('.js-filter').find('select[name="lemurro_roles"]')
        .append(html);
};