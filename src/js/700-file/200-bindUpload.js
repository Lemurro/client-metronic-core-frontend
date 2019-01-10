/**
 * Подключение загрузчика файлов
 *
 * @param {jQuery}   btn      jQuery-объект указывающий на кнопку к которой привязать загрузчик
 * @param {function} callback Функция, вызываемя после успешной загрузки файла
 *
 * @version 08.01.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.file.bindUpload = function (btn, callback) {
    var btnContent = btn.html();

    new ss.SimpleUpload({
        button    : btn,
        url       : app.config.apiUrl + 'file/upload',
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
                if (!isEmpty(callback)) {
                    callback(result.data.id, 'add', filename);
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