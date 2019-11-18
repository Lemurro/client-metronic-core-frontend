/**
 * Список элементов справочника
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 * @version 01.11.2019
 */
lemurro.guide._getData = function () {
    lemurro.lightajax.get(true, pathServerAPI + 'guide/' + lemurro.guide._name, {}, function (result) {
        lemurro.lightajax.preloader('hide');

        if (result.hasOwnProperty('errors')) {
            lemurro.showErrors(result.errors);
        } else {
            $('#js-guide__loader').hide();

            if (result.data.count === 0) {
                $('#js-guide__empty').show();
            } else {
                var container = $('#js-guide__items');
                var html      = '';

                for (var i in result.data.items) {
                    if (result.data.items.hasOwnProperty(i)) {
                        html += lemurro.guide._templates.item(result.data.items[i]);
                    }
                }

                container.html(html);
                $('#js-guide__list').show();

                lemurro.helper.initBootstrapConfirmation(container, null);
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