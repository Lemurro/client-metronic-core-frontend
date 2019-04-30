/**
 * Удаление
 *
 * @param {string}   id       ИД пользователя
 * @param {string}   name     Имя пользователя
 * @param {function} callback Функция обратного вызова
 *
 * @version 30.04.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.users.remove = function (id, name, callback) {
    if (id === '1') {
        swal('Внимание!', 'Пользователь с id=1 не может быть удалён', 'warning');
    } else {
        swal({
            title            : 'Удаление пользователя',
            html             : 'Вы хотите удалить <strong>"' + name + '"</strong>?',
            type             : 'warning',
            showCancelButton : true,
            confirmButtonText: 'Да, удалить!',
            cancelButtonText : 'Отмена'
        }).then(function (result) {
            if (result.value) {
                lemurro.lightajax.post(true, pathServerAPI + 'users/' + id + '/remove', {}, function (result) {
                    lemurro.lightajax.preloader('hide');

                    if (result.hasOwnProperty('errors')) {
                        lemurro.showErrors(result.errors);
                    } else {
                        callback(result);
                    }
                });
            } else {

            }
        });
    }
};