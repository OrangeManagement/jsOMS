/**
 * Drag and drop class.
 *
 * @copyright  Dennis Eichhorn
 * @license    OMS License 1.0
 * @version    1.0.0
 * @since      1.0.0
 */
(function (jsOMS)
{
    "use strict";

    /** @namespace jsOMS.UI.DragNDrop*/
    jsOMS.Autoloader.defineNamespace('jsOMS.UI.DragNDrop');

    /**
     * @constructor
     *
     * @since 1.0.0
     */
    jsOMS.UI.DragNDrop = function (app)
    {
        this.app       = app;
        this.draggable = {};
        this.dragging  = null;
    };

    /**
     * Unbind element
     *
     * @param {Object} element DOM element
     *
     * @since 1.0.0
     */
    jsOMS.UI.DragNDrop.prototype.unbind = function (element)
    {
    };

    /**
     * Bind element
     *
     * @param {Object} id DOM element
     *
     * @since 1.0.0
     */
    jsOMS.UI.DragNDrop.prototype.bind = function (id)
    {
         if (typeof id !== 'undefined') {
            this.bindElement(id);
        } else {
            const elements = document.querySelectorAll('[draggable]'),
                length     = !elements ? 0 : elements.length;

            for (let i = 0; i < length; ++i) {
                if (typeof elements[i].getAttribute('id') !== 'undefined' && elements[i].getAttribute('id') !== null) {
                    this.bindElement(elements[i].getAttribute('id'));
                }
            }
        }
    };

    /**
     * Bind DOM elment
     *
     * @param {string} id DOM elment
     *
     * @since 1.0.0
     */
    jsOMS.UI.DragNDrop.prototype.bindElement = function (id)
    {
        const element = document.getElementById(id),
            self      = this;

        if (!element) {
            return;
        }

        element.addEventListener('dragstart', function(e) {
            if (self.dragging === null) {
                self.dragging                = this;
                e.dataTransfer.effectAllowed = 'move';
                e.dataTransfer.setData('text/html', this.innerHTML);
            }
        }, false);

        element.addEventListener('dragenter', function(e) {
            // todo: highlight
        }, false);

        element.addEventListener('dragover', function(e) {
            e.preventDefault();

            e.dataTransfer.dropEffect = 'move';
        }, false);

        element.addEventListener('dragleave', function(e) {
            e.preventDefault();

            // todo: don't highlight
        }, false);

        element.addEventListener('dragend', function(e) {
            e.preventDefault();

            // todo: reset all changes
        }, false);

        //element.addEventListener('drag', function(e) {});
        element.addEventListener('drop', function(e) {
            e.stopPropagation();
            e.preventDefault();

            if (self.dragging === this) {
                return;
            }

            self.dragging.innerHTML = this.innerHTML;
            this.innerHTML          = e.dataTransfer.getData('text/html');

            // todo: add to now destination
            // todo: remove from old destination

            self.dragging = null;
        }, false);
    }

}(window.jsOMS = window.jsOMS || {}));