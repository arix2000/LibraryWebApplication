import LocalStorageKeys from "./LocalStorageKeys";

export default class FirstTimeManager {
    isFirstTimeKey = LocalStorageKeys.firstTime;

    isFirstTime() {
        const isFirstTime = localStorage.getItem(this.isFirstTimeKey);
        if (isFirstTime == null) {
            localStorage.setItem(this.isFirstTimeKey, "false");
            return true;
        }
        return false;
    }
}