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