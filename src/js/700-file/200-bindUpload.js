/**
 * Подключение загрузчика файлов
 *
 * @param {jQuery}   btn        jQuery-объект указывающий на кнопку к которой привязать загрузчик
 * @param {function} onComplete Функция, вызываемая после успешной загрузки файла
 *
 * @version 15.05.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.file.bindUpload = function (btn, onComplete) {
    var btnContent = btn.html();

    var uploader = new ss.SimpleUpload({
        button    : btn,
        onSubmit  : function () {
            btn.html('<i class="fas fa-spinner fa-pulse"></i> Загрузка...').prop('disabled', true); // change button text to "Uploading..."
        },
        onComplete: function (filename, result) {
            btn.html(btnContent).prop('disabled', false);

            if (!result) {
                swal('Произошла ошибка', 'Не удалось загрузить файл "' + filename + '", попробуйте ещё раз', 'error');

                return false;
            }

            if (result.hasOwnProperty('errors')) {
                lemurro.showErrors(result.errors);
            } else {
                if (typeof onComplete === 'function') {
                    onComplete(result.data.id, 'add', filename, btn);
                }

                swal('Выполнено', 'Файл <strong>' + filename + '</strong>' + ' успешно загружен', 'success');
            }
        },
        onError   : function (filename) {
            btn.html(btnContent).prop('disabled', false);

            swal('Произошла ошибка', 'Не удалось загрузить файл "' + filename + '", попробуйте ещё раз', 'error');
        }
    });
};