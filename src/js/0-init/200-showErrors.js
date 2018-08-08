/**
 * Отображение ошибок
 *
 * @param errors array Массив ошибок
 *
 * @version 08.08.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
bootstrap.showErrors = function (errors) {
    if (errors.length === 1 && errors[0].status === '401 Unauthorized') {
        bootstrap.authScreen('show');
    } else if (errors.length === 1 && errors[0].status === '403 Forbidden') {
        location.assign(location.origin + '/403');
    } else {
        for (var i in errors) {
            var item  = errors[i];
            var title = 'Неизвестная ошибка';
            var code  = 'error';

            switch (item.code) {
                case 'danger':
                    code  = 'error';
                    title = 'Критическая ошибка';
                    break;

                case 'warning':
                    code  = 'warning';
                    title = 'Внимание!';
                    break;

                case 'info':
                    code  = 'info';
                    title = 'Информация';
                    break;
            }

            swal(title, item.title, code);
        }
    }
};