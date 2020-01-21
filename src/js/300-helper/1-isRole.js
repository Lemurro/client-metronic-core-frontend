/**
 * Проверка пользователя на наличие прав
 *
 * @param {string}   page            Раздел
 * @param {string}   access          Право доступа
 * @param {function} callbackSuccess Функция вызова при успешном получении данных
 * @param {function} callbackFail    Функция вызова при провале
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 * @version 21.01.2020
 */
lemurro.helper.isRole = function (page, access, callbackSuccess, callbackFail) {
    var _timer = setInterval(function () {
        if (lemurro.hasOwnProperty('userinfo')) {
            clearInterval(_timer);

            if (lemurro.userinfo.admin) {
                if (typeof callbackSuccess === 'function') {
                    callbackSuccess();
                }
            } else {
                var fail = true;

                if (lemurro.userinfo.roles.hasOwnProperty(page)) {
                    var i;

                    for (i in lemurro.userinfo.roles[page]) {
                        if (lemurro.userinfo.roles[page][i] === access) {
                            fail = false;

                            if (typeof callbackSuccess === 'function') {
                                callbackSuccess();
                            }
                        }
                    }
                }

                if (fail && typeof callbackFail === 'function') {
                    callbackFail();
                }
            }
        }
    }, 500);
};