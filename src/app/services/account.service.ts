import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { provider } from './ethers.service';
import { ethers } from 'ethers';
import { ContractService } from './contract.service';

@Injectable({
    providedIn: 'root'
})
export class AccountService {
    private _balanceEthers = new BehaviorSubject<any>(null);
    

    get balanceEthers() {
        return this._balanceEthers.asObservable();
    }

    constructor(
        @Inject(provider) private ethersProvider: ethers.providers.Web3Provider,
        private contractService: ContractService
    ) { }

    async updateBalanceEthers(address: string) {
        this.ethersProvider = await this.ethersProvider;
        const balance = await this.ethersProvider.getBalance(address);
        const formatedBalance = ethers.utils.formatEther(balance);
        this._balanceEthers.next(formatedBalance);
    }
}