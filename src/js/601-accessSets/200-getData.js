/**
 * Список
 *
 * @version 05.06.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.accessSets.getData = function () {
    lemurro.lightajax.get(true, pathServerAPI + 'access_sets', {}, function (result) {
        lemurro.lightajax.preloader('hide');

        if (result.hasOwnProperty('errors')) {
            lemurro.showErrors(result.errors);
        } else {
            var containerItems  = $('#js-access-sets__items');
            var containerSelect = $('#js-user__access-sets');

            var htmlItems  = '';
            var htmlSelect = '';

            for (var i in result.data.items) {
                if (result.data.items.hasOwnProperty(i)) {
                    var item = result.data.items[i];

                    htmlItems += lemurro.users._templates.accessSetsItem(item);
                    htmlSelect += '<option value="' + item.id + '">' + item.name + '</option>';
                }
            }

            containerItems.html(htmlItems);
            containerSelect.find('select').html(htmlSelect);

            if (!isEmpty(htmlSelect)) {
                containerSelect.show();
            }
        }
    });
};