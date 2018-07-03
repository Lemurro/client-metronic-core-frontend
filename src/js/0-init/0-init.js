/**
 * Загрузочный скрипт приложения
 *
 * @version 03.07.2018
 * @author Дмитрий Щербаков <atomcms@ya.ru>
 */

/**
 * Объект главного скрипта
 *
 * @type {object}
 */
var bootstrap = {};

/**
 * Настройки
 *
 * @type {object}
 */
bootstrap.settings = {};

/**
 * ИД сессии
 *
 * @type {string}
 */
bootstrap.sessionID = '';

/**
 * Объект для выполнения Ajax-запросов
 *
 * @type {object}
 */
bootstrap.lightajax = {};

/**
 * Инициализация
 *
 * @param {object} options Параметры
 *
 * @version 03.07.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
bootstrap.init = function (options) {
    bootstrap.settings = Object.assign({
        onLoad: function (data) {
            // Выполняет код после загрузки приложения, перед загрузкой страницы
        }
    }, options);

    bootstrap._bindJSerrors();

    // Инициализируем плагин LightAjax
    bootstrap.lightajax = new LightAjax({
        callbackAlert: function (title, message) {
            swal(title, message, 'error');
        },
        ajax         : {
            beforeSend: function (xhr, settings) {
                if (!/^(HEAD|OPTIONS|TRACE)$/i.test(settings.type)) {
                    xhr.setRequestHeader("X-SESSION-ID", bootstrap.sessionID);
                }
            }
        }
    });

    bootstrap._bindPhoneMask();
    bootstrap._bindCodeMask();
    bootstrap._bindSelect2();

    // Достанем из локального хранилища ИД сессии, если есть
    localforage.getItem('sessionID', function (err, value) {
        bootstrap.sessionID = value;
        auth.check();
    });
};