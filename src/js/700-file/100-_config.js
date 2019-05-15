/**
 * Настройка плагина simple-ajax-uploader
 *
 * @version 15.05.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.file._config = function () {
    ss.uploadSetup({
        url           : pathServerAPI + 'file/upload',
        name          : 'uploadfile',
        hoverClass    : 'hover',
        focusClass    : 'focus',
        responseType  : 'json',
        multiple      : true,
        multipleSelect: true,
        customHeaders : {
            'X-SESSION-ID': lemurro.sessionID,
            'X-UTC-OFFSET': moment().utcOffset()
        }
    });
};