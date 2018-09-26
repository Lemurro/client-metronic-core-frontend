/**
 * Список элементов справочника
 *
 * @version 26.09.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
guide._getData = function () {
    bootstrap.lightajax.get(true, pathServerAPI + 'guide/' + guide.type, {}, function (result) {
        bootstrap.lightajax.preloader('hide');

        if (result.hasOwnProperty('errors')) {
            bootstrap.showErrors(result.errors);
        } else {
            $('#js-guide__loader').hide();

            if (result.data.count === 0) {
                $('#js-guide__empty').show();
            } else {
                var html = '';

                for (var i in result.data.items) {
                    html += guide.templates.item(result.data.items[i]);
                }

                $('#js-guide__items').html(html);
                $('#js-guide__list').show();
            }

            if (
                result.data.js_class !== undefined
                && window.hasOwnProperty(result.data.js_class)
                && window[result.data.js_class].hasOwnProperty('init')
            ) {
                window[result.data.js_class].init();
            }
        }
    });
};