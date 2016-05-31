/**
 * Log Level enum.
 *
 * @author     OMS Development Team <dev@oms.com>
 * @author     Dennis Eichhorn <d.eichhorn@oms.com>
 * @copyright  2013 Dennis Eichhorn
 * @license    OMS License 1.0
 * @version    1.0.0 * @since      1.0.0
 */
(function (jsOMS)
{
    /** @namespace jsOMS.Log */
    jsOMS.Autoloader.defineNamespace('jsOMS.Log');

    jsOMS.Log.LogLevel = Object.freeze({
        EMERGENCY: 'emergency',
        ALERT: 'alert',
        CRITICAL: 'critical',
        ERROR: 'error',
        WARNING: 'warning',
        NOTICE: 'notice',
        INFO: 'info',
        DEBUG: 'debug'
    });
}(window.jsOMS = window.jsOMS || {}));
