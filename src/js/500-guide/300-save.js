/**
 * Изменение записи
 *
 * @param {object}   data     Объект с данными
 * @param {function} callback Функция обратного вызова
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 19.06.2020
 */
lemurro.guide.save = function (data, callback) {
    lemurro.lightajax.post(
        true,
        pathServerAPI + 'guide/' + lemurro.guide._name + '/' + data.id,
        {
            data: data,
        },
        function (result) {
            lemurro.lightajax.preloader('hide');

            if (lemurro.hasErrors(result)) {
                lemurro.showErrors(result.errors);
            } else {
                if (typeof callback === 'function') {
                    callback(result);
                } else {
                    var newRecord = $(lemurro.guide._templates.item(result.data));
                    var row = $('#js-guide__items').find('tr[data-item-id="' + result.data.id + '"]');

                    row.html(newRecord.html());

                    lemurro.helper.initBootstrapConfirmation(row, null);

                    lemurro.tabs.tabInsertEdit('hide');

                    swal('Выполнено', 'Запись успешно изменена', 'success');
                }
            }
        }
    );
};
