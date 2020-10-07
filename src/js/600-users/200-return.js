/**
 * Вернуться обратно
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 07.10.2020
 */
lemurro.users.return = function () {
    localforage.getItem('lastSessionID', function (err, value) {
        var lastSessionID = value;

        if (lastSessionID === null) {
            Swal.fire('Ошибка', 'Прошлая сессия отсутствует', 'error');

            return;
        }

        Swal.fire({
            title: 'Вернуться обратно?',
            html: '',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Да',
            cancelButtonText: 'Нет',
        }).then(function (result) {
            if (result.value) {
                localforage.removeItem('lastSessionID', function () {
                    localforage.setItem('sessionID', lastSessionID, function () {
                        location.reload();
                    });
                });
            }
        });
    });
};
