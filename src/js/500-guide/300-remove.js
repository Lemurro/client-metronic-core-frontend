/**
 * Удаление записи
 *
 * @param {integer}  id       ИД записи
 * @param {string}   name     Имя записи
 * @param {function} callback Функция обратного вызова
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 * @version 21.01.2020
 */
lemurro.guide.remove = function (id, name, callback) {
    lemurro.lightajax.post(true, pathServerAPI + 'guide/' + lemurro.guide._name + '/' + id + '/remove', {}, function (result) {
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