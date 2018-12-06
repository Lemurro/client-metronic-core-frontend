/**
 * Добавление
 *
 * @param {object}   data     Объект с данными
 * @param {function} callback Функция обратного вызова
 *
 * @version 15.11.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.users.insert = function (data, callback) {
    lemurro.lightajax.post(true, app.config.apiUrl + 'users', {
        data: data
    }, function (result) {
        lemurro.lightajax.preloader('hide');

        if (result.hasOwnProperty('errors')) {
            lemurro.showErrors(result.errors);
        } else {
            callback(result);
        }
    });
};