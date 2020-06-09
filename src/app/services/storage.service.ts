import { Injectable } from "@angular/core";
import { LocalStorageKeysEnum } from '../models/local-storage-keys.enum';

@Injectable({
    providedIn:'root'
})
export class StorageService{
    public setLocalStorage(key: LocalStorageKeysEnum, json: string) {
        localStorage.setItem(key, JSON.stringify(json));
    }

    public getLocalStorage(key: LocalStorageKeysEnum) {
        return JSON.parse(localStorage.getItem(key));
    }

    public removeLocalStorage(key: LocalStorageKeysEnum) {
        localStorage.removeItem(key);
    }

    public clearLocalStorage() {
        localStorage.clear();
    }
}