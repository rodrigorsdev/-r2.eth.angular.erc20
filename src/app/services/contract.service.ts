import { Injectable } from '@angular/core';
import { ethers } from 'ethers';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ContractService {

    private _contractInstance = new BehaviorSubject<any>(null);

    get contractInstance() {
        return this._contractInstance.asObservable();
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