/**
 * Удаление
 *
 * @param {integer}  id       ИД пользователя
 * @param {string}   name     Имя пользователя
 * @param {function} callback Функция обратного вызова
 *
 * @version 13.05.2018
 * @author Дмитрий Щербаков <atomcms@ya.ru>
 */
usersCore.remove = function (id, name, callback) {
    swal({
        title            : 'Удаление пользователя',
        html             : 'Вы хотите удалить <strong>"' + name + '"</strong>?',
        type             : 'warning',
        showCancelButton : true,
        confirmButtonText: 'Да, удалить!',
        cancelButtonText : 'Отмена'
    }).then(function (result) {
        if (result.value) {
            bootstrap.lightajax.post(true, pathServerAPI + 'users/' + id + '/remove', {}, function (result) {
                bootstrap.lightajax.preloader('hide');

                if (result.hasOwnProperty('errors')) {
                    bootstrap.showErrors(result.errors);
                } else {
                    callback(result);
                }
            });
        } else {

        }
    });
};