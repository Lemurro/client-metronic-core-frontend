/**
 * Удаление
 *
 * @param {string}   id       ИД пользователя
 * @param {string}   name     Имя пользователя
 * @param {function} callback Функция обратного вызова
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 * @version 21.01.2020
 */
lemurro.users.remove = function (id, name, callback) {
    if (id === '1') {
        swal('Внимание!', 'Пользователь с id=1 не может быть удалён', 'warning');
    } else {
        lemurro.lightajax.post(true, pathServerAPI + 'users/' + id + '/remove', {}, function (result) {
            lemurro.lightajax.preloader('hide');

            if (result.hasOwnProperty('errors')) {
                lemurro.showErrors(result.errors);
            } else {
                if (typeof callback === 'function') {
                    callback(result);
                }
            }
        });
    }
};