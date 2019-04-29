/**
 * Очистка строки для решения проблемы утечки памяти
 *
 * @url https://habr.com/ru/post/449368/
 *
 * @param {string} str Строка для очистки
 *
 * @version 29.04.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.helper.clearString = function (str) {
    return str.length < 13 ? str : str.split('').join('');
};