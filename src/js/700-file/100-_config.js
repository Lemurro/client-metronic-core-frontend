/**
 * Настройка плагина simple-ajax-uploader
 *
 * @version 10.01.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.file._config = function () {
    ss.uploadSetup({
        name          : 'uploadfile',
        multiple      : true,
        multipleSelect: true,
        multipart     : true,
        hoverClass    : 'hover',
        focusClass    : 'focus',
        responseType  : 'json',
        customHeaders : {
            'X-SESSION-ID': lemurro.sessionID,
            'X-UTC-OFFSET': moment().utcOffset()
        }
    });
};