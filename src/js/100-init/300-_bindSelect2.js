/**
 * Подключим Select2
 */
lemurro._bindSelect2 = function () {
    $('#js-page').find('.js-select2').each(function () {
        let object = $(this)
        let modal = object.closest('.modal')
        let options = {}


        if (modal.length > 0) {
            options.dropdownParent = $('#' + modal.attr('id'))
        }

        $(this).select2(options)
    })
};