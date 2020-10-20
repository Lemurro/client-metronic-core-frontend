/**
 * Получение geo-информации
 *
 * @param {function} callback
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 20.10.2020
 */
lemurro.auth._getGeoIP = function (callback) {
    var waiterCount = 1;

    jQuery.ajax('https://api.sypexgeo.net', {
        method: 'GET',
        data: {},
        success: function (result) {
            lemurro.auth._geoip = result;
        },
        complete: function () {
            waiterCount = 0;
        },
        error: function () {},
    });

    var waiter = setInterval(function () {
        if (waiterCount === 0) {
            clearInterval(waiter);

            if (typeof callback === 'function') {
                callback();
            }
        }
    }, 500);
};
