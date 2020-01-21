/**
 * Добавление
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 * @version 21.01.2020
 */
lemurro.accessSets.insert = function () {
    var data = lemurro.accessSets._collectData();

    if (Object.keys(data).length > 0) {
        lemurro.lightajax.post(true, pathServerAPI + 'access_sets', {
            data: data
        }, function (result) {
            lemurro.lightajax.preloader('hide');

            if (result.hasOwnProperty('errors')) {
                lemurro.showErrors(result.errors);
            } else {
                var container = $('#js-access-sets__items');
                container.prepend(lemurro.users._templates.accessSetsItem(result.data));

                var row = container.find('tr[data-item-id="' + result.data.id + '"]');
                lemurro.helper.initBootstrapConfirmation(row, null);

                lemurro.accessSets._buildSelect();

                $('#js-access-sets-form').hide();
                $('#js-access-sets__button-add').show();
            }
        });
    }
};