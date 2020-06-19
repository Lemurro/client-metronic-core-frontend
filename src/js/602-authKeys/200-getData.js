/**
 * Список
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 19.06.2020
 */
lemurro.authKeys.getData = function () {
    var container = $('#js-auth-keys__items');

    container.html('');

    lemurro.lightajax.get(false, pathServerAPI + 'auth/keys', {}, function (result) {
        if (lemurro.hasErrors(result)) {
            lemurro.showErrors(result.errors);
        } else {
            if (!lemurro.authKeys.hasOwnProperty('_template')) {
                lemurro.authKeys._template = Template7.compile($('#js-tpl-auth-keys__items').html());
            }

            container.html(lemurro.authKeys._template(result.data));
        }
    });
};
