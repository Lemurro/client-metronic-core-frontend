/**
 * Загрузочный скрипт приложения
 *
 * @version 28.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */

/**
 * Объект главного скрипта
 *
 * @type {object}
 */
var lemurro = {};

/**
 * Настройки
 *
 * @type {object}
 */
lemurro.settings = {};

/**
 * ИД сессии
 *
 * @type {string}
 */
lemurro.sessionID = '';

/**
 * Объект для выполнения Ajax-запросов
 *
 * @type {object}
 */
lemurro.lightajax = {};

/**
 * Инициализация
 *
 * @param {object} options Параметры
 *
 * @version 28.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.init = function (options) {
    lemurro.settings = Object.assign({
        onLoad: function () {
            // Выполняет код после загрузки приложения, перед загрузкой страницы
        }
    }, options);

    lemurro._bindJSerrors();

    // Инициализируем плагин LightAjax
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

    lemurro._bindPhoneMask();
    lemurro._bindCodeMask();
    lemurro._bindSelect2();

    // Достанем из локального хранилища ИД сессии, если есть
    localforage.getItem('sessionID', function (err, value) {
        lemurro.sessionID = value;
        lemurro.auth.check();
    });

    // Достанем из локального хранилища ИД прошлой сессии, если есть
    localforage.getItem('lastSessionID', function (err, value) {
        if (value !== null) {
            $('#js-user-return').show();
        }
    });
};