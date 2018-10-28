/**
 * Проверка пользователя на наличие прав
 *
 * @param {string}   page            Раздел
 * @param {string}   access          Право доступа
 * @param {function} callbackSuccess Функция вызова при успешном получении данных
 * @param {function} callbackFail    Функция вызова при провале
 *
 * @return {boolean}
 *
 * @version 28.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.helper.isRole = function (page, access, callbackSuccess, callbackFail) {
    var _timer = setInterval(function () {
        if (lemurro.hasOwnProperty('userinfo')) {
            clearInterval(_timer);

            if (lemurro.userinfo.admin) {
                callbackSuccess();

                return true;
            } else {
                if (lemurro.userinfo.roles.hasOwnProperty(page)) {
                    var i;

                    for (i in lemurro.userinfo.roles[page]) {
                        if (lemurro.userinfo.roles[page][i] === access) {
                            if (!isEmpty(callbackSuccess)) {
                                callbackSuccess();

                                return true;
                            }
                        }
                    }
                }

                if (!isEmpty(callbackFail)) {
                    callbackFail();

                    return false;
                }
            }
        }
    }, 500);
};