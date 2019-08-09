/**
 * Добавление
 *
 * @version 09.08.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
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
                $('#js-access-sets__items').prepend(lemurro.users._templates.accessSetsItem(result.data));

                lemurro.accessSets.getData();

                $('#js-access-sets-form').hide();
                $('#js-access-sets__button-add').show();
            }
        });
    }
};