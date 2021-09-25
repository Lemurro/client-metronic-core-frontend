/**
 * Проверка сессии при запуске приложения
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 11.05.2020
 */
lemurro.auth = {};

/**
 * ИД таймера
 *
 * @type {int|null}
 */
lemurro.auth._timerID = null;

/**
 * Гео-информация
 *
 * @type {object}
 */
lemurro.auth._geoip = {};