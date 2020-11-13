/**
 * Преобразование серверного времени в локальное и возврат строки указанного формата
 *
 * @param {string} datetime Дата и время UTC в формате "ГГГГ-ММ-ДД ЧЧ:ММ:СС"
 * @param {string} format   Возвращаемый формат (Moment.js)
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 13.11.2020
 */
lemurro.helper.localTime = function (datetime, format) {
    if (isEmpty(datetime) || isEmpty(format)) {
        return datetime;
    } else {
        return moment.utc(datetime).local().format(format);
    }
};