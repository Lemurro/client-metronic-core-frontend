/**
 * Изменение
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 07.10.2020
 */
lemurro.accessSets.save = function () {
    var data = lemurro.accessSets._collectData();

    if (Object.keys(data).length > 0) {
        lemurro.lightajax.post(
            true,
            pathServerAPI + 'access_sets/' + data.id,
            {
                json: JSON.stringify(data),
            },
            function (result) {
                lemurro.lightajax.preloader('hide');

                if (lemurro.hasErrors(result)) {
                    lemurro.showErrors(result.errors);
                } else {
                    var newRecord = $(lemurro.users._templates.accessSetsItem(result.data));
                    var row = $('#js-access-sets__items').find('tr[data-item-id="' + result.data.id + '"]');

                    row.html(newRecord.html());

                    lemurro.helper.initBootstrapConfirmation(row, null);

                    lemurro.accessSets._buildSelect();

                    $('#js-access-sets-form').hide();
                    $('#js-access-sets__button-add').show();

                    Swal.fire('Выполнено', 'Запись успешно изменена', 'success');
                }
            }
        );
    }
};
