/**
 * Удаление записи
 *
 * @param {integer}  id       ИД записи
 * @param {string}   name     Имя записи
 * @param {function} callback Функция обратного вызова
 *
 * @version 13.05.2018
 * @author Дмитрий Щербаков <atomcms@ya.ru>
 */
guide.remove = function (id, name, callback) {
    swal({
        title            : 'Удаление записи',
        html             : 'Вы хотите удалить <strong>"' + name + '"</strong>?',
        type             : 'warning',
        showCancelButton : true,
        confirmButtonText: 'Да, удалить!',
        cancelButtonText : 'Отмена'
    }).then(function (result) {
        if (result.value) {
            bootstrap.lightajax.post(true, pathServerAPI + 'guide/' + guide.type + '/' + id + '/remove', {}, function (result) {
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