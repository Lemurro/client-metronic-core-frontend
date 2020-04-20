/**
 * Список
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 17.04.2020
 */
lemurro.authKeys.getData = function () {
    var container = $('#js-auth-keys__items');

    container.html('');

    lemurro.lightajax.get(false, pathServerAPI + 'auth/keys', {}, function (result) {
        if (result.hasOwnProperty('errors')) {
            lemurro.showErrors(result.errors);
        } else {
            if (!lemurro.authKeys.hasOwnProperty('_template')) {
                lemurro.authKeys._template = Template7.compile($('#js-tpl-auth-keys__items').html());
            }

            container.html(lemurro.authKeys._template(result.data));
        }
    });
};