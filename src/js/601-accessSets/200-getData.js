/**
 * Список
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 * @version 21.01.2020
 */
lemurro.accessSets.getData = function () {
    lemurro.lightajax.get(false, pathServerAPI + 'access_sets', {}, function (result) {
        if (result.hasOwnProperty('errors')) {
            lemurro.showErrors(result.errors);
        } else {
            var containerItems  = $('#js-access-sets__items');
            var htmlItems  = '';

            for (var i in result.data.items) {
                if (result.data.items.hasOwnProperty(i)) {
                    var item = result.data.items[i];

                    htmlItems += lemurro.users._templates.accessSetsItem(item);
                }
            }

            containerItems.html(htmlItems);

            lemurro.helper.initBootstrapConfirmation(containerItems, null);
            lemurro.accessSets._buildSelect();
        }
    });
};