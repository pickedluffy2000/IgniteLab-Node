/* eslint-disable prettier/prettier */
export class NotificationNotFound extends Error {
    constructor() {
        super("notification not found.");
    }
}