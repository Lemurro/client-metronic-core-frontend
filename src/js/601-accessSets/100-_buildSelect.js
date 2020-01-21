/**
 * Собрать выпадающий список наборов прав доступа
 *
 * @return {object}
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 * @version 21.01.2020
 */
lemurro.accessSets._buildSelect = function () {
    var containerSelect = $('#js-user__access-sets');
    var htmlSelect      = '';

    $('#js-access-sets__items').find('tr').each(function () {
        var item = $(this);

        var id   = item.attr('data-item-id');
        var name = item.find('.name').text();

        htmlSelect += '<option value="' + id + '">' + name + '</option>';
    });

    containerSelect.find('select').html(htmlSelect);

    if (notEmpty(htmlSelect)) {
        containerSelect.show();
    } else {
        containerSelect.hide();
    }
};