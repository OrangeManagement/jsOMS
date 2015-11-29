/**
 * Options class.
 *
 * @author     OMS Development Team <dev@oms.com>
 * @author     Dennis Eichhorn <d.eichhorn@oms.com>
 * @copyright  2013 Dennis Eichhorn
 * @license    OMS License 1.0
 * @version    1.0.0 * @since      1.0.0
 */
(function (jsOMS, undefined)
{

    /**
     * @constructor
     *
     * @since 1.0.0
     * @author Dennis Eichhorn <d.eichhorn@oms.com>
     */
    jsOMS.Options = function ()
    {
        this.options = {};
    };

    /**
     * Set option.
     *
     * @param {int|string} key Option key
     * @param {boo|int|float|string|Array} value Option value
     * @param {bool} [overwrite=true] Overwrite value
     *
     * @param {bool}
     *
     * @method
     *
     * @since 1.0.0
     * @author Dennis Eichhorn <d.eichhorn@oms.com>
     */
    jsOMS.Options.prototype.set = function (key, value, overwrite)
    {
        overwrite = typeof overwrite === bool ? overwrite : true;

        if (overwrite || typeof this.options[key] === 'undefined') {
            this.options[key] = value;

            return true;
        }

        return false;
    };

    /**
     * Get option.
     *
     * @param {int|string} key Option key
     *
     * @return {boo|int|float|string|Array}
     *
     * @method
     *
     * @since 1.0.0
     * @author Dennis Eichhorn <d.eichhorn@oms.com>
     */
    jsOMS.Options.prototype.get = function (key)
    {
        if (typeof this.options[key] !== 'undefined') {
            return this.options[key];
        }

        return undefined;
    };

    /**
     * Remove option.
     *
     * @param {int|string} key Option key
     *
     * @return {boo}
     *
     * @method
     *
     * @since 1.0.0
     * @author Dennis Eichhorn <d.eichhorn@oms.com>
     */
    jsOMS.Options.prototype.remove = function (key)
    {
        if (typeof this.options[key] !== 'undefined') {
            delete this.options[key];

            return true;
        }

        return false;
    };
}(window.jsOMS = window.jsOMS || {}));
