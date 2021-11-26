/**
 * Добавление
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 25.08.2020
 */
lemurro.accessSets.insert = function () {
    var data = lemurro.accessSets._collectData();

    if (Object.keys(data).length > 0) {
        lemurro.lightajax.post(
            true,
            pathServerAPI + 'access_sets',
            {
                json: JSON.stringify(data),
            },
            function (result) {
                lemurro.lightajax.preloader('hide');

                if (lemurro.hasErrors(result)) {
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
            }
        );
    }
};
