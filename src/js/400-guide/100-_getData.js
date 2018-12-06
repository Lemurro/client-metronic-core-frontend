/**
 * Список элементов справочника
 *
 * @version 06.12.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.guide._getData = function () {
    lemurro.lightajax.get(true, app.config.apiUrl + 'guide/' + lemurro.guide._name, {}, function (result) {
        lemurro.lightajax.preloader('hide');

        if (result.hasOwnProperty('errors')) {
            lemurro.showErrors(result.errors);
        } else {
            $('#js-guide__loader').hide();

            if (result.data.count === 0) {
                $('#js-guide__empty').show();
            } else {
                var html = '';

                for (var i in result.data.items) {
                    html += lemurro.guide._templates.item(result.data.items[i]);
                }

                $('#js-guide__items').html(html);
                $('#js-guide__list').show();
            }

            if (
                !isEmpty(lemurro.guide._class)
                &&
                window.hasOwnProperty(lemurro.guide._class)
                &&
                window[lemurro.guide._class].hasOwnProperty('init')
            ) {
                window[lemurro.guide._class].init();
            }
        }
    });
};