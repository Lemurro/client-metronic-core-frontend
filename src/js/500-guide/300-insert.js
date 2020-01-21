/**
 * Добавление записи
 *
 * @param {object}   data     Объект с данными
 * @param {function} callback Функция обратного вызова
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 * @version 21.01.2020
 */
lemurro.guide.insert = function (data, callback) {
    lemurro.lightajax.post(true, pathServerAPI + 'guide/' + lemurro.guide._name, {
        data: data
    }, function (result) {
        lemurro.lightajax.preloader('hide');

        if (result.hasOwnProperty('errors')) {
            lemurro.showErrors(result.errors);
        } else {
            if (typeof callback === 'function') {
                callback(result);
            }
        }
    });
};