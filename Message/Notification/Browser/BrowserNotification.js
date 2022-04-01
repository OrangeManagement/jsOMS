import { NotificationMessage } from '../NotificationMessage.js';

/**
 * Browser notification.
 *
 * @copyright Dennis Eichhorn
 * @license   OMS License 1.0
 * @version   1.0.0
 * @since     1.0.0
 */
export class BrowserNotification
{
    /**
     * @constructor
     *
     * @since 1.0.0
     */
    constructor ()
    {
        /** @type {number} status */
        this.status = 0;
    };

    /**
     * Set notification status.
     *
     * @param {number} status Notification status
     *
     * @return {void}
     *
     * @since 1.0.0
     */
    setStatus (status)
    {
        this.status = status;
    };

    /**
     * Ask for browser permission to create notifications
     *
     * @return {void}
     *
     * @since 1.0.0
     */
    requestPermission ()
    {
        /** global: Notification */
        if (Notification.permission !== 'granted' && Notification.permission !== 'denied') {
            Notification.requestPermission().then(function (permission) { });
        }
    };

    /**
     * Create notification
     *
     * @param {NotificationMessage} msg Notification
     *
     * @return {void}
     *
     * @since 1.0.0
     */
    send (msg)
    {
        /** global: Notification */
        if (Notification.permission === 'granted') {
            const notification = new Notification(msg.title, { body: msg.message, vibrate: [msg.vibrate ? 200 : 0] });

            setTimeout(notification.close.bind(notification), 5000);
        }
    };
};
