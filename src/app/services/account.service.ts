import { Injectable, Inject } from '@angular/core';
import { StorageService } from './storage.service';
import { LocalStorageKeysEnum } from '../models/local-storage-keys.enum';

@Injectable({
    providedIn: 'root'
})
export class AccountService {

    constructor(
        private storageService: StorageService
    ) { }

    setConectedAddress(address: string) {
        this.storageService.setLocalStorage(
            LocalStorageKeysEnum.connectedAddress,
            address);
    }

    getConnectedAddress(): string {
        return this.storageService.getLocalStorage(
            LocalStorageKeysEnum.connectedAddress);
    }

    isConnected(): boolean {
        if (!this.getConnectedAddress())
            return false;
        return true;
    }

    removeConnectedAddress() {
        this.storageService.removeLocalStorage(
            LocalStorageKeysEnum.connectedAddress);
    }

    setConectedNetwork(network: string) {
        this.storageService.setLocalStorage(
            LocalStorageKeysEnum.connectedNetwork,
            network);
    }

    getConnectedNetwork() : string  {
        return this.storageService.getLocalStorage(
            LocalStorageKeysEnum.connectedNetwork);
    }

    removeConnectedNetwork() {
        this.storageService.removeLocalStorage(
            LocalStorageKeysEnum.connectedNetwork);
    }
}