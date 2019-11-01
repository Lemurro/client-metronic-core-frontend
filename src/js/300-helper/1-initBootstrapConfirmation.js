/**
 * Подключим BootstrapConfirmation
 *
 * @param {JQuery} container
 * @param {Object} options
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 * @version 31.10.2019
 */
lemurro.helper.initBootstrapConfirmation = function (container, options) {
    if (typeof (options) === 'undefined') {
        options = {};
    }

    var settings = Object.assign({
        title         : 'Вы уверены?',
        singleton     : true,
        popout        : true,
        rootSelector  : '[data-toggle=confirmation]',
        btnOkLabel    : 'Да',
        btnOkClass    : 'btn btn-sm btn-success',
        btnCancelLabel: 'Нет',
        btnCancelClass: 'btn btn-sm btn-danger'
    }, options);

    container.find(settings.rootSelector).confirmation(settings);
};