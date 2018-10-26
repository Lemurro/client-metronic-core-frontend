/**
 * Загрузочный скрипт приложения
 *
 * @version 26.10.2018
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
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.init = function (options) {
    lemurro.settings = Object.assign({
        onLoad: function (data) {
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
/**
 * Создадим маску для кода авторизации
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro._bindCodeMask = function () {
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
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro._bindJSerrors = function () {
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
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro._bindPhoneMask = function () {
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
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro._bindSelect2 = function () {
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
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.authScreen = function (action) {
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
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.initPage = function () {
    lemurro.lightajax.get(false, pathServerAPI + 'user', {}, function (result) {
        if (result.hasOwnProperty('errors')) {
            lemurro.showErrors(result.errors);
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

            lemurro.settings.onLoad(result.data);

            var page = $('#js-page');

            if (page.length > 0) {
                var pageName = page.attr('data-page');

                if (pageName === 'lemurro.guide') {
                    if (window.hasOwnProperty('lemurro') && window.lemurro.hasOwnProperty('guide') && window.lemurro.guide.hasOwnProperty('init')) {
                        lemurro.guide.init();
                    }
                } else {
                    var pageScript = window[pageName];

                    if (pageScript !== undefined) {
                        if (pageScript.hasOwnProperty('init')) {
                            pageScript.init();
                        }
                    }
                }
            }
        }
    });
};
/**
 * Отображение ошибок
 *
 * @param {array} errors Массив ошибок
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.showErrors = function (errors) {
    if (errors.length === 1 && errors[0].status === '401 Unauthorized') {
        lemurro.authScreen('show');
    } else if (errors.length === 1 && errors[0].status === '403 Forbidden') {
        var redirect = true;

        if (errors[0].hasOwnProperty('meta') && errors[0].meta.hasOwnProperty('redirect')) {
            redirect = errors[0].meta.redirect;
        }

        if (redirect) {
            location.assign(location.origin + '/403');
        } else {
            lemurro._showError(errors[0].code, errors[0].title);
        }
    } else {
        for (var i in errors) {
            lemurro._showError(errors[i].code, errors[i].title);
        }
    }
};

/**
 * Покажем ошибку
 *
 * @param {string} errCode  Код ошибки
 * @param {string} errTitle Текст ошибки
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro._showError = function (errCode, errTitle) {
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
/**
 * Проверка сессии при запуске приложения
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */

/**
 * Объект элемента
 *
 * @type {object}
 */
lemurro.auth = {};

/**
 * ИД таймера
 *
 * @type {int|null}
 *
 * @public
 */
lemurro.auth._timerID = null;
/**
 * Запуск таймера
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.auth._runTimer = function () {
    if (lemurro.auth._timerID !== null) {
        clearInterval(lemurro.auth._timerID);
    }

    lemurro.auth._timerID = setInterval(function () {
        var formCode  = $('#js-auth__check-form');
        var elemTimer = formCode.find('.js-timer__count');
        var count     = parseInt(elemTimer.text(), 10);

        if (count > 0) {
            elemTimer.text(--count);
        } else {
            clearInterval(lemurro.auth._timerID);
            formCode.find('.js-timer').hide();
            formCode.find('.js-resend').show();
        }
    }, 1000);
};
/**
 * Проверка сессии
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.auth.check = function () {
    lemurro.lightajax.get(false, pathServerAPI + 'auth/check', {}, function (result) {
        if (result.hasOwnProperty('errors')) {
            lemurro.showErrors(result.errors);
        } else {
            $('.js-user__auth-id').text(result.data.user.auth_id);

            lemurro.initPage();
        }
    });
};
/**
 * Проверка введенного кода
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.auth.checkCode = function () {
    var browser = bowser.getParser(window.navigator.userAgent);

    lemurro.lightajax.post(true, pathServerAPI + 'auth/code', {
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
        lemurro.lightajax.preloader('hide');

        if (result.hasOwnProperty('errors')) {
            $('#js-auth__check-form').find('input[name="auth_code"]').val('');

            lemurro.showErrors(result.errors);
        } else {
            localforage.setItem('sessionID', result.data.session, function () {
                lemurro.sessionID = result.data.session;
                lemurro.authScreen('hide');
                lemurro.auth.check();
            });
        }
    });
};
/**
 * Получение кода
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.auth.getCode = function () {
    lemurro.lightajax.get(true, pathServerAPI + 'auth/code', {
        'auth_id': $('#js-auth__get-form').find('input[name="auth_id"]').val()
    }, function (result) {
        lemurro.lightajax.preloader('hide');

        if (result.hasOwnProperty('errors')) {
            lemurro.showErrors(result.errors);
        } else {
            if (result.data.hasOwnProperty('message')) {
                console.log(result.data.message, 'AuthCode');
            }

            var formCode = $('#js-auth__check-form');

            formCode.find('.js-timer').show();
            formCode.find('.js-timer__count').text('60');
            formCode.find('.js-resend').hide();

            lemurro.auth._runTimer();

            $('#js-auth__get-form').hide();
            formCode.show();
        }
    });
};
/**
 * Сброс сессии
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.auth.logout = function () {
    lemurro.helper.showConfirm('Выход', 'Вы действительно хотите выйти из системы?', 'Да', 'Нет', null, null, function () {
        $('.js-user-data').html('<i class="fas fa-spinner fa-pulse"></i>');
        localforage.clear();
        lemurro.sessionID = '';
        lemurro.authScreen('show');
    }, null);
};
/**
 * Хелперы
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */

/**
 * Объект элемента
 *
 * @type {object}
 */
lemurro.helper = {};
/**
 * Очистка формы
 *
 * @param {object} container jQuery-объект контейнера
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.helper.clearFields = function (container) {
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
/**
 * Операции с табами
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */

/**
 * Объект элемента
 *
 * @type {object}
 */
lemurro.tabs = {};
/**
 * Покажем указанный таб
 *
 * @param {string} tabID Идентификатор нужного таба
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.tabs.showTab = function (tabID) {
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
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.tabs.tabInsertEdit = function (action) {
    var tabsLinks    = $('#js-tabs__links');
    var tabsContents = $('#js-tabs__contents');

    if (action === 'show') {
        tabsLinks.find('a[data-target="#tab-form"]').parent().show();
        tabsContents.find('#tab-form').addClass('active show');
        lemurro.tabs.showTab('tab-form');
    } else {
        tabsLinks.find('a[data-target="#tab-form"]').parent().hide();
        tabsContents.find('#tab-form').removeClass('active show');
        lemurro.tabs.showTab('tab-list');
    }
};
/**
 * Операции со справочниками
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */

/**
 * Объект элемента
 *
 * @type {object}
 */
lemurro.guide = {};

/**
 * Инициализация
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.guide.init = function () {
    /**
     * Тип справочника
     *
     * @type {string}
     */
    lemurro.guide.type = $('#js-page').attr('data-type');

    /**
     * Объект для хранения шаблонов
     *
     * @type {object}
     */
    lemurro.guide.templates = {
        item: Template7.compile($('#js-tpl-guide__item').html())
    };

    lemurro.guide._getData();
};
/**
 * Список элементов справочника
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.guide._getData = function () {
    lemurro.lightajax.get(true, pathServerAPI + 'guide/' + lemurro.guide.type, {}, function (result) {
        lemurro.lightajax.preloader('hide');

        if (result.hasOwnProperty('errors')) {
            lemurro.showErrors(result.errors);
        } else {
            $('#js-guide__loader').hide();

            if (result.data.count === 0) {
                $('#js-guide__empty').show();
            } else {
                var html = '';

                for (var i in result.data.items) {
                    html += lemurro.guide.templates.item(result.data.items[i]);
                }

                $('#js-guide__items').html(html);
                $('#js-guide__list').show();
            }

            if (
                result.data.js_class !== undefined
                && window.hasOwnProperty(result.data.js_class)
                && window[result.data.js_class].hasOwnProperty('init')
            ) {
                window[result.data.js_class].init();
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
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.guide.edit = function (id, callback) {
    lemurro.lightajax.get(true, pathServerAPI + 'guide/' + lemurro.guide.type + '/' + id, {}, function (result) {
        lemurro.lightajax.preloader('hide');

        if (result.hasOwnProperty('errors')) {
            lemurro.showErrors(result.errors);
        } else {
            var container = $('#js-guide-form');

            container.attr('data-id', id);
            container.find('.js-title').text('Редактирование записи');

            $('#js-guide__button-insert').hide();
            $('#js-guide__button-save').show();

            $('#js-tab-form-button').html('<i class="fas fa-pencil-alt"></i> Редактировать');

            lemurro.tabs.tabInsertEdit('show');

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
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.guide.insert = function (data, callback) {
    lemurro.lightajax.post(true, pathServerAPI + 'guide/' + lemurro.guide.type, {
        data: data
    }, function (result) {
        lemurro.lightajax.preloader('hide');

        if (result.hasOwnProperty('errors')) {
            lemurro.showErrors(result.errors);
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
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.guide.remove = function (id, name, callback) {
    swal({
        title            : 'Удаление записи',
        html             : 'Вы хотите удалить <strong>"' + name + '"</strong>?',
        type             : 'warning',
        showCancelButton : true,
        confirmButtonText: 'Да, удалить!',
        cancelButtonText : 'Отмена'
    }).then(function (result) {
        if (result.value) {
            lemurro.lightajax.post(true, pathServerAPI + 'guide/' + lemurro.guide.type + '/' + id + '/remove', {}, function (result) {
                lemurro.lightajax.preloader('hide');

                if (result.hasOwnProperty('errors')) {
                    lemurro.showErrors(result.errors);
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
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.guide.save = function (data, callback) {
    lemurro.lightajax.post(true, pathServerAPI + 'guide/' + lemurro.guide.type + '/' + data.id, {
        data: data
    }, function (result) {
        lemurro.lightajax.preloader('hide');

        if (result.hasOwnProperty('errors')) {
            lemurro.showErrors(result.errors);
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
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.guide.showInsertForm = function (callback) {
    var container = $('#js-guide-form');

    container.attr('data-id', '0');
    container.find('.js-title').text('Добавление записи');
    lemurro.helper.clearFields(container);

    $('#js-guide__button-insert').show();
    $('#js-guide__button-save').hide();

    $('#js-tab-form-button').html('<i class="fas fa-plus"></i> Добавить');

    lemurro.tabs.tabInsertEdit('show');

    callback();
};
/**
 * Работа с пользователями
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */

/**
 * Объект элемента
 *
 * @type {object}
 */
lemurro.users = {};
/**
 * Редактирование
 *
 * @param {integer}  id       ИД пользователя
 * @param {function} callback Функция обратного вызова
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.users.edit = function (id, callback) {
    lemurro.lightajax.get(true, pathServerAPI + 'users/' + id, {}, function (result) {
        lemurro.lightajax.preloader('hide');

        if (result.hasOwnProperty('errors')) {
            lemurro.showErrors(result.errors);
        } else {
            var container = $('#js-user-form');

            container.attr('data-id', id);
            container.find('.js-title').text('Редактирование пользователя');

            $('#js-user__button-insert').hide();
            $('#js-user__button-save').show();

            $('#js-tab-form-button').html('<i class="fas fa-pencil-alt"></i> Редактировать');

            lemurro.tabs.tabInsertEdit('show');

            callback(result);
        }
    });
};
/**
 * Список пользователей
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.users.getData = function () {
    lemurro.lightajax.get(true, pathServerAPI + 'users', {}, function (result) {
        lemurro.lightajax.preloader('hide');

        if (result.hasOwnProperty('errors')) {
            lemurro.showErrors(result.errors);
        } else {
            var html = '';

            for (var i in result.data.items) {
                html += users.templates.item(result.data.items[i]);
            }

            $('#js-users__items').html(html);

            localforage.getItem('lastSessionID', function (err, value) {
                if (value !== null) {
                    $('#js-users__items').find('.js-login-by-user').hide();
                }
            });
        }
    });
};
/**
 * Добавление
 *
 * @param {object}   data     Объект с данными
 * @param {function} callback Функция обратного вызова
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.users.insert = function (data, callback) {
    lemurro.lightajax.post(true, pathServerAPI + 'users', {
        data: data
    }, function (result) {
        lemurro.lightajax.preloader('hide');

        if (result.hasOwnProperty('errors')) {
            lemurro.showErrors(result.errors);
        } else {
            callback(result);
        }
    });
};
/**
 * Вход под указанным пользователем
 *
 * @param {integer} id ИД пользователя
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.users.loginByUser = function (id) {
    swal({
        title            : 'Войти под пользователем?',
        html             : '',
        type             : 'warning',
        showCancelButton : true,
        confirmButtonText: 'Да',
        cancelButtonText : 'Нет'
    }).then(function (result) {
        if (result.value) {
            lemurro.lightajax.post(true, pathServerAPI + 'users/login_by_user', {
                user_id: id
            }, function (result) {
                lemurro.lightajax.preloader('hide');

                if (result.hasOwnProperty('errors')) {
                    lemurro.showErrors(result.errors);
                } else {
                    localforage.setItem('lastSessionID', lemurro.sessionID, function () {
                        localforage.setItem('sessionID', result.data.session, function () {
                            location.replace(location.origin);
                        });
                    });
                }
            });
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
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.users.remove = function (id, name, callback) {
    swal({
        title            : 'Удаление пользователя',
        html             : 'Вы хотите удалить <strong>"' + name + '"</strong>?',
        type             : 'warning',
        showCancelButton : true,
        confirmButtonText: 'Да, удалить!',
        cancelButtonText : 'Отмена'
    }).then(function (result) {
        if (result.value) {
            lemurro.lightajax.post(true, pathServerAPI + 'users/' + id + '/remove', {}, function (result) {
                lemurro.lightajax.preloader('hide');

                if (result.hasOwnProperty('errors')) {
                    lemurro.showErrors(result.errors);
                } else {
                    callback(result);
                }
            });
        } else {

        }
    });
};
/**
 * Вернуться обратно
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.users.return = function () {
    localforage.getItem('lastSessionID', function (err, value) {
        var lastSessionID = value;

        if (lastSessionID === null) {
            swal('Ошибка', 'Прошлая сессия отсутствует', 'error');

            return;
        }

        swal({
            title            : 'Вернуться обратно?',
            html             : '',
            type             : 'warning',
            showCancelButton : true,
            confirmButtonText: 'Да',
            cancelButtonText : 'Нет'
        }).then(function (result) {
            if (result.value) {
                localforage.removeItem('lastSessionID', function () {
                    localforage.setItem('sessionID', lastSessionID, function () {
                        location.replace(location.origin);
                    });
                });
            }
        });
    });
};
/**
 * Изменение
 *
 * @param {object}   data     Объект с данными
 * @param {function} callback Функция обратного вызова
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.users.save = function (data, callback) {
    lemurro.lightajax.post(true, pathServerAPI + 'users/' + data.id, {
        data: data
    }, function (result) {
        lemurro.lightajax.preloader('hide');

        if (result.hasOwnProperty('errors')) {
            lemurro.showErrors(result.errors);
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
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.users.showInsertForm = function (callback) {
    var container = $('#js-user-form');

    container.attr('data-id', '0');
    container.find('.js-title').text('Добавление пользователя');
    lemurro.helper.clearFields(container);

    $('#js-user__button-insert').show();
    $('#js-user__button-save').hide();

    $('#js-tab-form-button').html('<i class="fas fa-plus"></i> Добавить');

    lemurro.tabs.tabInsertEdit('show');

    callback();
};