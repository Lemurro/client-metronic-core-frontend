/**
 * Удаление файла
 *
 * @param {integer}  fileid   ИД файла
 * @param {function} callback Функция, вызываемая после успешного удаления файла
 *
 * @version 14.01.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.file.remove = function (fileid, callback) {
    var elemFile = $('.' + lemurro.file._classFile + '[data-file-id="' + fileid + '"]');
    var name     = elemFile.find('.js-name').text();

    swal({
        title            : 'Удаление файла',
        html             : 'Вы хотите удалить файл "' + name + '"?',
        type             : 'warning',
        showCancelButton : true,
        confirmButtonText: 'Да, удалить!',
        cancelButtonText : 'Отмена'
    }).then(function (result) {
        if (result.value) {
            if (elemFile.attr('data-file-action') === 'add') {
                elemFile.remove();
            } else {
                elemFile.attr('data-file-action', 'remove').hide();
            }

            if (!isEmpty(callback)) {
                callback(fileid, name);
            }
        }
    });
};