import { Injectable } from '@angular/core';
import { ethers } from 'ethers';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
import { StorageService } from './storage.service';
import { LocalStorageKeysEnum } from '../models/local-storage-keys.enum';

@Injectable({
    providedIn: 'root'
})
export class ContractService {

    constructor(
        private storageService: StorageService
    ) { }

    private _contractInstance = new BehaviorSubject<any>(null);

    get contractInstance() {
        return this._contractInstance.asObservable();
    }

    public getLocalContractAddress() {
        return this.storageService.getLocalStorage(
            LocalStorageKeysEnum.er20address);
    }

    public setLocalContractAddress(address: string) {
        this.storageService.setLocalStorage(
            LocalStorageKeysEnum.er20address,
            address);
    }

    public removerLocalContractAddress() {
        this.storageService.removeLocalStorage(LocalStorageKeysEnum.er20address);
    }

    public instanceContract(provider, address) {
        const signer = provider.getSigner();
        this._contractInstance.next(new ethers.Contract(
            address,
            environment.erc20.abi,
            signer));
    }

    public resetContract() {
        this._contractInstance.next(null);;
    }
}