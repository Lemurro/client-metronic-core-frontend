/**
 * Инициализация ядра
 *
 * @version 12.12.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.init = function () {
    /**
     * ИД сессии
     *
     * @type {string}
     */
    lemurro.sessionID = '';

    /**
     * Информация о пользователе
     *
     * @type {object}
     */
    lemurro.userinfo = {};

    /**
     * Инициализируем плагин LightAjax
     *
     * @type {object}
     */
    lemurro.lightajax = new LightAjax({
        callbackAlert: function (title, message) {
            swal(title, message, 'error');
        },
        ajax         : {
            beforeSend: function (xhr, settings) {
                if (!/^(HEAD|OPTIONS|TRACE)$/i.test(settings.type)) {
                    xhr.setRequestHeader("X-SESSION-ID", lemurro.sessionID);
                }
            }
        }
    });

    // Ловим js-ошибки
    lemurro._bindJSerrors();

    // Инициализируем форму входа
    lemurro._initAuthForm();

    // Подключим Template7 хелперы
    lemurro._t7helperDecimal();
    lemurro._t7helperLocalTime();

    // Достанем из локального хранилища ИД сессии, если есть
    localforage.getItem('sessionID', function (err, value) {
        lemurro.sessionID = value;
        lemurro.auth.check();
    });

    // Достанем из локального хранилища ИД прошлой сессии, если есть
    localforage.getItem('lastSessionID', function (err, value) {
        if (value !== null) {
            $('#js-user-return').removeClass('d-none');
        }
    });
};