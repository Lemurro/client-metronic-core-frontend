/**
 * Проверка на наличие ошибки
 *
 * @param {array} result Массив ответа
 *
 * @return {boolean}
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 19.06.2020
 */
lemurro.hasErrors = function (result) {
    if (result.hasOwnProperty('errors')) {
        return true;
    }

    return false;
};
