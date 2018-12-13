/**
 * Добавление записи
 *
 * @param {object}   data     Объект с данными
 * @param {function} callback Функция обратного вызова
 *
 * @version 06.12.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.guide.insert = function (data, callback) {
    lemurro.lightajax.post(true, app.config.apiUrl + 'guide/' + lemurro.guide._name, {
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