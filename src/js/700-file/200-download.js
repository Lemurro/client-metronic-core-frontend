/**
 * Скачивание файла
 *
 * @param {integer|string} fileid   ИД постоянного файла или имя временного файла
 * @param {string}         filename ИД файла
 *
 * @version 15.05.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.file.download = function (fileid, filename) {
    lemurro.lightajax.post(true, pathServerAPI + 'file/download/prepare', {
        fileid: fileid,
        filename: filename
    }, function (result) {
        lemurro.lightajax.preloader('hide');

        if (result.hasOwnProperty('errors')) {
            lemurro.showErrors(result.errors);
        } else {
            window.open(pathServerAPI + 'file/download/run?token=' + encodeURI(result.data.token), 'Download file');
        }
    });
};