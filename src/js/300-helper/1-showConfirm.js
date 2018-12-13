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
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.helper.showConfirm = function (title, content, confirmButtonText, cancelButtonText, callbackOpen, callbackPreConfirm, callbackConfirm, callbackCancel) {
    swal({
        title            : title,
        html             : content,
        type             : '',
        allowOutsideClick: false,
        showCancelButton : true,
        confirmButtonText: confirmButtonText,
        cancelButtonText : cancelButtonText,
        onOpen           : callbackOpen,
        preConfirm       : callbackPreConfirm
    }).then(function (result) {
        if (result.value) {
            callbackConfirm();
        } else {
            if (callbackCancel !== null) {
                callbackCancel();
            }
        }
    });
};