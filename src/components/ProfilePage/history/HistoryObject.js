export default class HistoryObject {

    constructor(historyId, action, bookId, user) {
        this.historyId = historyId;
        this.action = action;
        this.bookId = bookId;
        this.user = user;
        let date = new Date();
        this.date = this.#getDateFormat(date);
        this.time = date.toLocaleTimeString('en-GB', {
            hour: "numeric",
            minute: "numeric"
        });
    }

    #getDateFormat(date) {
        let day = date.getDate();
        let month = date.getMonth() + 1;

        if (day < 10)
            day = '0' + day;
        if (month < 10)
            month = `0${month}`;

        return `${day}.${month}.${date.getFullYear()}`;
    }
}