/**
 * Скачивание файла
 *
 * @param {integer} fileid ИД файла
 *
 * @version 21.02.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.file.download = function (fileid) {
    lemurro.lightajax.post(true, pathServerAPI + 'file/download/prepare', {
        fileid: fileid
    }, function (result) {
        lemurro.lightajax.preloader('hide');

        if (result.hasOwnProperty('errors')) {
            lemurro.showErrors(result.errors);
        } else {
            window.open(pathServerAPI + 'file/download/run?token=' + encodeURI(result.data.token), 'Download file');
        }
    });
};