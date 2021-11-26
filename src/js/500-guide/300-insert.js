/**
 * Добавление записи
 *
 * @param {object}   data     Объект с данными
 * @param {function} callback Функция обратного вызова
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 25.08.2020
 */
lemurro.guide.insert = function (data, callback) {
    lemurro.lightajax.post(
        true,
        pathServerAPI + 'guide/' + lemurro.guide._name,
        {
            json: JSON.stringify(data),
        },
        function (result) {
            lemurro.lightajax.preloader('hide');

            if (lemurro.hasErrors(result)) {
                lemurro.showErrors(result.errors);
            } else {
                if (typeof callback === 'function') {
                    callback(result);
                } else {
                    var container = $('#js-guide__items');
                    container.prepend(lemurro.guide._templates.item(result.data));

                    var row = container.find('tr[data-item-id="' + result.data.id + '"]');
                    lemurro.helper.initBootstrapConfirmation(row, null);

                    $('#js-guide__empty').hide();
                    $('#js-guide__list').show();

                    lemurro.tabs.tabInsertEdit('hide');
                }
            }
        }
    );
};
