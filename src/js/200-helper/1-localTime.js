/**
 * Преобразование серверного времени в локальное и возврат строки указанного формата
 *
 * @param {string} datetime Дата и время в формате "ГГГГ-ММ-ДД ЧЧ:ММ:СС"
 * @param {string} format   Возвращаемый формат (Moment.js)
 *
 * @version 12.12.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.helper.localTime = function (datetime, format) {
    if (isEmpty(datetime) || isEmpty(format)) {
        return datetime;
    } else {
        return moment(datetime).local().format(format);
    }
};