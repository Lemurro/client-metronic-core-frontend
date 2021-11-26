/**
 * Изменение
 *
 * @param {object}   data     Объект с данными
 * @param {function} callback Функция обратного вызова
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 25.08.2020
 */
lemurro.users.save = function (data, callback) {
    lemurro.lightajax.post(
        true,
        pathServerAPI + 'users/' + data.id,
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
                }
            }
        }
    );
};
