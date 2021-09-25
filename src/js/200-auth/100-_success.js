/**
 * Проверка сессии и загрузка данных о пользователе прошли успешно
 */
lemurro.auth._success = function () {
    // Приложение успешно стартовало
    app.started = true;

    // Установим идентификатор пользователя в верхнем меню
    $('header').find('.js-user__auth-id')
        .text(lemurro.userinfo.first_name + ' ' + lemurro.userinfo.last_name);

    console.log('appVersionFront', app.version);
    console.log('appVersionBack', lemurro.userinfo['last_app_version']);

    if (lemurro.userinfo['last_app_version'] !== '0' && lemurro.userinfo['last_app_version'] !== app.version) {
        toastr.options = {
            closeButton: true,
            debug: false,
            newestOnTop: false,
            progressBar: false,
            positionClass: 'toast-top-right',
            preventDuplicates: true,
            onclick: null,
            showDuration: '1000',
            hideDuration: '1000',
            timeOut: '0',
            extendedTimeOut: '0',
            showEasing: 'swing',
            hideEasing: 'linear',
            showMethod: 'fadeIn',
            hideMethod: 'fadeOut',
        };

        toastr.error('Пожалуйста, перезагрузите страницу для применения обновлений', 'Обновление');
    }

    // Скрываем более ненужный оверлей прелоадера
    $('#js-preloader-overlay').hide();

    // Запустим инициализацию приложения и передадим callback для выполнения
    app.init(lemurro._loadPage);
};