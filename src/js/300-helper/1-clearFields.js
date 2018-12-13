/**
 * Очистка формы
 *
 * @param {object} container jQuery-объект контейнера
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.helper.clearFields = function (container) {
    container.find('input[type="text"],input[type="password"],input[type="email"],input[type="number"],input[type="tel"],input[type="url"],input[type="date"],input[type="time"]')
        .val('');

    container.find('textarea').val('');

    container.find('select').each(function () {
        $(this).val(null).trigger('change');
    });

    container.find('input[type="checkbox"]').each(function () {
        $(this).prop('checked', false);
    });

    container.find('input[type="radio"]').each(function () {
        $(this).prop('checked', false);
    });
};