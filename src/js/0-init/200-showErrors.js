/**
 * Отображение ошибок
 *
 * @param {array} errors Массив ошибок
 *
 * @version 10.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
bootstrap.showErrors = function (errors) {
    if (errors.length === 1 && errors[0].status === '401 Unauthorized') {
        bootstrap.authScreen('show');
    } else if (errors.length === 1 && errors[0].status === '403 Forbidden') {
        var redirect = true;

        if (errors[0].hasOwnProperty('meta') && errors[0].meta.hasOwnProperty('redirect')) {
            redirect = errors[0].meta.redirect;
        }

        if (redirect) {
            location.assign(location.origin + '/403');
        } else {
            bootstrap._showError(errors[0].code, errors[0].title);
        }
    } else {
        for (var i in errors) {
            bootstrap._showError(errors[i].code, errors[i].title);
        }
    }
};

/**
 * Покажем ошибку
 *
 * @param {string} errCode  Код ошибки
 * @param {string} errTitle Текст ошибки
 *
 * @version 10.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
bootstrap._showError = function (errCode, errTitle) {
    var title = 'Неизвестная ошибка';
    var code  = 'error';

    switch (errCode) {
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

    swal(title, errTitle, code);
};