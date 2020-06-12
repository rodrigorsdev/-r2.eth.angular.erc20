import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ContractService } from './contract.service';

@Injectable({
    providedIn: 'root'
})
export class TokenService {
    private _totalSupply = new BehaviorSubject<any>(null);
    private _name = new BehaviorSubject<any>(null);
    private _symbol = new BehaviorSubject<any>(null);
    private _balance = new BehaviorSubject<any>(null);
    private _allowanceNumber = new BehaviorSubject<any>(null);

    constructor(
        private contractService: ContractService
    ) { }

    get totalSupply() {
        return this._totalSupply.asObservable();
    }

    get name() {
        return this._name.asObservable();
    }

    get symbol() {
        return this._symbol.asObservable();
    }

    get balance() {
        return this._balance.asObservable();
    }

    get allowanceNumber() {
        return this._allowanceNumber.asObservable();
    }

    public setTotalSupply() {
        this.contractService.contractInstance.subscribe(async (contractInstance) => {
            const result = await contractInstance.totalSupply();
            this._totalSupply.next(result);
        });
    }

    public setName() {
        this.contractService.contractInstance.subscribe(async (contractInstance) => {
            const result = await contractInstance.name();
            this._name.next(result);
        });
    }

    public setSymbol() {
        this.contractService.contractInstance.subscribe(async (contractInstance) => {
            const result = await contractInstance.symbol();
            this._symbol.next(result);
        });
    }

    public updateBalance(address: string) {
        this.contractService.contractInstance.subscribe(async (contractInstance) => {
            if (contractInstance) {
                const balance = await contractInstance.balanceOf(address);
                this._balance.next(Number(balance).toString());
            }
        })
    }

    public allowance(owner: string, spender: string) {
        this.contractService.contractInstance.subscribe(async (contractInstance) => {
            if (contractInstance) {
                const allowance = await contractInstance.allowance(owner, spender);
                this._allowanceNumber.next(Number(allowance).toString());
            }
        });
    }
}