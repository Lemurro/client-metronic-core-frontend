/**
 * Удаление
 *
 * @param {string}   id       ИД пользователя
 * @param {function} callback Функция обратного вызова
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 19.06.2020
 */
lemurro.users.remove = function (id, callback) {
    if (id === '1') {
        swal('Внимание!', 'Пользователь с id=1 не может быть удалён', 'warning');
    } else {
        lemurro.lightajax.post(true, pathServerAPI + 'users/' + id + '/remove', {}, function (result) {
            lemurro.lightajax.preloader('hide');

            if (lemurro.hasErrors(result)) {
                lemurro.showErrors(result.errors);
            } else {
                if (typeof callback === 'function') {
                    callback(result);
                }
            }
        });
    }
};
