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
/**
 * Создадим маску для кода авторизации
 *
 * @version 13.05.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
bootstrap._bindCodeMask = function () {
    $('.js-code-mask').each(function () {
        var element = $(this);

        Inputmask({
            'mask': '9999'
        }).mask(element);
    });
};
/**
 * Событие отправки javascript-ошибки при возникновении
 *
 * @version 13.05.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
bootstrap._bindJSerrors = function () {
    /**
     * Отправка javascript-ошибки
     *
     * @param {string} msg
     * @param {string} file
     * @param {string} line
     * @param {string} col
     * @param {string} err
     *
     * @version 17.04.2018
     * @author  Дмитрий Щербаков <atomcms@ya.ru>
     */
    function sendError(msg, file, line, col, err) {
        var errString = 'JSON not found';
        if (window.JSON) {
            errString = JSON.stringify(err);
        }

        if (typeof(msg) === 'object') {
            file      = msg.filename;
            line      = msg.lineno;
            col       = msg.colno;
            errString = msg.error.stack;
            msg       = msg.message;
        }

        new Image().src = pathServerAPI + 'jserrors?msg=' + encodeURIComponent(msg) + '&file=' + encodeURIComponent(file) + '&line=' + encodeURIComponent(line) + '&col=' + encodeURIComponent(col) + '&err=' + encodeURIComponent(errString);
    }

    if (window.addEventListener) {
        window.addEventListener('error', sendError, false);
    } else if (window.attachEvent) {
        window.attachEvent('onerror', sendError);
    } else {
        window.onerror = sendError;
    }
};
/**
 * Создадим маску для телефона
 *
 * @version 13.05.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
bootstrap._bindPhoneMask = function () {
    $('.js-phone-mask').each(function () {
        var element = $(this);

        Inputmask({
            'mask': '+7 (999) 999-99-99'
        }).mask(element);
    });
};
/**
 * Подключим Select2
 *
 * @version 13.05.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
bootstrap._bindSelect2 = function () {
    $('.js-select2').each(function () {
        $(this).select2({
            language   : 'ru',
            placeholder: 'Выберите из списка'
        });
    });
};
/**
 * Покажем форму входа
 *
 * @version 13.05.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
bootstrap.authScreen = function (action) {
    var modal = $('#js-auth');

    if (action === 'show') {
        $('#js-auth__get-form').show();
        $('#js-auth__check-form').hide();

        modal.find('input[type="text"]').val('');

        modal.modal({
            backdrop: 'static',
            keyboard: false
        });
    } else {
        modal.modal('hide');
    }
};
/**
 * Определим загруженную страницу и запустим ее init() если он есть
 *
 * @version 03.07.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
bootstrap.initPage = function () {
    bootstrap.lightajax.get(false, pathServerAPI + 'user', {}, function (result) {
        if (result.hasOwnProperty('errors')) {
            bootstrap.showErrors(result.errors);
        } else {
            if (result.data.admin) {
                $('#m_header_menu').find('.js-role').show();
            } else {
                for (var pageID in result.data.roles) {
                    if (result.data.roles[pageID].indexOf('read') !== -1) {
                        $('#m_header_menu').find('.js-role__' + pageID).show();
                    }
                }
            }

            bootstrap.settings.onLoad(result.data);

            var page = $('#js-page');

            if (page.length > 0) {
                var pageScript = window[page.attr('data-page')];

                if (pageScript !== undefined) {
                    if (pageScript.hasOwnProperty('init')) {

                        pageScript.init();
                    }
                }
            }
        }
    });
};
/**
 * Отображение ошибок
 *
 * @param errors array Массив ошибок
 *
 * @version 13.05.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
bootstrap.showErrors = function (errors) {
    if (errors.length === 1 && errors[0].status === '401 Unauthorized') {
        bootstrap.authScreen('show');
    } else if (errors.length === 1 && errors[0].status === '403 Forbidden') {
        location.replace(location.origin + '/403');
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
/**
 * Проверка сессии при запуске приложения
 *
 * @version 13.05.2018
 * @author Дмитрий Щербаков <atomcms@ya.ru>
 */

/**
 * Объект элемента
 *
 * @type {object}
 */
var auth = {};

/**
 * ИД таймера
 *
 * @type {int|null}
 *
 * @private
 */
auth._timerID = null;
/**
 * Запуск таймера
 *
 * @version 13.05.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
auth._runTimer = function () {
    if (auth._timerID !== null) {
        clearInterval(auth._timerID);
    }

    auth._timerID = setInterval(function () {
        var formCode  = $('#js-auth__check-form');
        var elemTimer = formCode.find('.js-timer__count');
        var count     = parseInt(elemTimer.text(), 10);

        if (count > 0) {
            elemTimer.text(--count);
        } else {
            clearInterval(auth._timerID);
            formCode.find('.js-timer').hide();
            formCode.find('.js-resend').show();
        }
    }, 1000);
};
/**
 * Проверка сессии
 *
 * @version 13.05.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
auth.check = function () {
    bootstrap.lightajax.get(true, pathServerAPI + 'auth/check', {}, function (result) {
        bootstrap.lightajax.preloader('hide');

        if (result.hasOwnProperty('errors')) {
            bootstrap.showErrors(result.errors);
        } else {
            $('.js-user__auth-id').text(result.data.user.auth_id);

            bootstrap.initPage();
        }
    });
};
/**
 * Проверка введенного кода
 *
 * @version 26.07.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
auth.checkCode = function () {
    var browser = bowser.getParser(window.navigator.userAgent);

    bootstrap.lightajax.post(true, pathServerAPI + 'auth/code', {
        'auth_id'    : $('#js-auth__get-form').find('input[name="auth_id"]').val(),
        'auth_code'  : $('#js-auth__check-form').find('input[name="auth_code"]').val(),
        'device_info': {
            uuid        : 'WebApp',
            platform    : browser.parsedResult.os.name,
            version     : browser.parsedResult.os.version,
            manufacturer: browser.parsedResult.browser.name,
            model       : browser.parsedResult.browser.version
        }
    }, function (result) {
        bootstrap.lightajax.preloader('hide');

        if (result.hasOwnProperty('errors')) {
            $('#js-auth__check-form').find('input[name="auth_code"]').val('');

            bootstrap.showErrors(result.errors);
        } else {
            localforage.setItem('sessionID', result.data.session, function () {
                bootstrap.sessionID = result.data.session;
                bootstrap.authScreen('hide');
                auth.check();
            });
        }
    });
};
/**
 * Получение кода
 *
 * @version 24.07.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
auth.getCode = function () {
    bootstrap.lightajax.get(true, pathServerAPI + 'auth/code', {
        'auth_id': $('#js-auth__get-form').find('input[name="auth_id"]').val()
    }, function (result) {
        bootstrap.lightajax.preloader('hide');

        if (result.hasOwnProperty('errors')) {
            bootstrap.showErrors(result.errors);
        } else {
            if (result.data.hasOwnProperty('message')) {
                console.log(result.data.message, 'AuthCode');
            }

            var formCode = $('#js-auth__check-form');

            formCode.find('.js-timer').show();
            formCode.find('.js-timer__count').text('60');
            formCode.find('.js-resend').hide();

            auth._runTimer();

            $('#js-auth__get-form').hide();
            formCode.show();
        }
    });
};
/**
 * Сброс сессии
 *
 * @version 13.05.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
auth.logout = function () {
    helper.showConfirm('Выход', 'Вы действительно хотите выйти из системы?', 'Да', 'Нет', null, null, function () {
        $('.js-user-data').html('<i class="fas fa-spinner fa-pulse"></i>');
        localforage.clear();
        bootstrap.sessionID = '';
        bootstrap.authScreen('show');
    }, null);
};
/**
 * Хелперы
 *
 * @version 13.05.2018
 * @author Дмитрий Щербаков <atomcms@ya.ru>
 */

/**
 * Объект элемента
 *
 * @type {object}
 */
var helper = {};
/**
 * Очистка формы
 *
 * @param {object} container jQuery-объект контейнера
 *
 * @version 13.05.2018
 * @author Дмитрий Щербаков <atomcms@ya.ru>
 */
helper.clearFields = function (container) {
    container.find('input[type="text"],input[type="password"],input[type="email"],input[type="number"],input[type="tel"],input[type="url"],input[type="date"],input[type="time"]')
        .val('');

    container.find('textarea').val('');

    container.find('select').each(function () {
        $(this).val(null).trigger('change');
    });

    container.find('input[type="checkbox"]').each(function () {
        $(this).prop('checked', false);
    });

    container.find('input[type="radio"]').each(function () {
        $(this).prop('checked', false);
    });
};
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
 * @version 13.05.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
helper.showConfirm = function (title, content, confirmButtonText, cancelButtonText, callbackOpen, callbackPreConfirm, callbackConfirm, callbackCancel) {
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
/**
 * Операции с табами
 *
 * @version 13.05.2018
 * @author Дмитрий Щербаков <atomcms@ya.ru>
 */

/**
 * Объект элемента
 *
 * @type {object}
 */
var tabs = {};
/**
 * Покажем указанный таб
 *
 * @param {string} tabID Идентификатор нужного таба
 *
 * @version 13.05.2018
 * @author Дмитрий Щербаков <atomcms@ya.ru>
 */
tabs.showTab = function (tabID) {
    var tabsLinks    = $('#js-tabs__links');
    var tabsContents = $('#js-tabs__contents');

    tabsLinks.find('.nav-link').removeClass('active show');
    tabsContents.find('.tab-pane').removeClass('active show');

    tabsLinks.find('a[data-target="#' + tabID + '"]').addClass('active show');
    tabsContents.find('#' + tabID).addClass('active show');
};
/**
 * Скрыть\Показать вторую вкладку
 *
 * @param {string} action Действие (show|hide)
 *
 * @version 13.05.2018
 * @author Дмитрий Щербаков <atomcms@ya.ru>
 */
tabs.tabInsertEdit = function (action) {
    var tabsLinks    = $('#js-tabs__links');
    var tabsContents = $('#js-tabs__contents');

    if (action === 'show') {
        tabsLinks.find('a[data-target="#tab-form"]').parent().show();
        tabsContents.find('#tab-form').addClass('active show');
        tabs.showTab('tab-form');
    } else {
        tabsLinks.find('a[data-target="#tab-form"]').parent().hide();
        tabsContents.find('#tab-form').removeClass('active show');
        tabs.showTab('tab-list');
    }
};
/**
 * Операции со справочниками
 *
 * @version 13.05.2018
 * @author Дмитрий Щербаков <atomcms@ya.ru>
 */

/**
 * Объект элемента
 *
 * @type {object}
 */
var guide = {};

/**
 * Тип справочника
 *
 * @type {string}
 */
guide.type = '';

/**
 * Объект для хранения шаблонов
 *
 * @type {object}
 */
guide.templates = {};

/**
 * Инициализация
 *
 * @version 13.05.2018
 * @author Дмитрий Щербаков <atomcms@ya.ru>
 */
guide.init = function () {
    guide.type = $('#js-page').attr('data-type');

    guide.templates = {
        item: Template7.compile($('#js-tpl-guide__item').html())
    };

    guide._getData();
};
/**
 * Список элементов справочника
 *
 * @version 13.05.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
guide._getData = function () {
    bootstrap.lightajax.get(true, pathServerAPI + 'guide/' + guide.type, {}, function (result) {
        bootstrap.lightajax.preloader('hide');

        if (result.hasOwnProperty('errors')) {
            bootstrap.showErrors(result.errors);
        } else {
            $('#js-guide__loader').hide();

            if (result.data.count === 0) {
                $('#js-guide__empty').show();
            } else {
                var html = '';

                for (var i in result.data.items) {
                    html += guide.templates.item(result.data.items[i]);
                }

                $('#js-guide__items').html(html);
                $('#js-guide__list').show();
            }
        }
    });
};
/**
 * Редактирование записи
 *
 * @param {integer}  id       ИД записи
 * @param {function} callback Функция обратного вызова
 *
 * @version 13.05.2018
 * @author Дмитрий Щербаков <atomcms@ya.ru>
 */
guide.edit = function (id, callback) {
    bootstrap.lightajax.get(true, pathServerAPI + 'guide/' + guide.type + '/' + id, {}, function (result) {
        bootstrap.lightajax.preloader('hide');

        if (result.hasOwnProperty('errors')) {
            bootstrap.showErrors(result.errors);
        } else {
            var container = $('#js-guide-form');

            container.attr('data-id', id);
            container.find('.js-title').text('Редактирование записи');

            $('#js-guide__button-insert').hide();
            $('#js-guide__button-save').show();

            $('#js-tab-form-button').html('<i class="fas fa-pencil-alt"></i> Редактировать');

            tabs.tabInsertEdit('show');

            callback(result);
        }
    });
};
/**
 * Добавление записи
 *
 * @param {object}   data     Объект с данными
 * @param {function} callback Функция обратного вызова
 *
 * @version 13.05.2018
 * @author Дмитрий Щербаков <atomcms@ya.ru>
 */
guide.insert = function (data, callback) {
    bootstrap.lightajax.post(true, pathServerAPI + 'guide/' + guide.type, {
        data: data
    }, function (result) {
        bootstrap.lightajax.preloader('hide');

        if (result.hasOwnProperty('errors')) {
            bootstrap.showErrors(result.errors);
        } else {
            callback(result);
        }
    });
};
/**
 * Удаление записи
 *
 * @param {integer}  id       ИД записи
 * @param {string}   name     Имя записи
 * @param {function} callback Функция обратного вызова
 *
 * @version 13.05.2018
 * @author Дмитрий Щербаков <atomcms@ya.ru>
 */
guide.remove = function (id, name, callback) {
    swal({
        title            : 'Удаление записи',
        html             : 'Вы хотите удалить <strong>"' + name + '"</strong>?',
        type             : 'warning',
        showCancelButton : true,
        confirmButtonText: 'Да, удалить!',
        cancelButtonText : 'Отмена'
    }).then(function (result) {
        if (result.value) {
            bootstrap.lightajax.post(true, pathServerAPI + 'guide/' + guide.type + '/' + id + '/remove', {}, function (result) {
                bootstrap.lightajax.preloader('hide');

                if (result.hasOwnProperty('errors')) {
                    bootstrap.showErrors(result.errors);
                } else {
                    callback(result);
                }
            });
        } else {

        }
    });
};
/**
 * Изменение записи
 *
 * @param {object}   data     Объект с данными
 * @param {function} callback Функция обратного вызова
 *
 * @version 13.05.2018
 * @author Дмитрий Щербаков <atomcms@ya.ru>
 */
guide.save = function (data, callback) {
    bootstrap.lightajax.post(true, pathServerAPI + 'guide/' + guide.type + '/' + data.id, {
        data: data
    }, function (result) {
        bootstrap.lightajax.preloader('hide');

        if (result.hasOwnProperty('errors')) {
            bootstrap.showErrors(result.errors);
        } else {
            callback(result);
        }
    });
};
/**
 * Покажем форму добавления
 *
 * @param {function} callback Функция обратного вызова
 *
 * @version 13.05.2018
 * @author Дмитрий Щербаков <atomcms@ya.ru>
 */
guide.showInsertForm = function (callback) {
    var container = $('#js-guide-form');

    container.attr('data-id', '0');
    container.find('.js-title').text('Добавление записи');
    helper.clearFields(container);

    $('#js-guide__button-insert').show();
    $('#js-guide__button-save').hide();

    $('#js-tab-form-button').html('<i class="fas fa-plus"></i> Добавить');

    tabs.tabInsertEdit('show');

    callback();
};
/**
 * Работа с пользователями
 *
 * @version 13.05.2018
 * @author Дмитрий Щербаков <atomcms@ya.ru>
 */

/**
 * Объект элемента
 *
 * @type {object}
 */
var usersCore = {};
/**
 * Редактирование
 *
 * @param {integer}  id       ИД пользователя
 * @param {function} callback Функция обратного вызова
 *
 * @version 13.05.2018
 * @author Дмитрий Щербаков <atomcms@ya.ru>
 */
usersCore.edit = function (id, callback) {
    bootstrap.lightajax.get(true, pathServerAPI + 'users/' + id, {}, function (result) {
        bootstrap.lightajax.preloader('hide');

        if (result.hasOwnProperty('errors')) {
            bootstrap.showErrors(result.errors);
        } else {
            var container = $('#js-user-form');

            container.attr('data-id', id);
            container.find('.js-title').text('Редактирование пользователя');

            $('#js-user__button-insert').hide();
            $('#js-user__button-save').show();

            $('#js-tab-form-button').html('<i class="fas fa-pencil-alt"></i> Редактировать');

            tabs.tabInsertEdit('show');

            callback(result);
        }
    });
};
/**
 * Список пользователей
 *
 * @version 13.05.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
usersCore.getData = function () {
    bootstrap.lightajax.get(true, pathServerAPI + 'users', {}, function (result) {
        bootstrap.lightajax.preloader('hide');

        if (result.hasOwnProperty('errors')) {
            bootstrap.showErrors(result.errors);
        } else {
            var html = '';

            for (var i in result.data.items) {
                html += users.templates.item(result.data.items[i]);
            }

            $('#js-users__items').html(html);
        }
    });
};
/**
 * Добавление
 *
 * @param {object}   data     Объект с данными
 * @param {function} callback Функция обратного вызова
 *
 * @version 13.05.2018
 * @author Дмитрий Щербаков <atomcms@ya.ru>
 */
usersCore.insert = function (data, callback) {
    bootstrap.lightajax.post(true, pathServerAPI + 'users', {
        data: data
    }, function (result) {
        bootstrap.lightajax.preloader('hide');

        if (result.hasOwnProperty('errors')) {
            bootstrap.showErrors(result.errors);
        } else {
            callback(result);
        }
    });
};
/**
 * Удаление
 *
 * @param {integer}  id       ИД пользователя
 * @param {string}   name     Имя пользователя
 * @param {function} callback Функция обратного вызова
 *
 * @version 13.05.2018
 * @author Дмитрий Щербаков <atomcms@ya.ru>
 */
usersCore.remove = function (id, name, callback) {
    swal({
        title            : 'Удаление пользователя',
        html             : 'Вы хотите удалить <strong>"' + name + '"</strong>?',
        type             : 'warning',
        showCancelButton : true,
        confirmButtonText: 'Да, удалить!',
        cancelButtonText : 'Отмена'
    }).then(function (result) {
        if (result.value) {
            bootstrap.lightajax.post(true, pathServerAPI + 'users/' + id + '/remove', {}, function (result) {
                bootstrap.lightajax.preloader('hide');

                if (result.hasOwnProperty('errors')) {
                    bootstrap.showErrors(result.errors);
                } else {
                    callback(result);
                }
            });
        } else {

        }
    });
};
/**
 * Изменение
 *
 * @param {object}   data     Объект с данными
 * @param {function} callback Функция обратного вызова
 *
 * @version 13.05.2018
 * @author Дмитрий Щербаков <atomcms@ya.ru>
 */
usersCore.save = function (data, callback) {
    bootstrap.lightajax.post(true, pathServerAPI + 'users/' + data.id, {
        data: data
    }, function (result) {
        bootstrap.lightajax.preloader('hide');

        if (result.hasOwnProperty('errors')) {
            bootstrap.showErrors(result.errors);
        } else {
            callback(result);
        }
    });
};
/**
 * Покажем форму добавления
 *
 * @param {function} callback Функция обратного вызова
 *
 * @version 13.05.2018
 * @author Дмитрий Щербаков <atomcms@ya.ru>
 */
usersCore.showInsertForm = function (callback) {
    var container = $('#js-user-form');

    container.attr('data-id', '0');
    container.find('.js-title').text('Добавление пользователя');
    helper.clearFields(container);

    $('#js-user__button-insert').show();
    $('#js-user__button-save').hide();

    $('#js-tab-form-button').html('<i class="fas fa-plus"></i> Добавить');

    tabs.tabInsertEdit('show');

    callback();
};