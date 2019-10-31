/**
 * Подключение загрузчика файлов
 *
 * @param {JQuery}   btn        jQuery-объект указывающий на кнопку к которой привязать загрузчик
 * @param {function} onComplete Функция, вызываемая после успешной загрузки файла
 * @param {object}   options    Переопределение параметров
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 * @version 31.10.2019
 */
lemurro.file.bindUpload = function (btn, onComplete, options) {
    var btnContent = btn.html();

    // Проверка на наличие объекта
    if (isEmpty(options)) {
        options = {};
    }

    // Настройки
    var settings = $.extend({
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
                } else {
                    swal('Выполнено', 'Файл <strong>' + filename + '</strong>' + ' успешно загружен', 'success');
                }
            }
        },
        onError   : function (filename) {
            btn.html(btnContent).prop('disabled', false);

            swal('Произошла ошибка', 'Не удалось загрузить файл "' + filename + '", попробуйте ещё раз', 'error');
        }
    }, options);

    new ss.SimpleUpload(settings);
};