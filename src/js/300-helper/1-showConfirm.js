/**
 * Покажем подтверждение
 *
 * @param {string}   title              Заголовок
 * @param {string}   content            HTML-Содержимое
 * @param {string}   confirmButtonText  Текст кнопки "OK"
 * @param {string}   cancelButtonText   Текст кнопки "Cancel"
 * @param {function} callbackOpen       Функция при открытии формы
 * @param {function} callbackPreConfirm Функция перед вызовом callbackConfirm
 * @param {function} callbackConfirm    Функция при нажатии confirmButton
 * @param {function} callbackCancel     Функция при нажатии cancelButton
 *
 * @version 09.05.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.helper.showConfirm = function (title, content, confirmButtonText, cancelButtonText, callbackOpen, callbackPreConfirm, callbackConfirm, callbackCancel) {
    swal({
        title             : title,
        html              : content,
        type              : 'question',
        buttonsStyling    : false,
        focusConfirm      : false,
        allowOutsideClick : false,
        allowEscapeKey    : false,
        allowEnterKey     : false,
        showCancelButton  : true,
        confirmButtonText : confirmButtonText,
        cancelButtonText  : cancelButtonText,
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass : 'btn btn-danger',
        onOpen            : callbackOpen,
        preConfirm        : callbackPreConfirm
    }).then(function (result) {
        if (result.value) {
            if (typeof callbackConfirm === 'function') {
                callbackConfirm();
            }
        } else {
            if (typeof callbackCancel === 'function') {
                callbackCancel();
            }
        }
    });
};