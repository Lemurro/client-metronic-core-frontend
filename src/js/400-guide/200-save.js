/**
 * Изменение записи
 *
 * @param {object}   data     Объект с данными
 * @param {function} callback Функция обратного вызова
 *
 * @version 13.05.2018
 * @author Дмитрий Щербаков <atomcms@ya.ru>
 */
guide.save = function (data, callback) {
    bootstrap.lightajax.post(true, pathServerAPI + 'guide/' + guide.type + '/' + data.id, {
        data: data
    }, function (result) {
        bootstrap.lightajax.preloader('hide');

        if (result.hasOwnProperty('errors')) {
            bootstrap.showErrors(result.errors);
        } else {
            callback(result);
        }
    });
};