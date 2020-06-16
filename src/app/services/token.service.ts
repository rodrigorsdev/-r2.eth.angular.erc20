import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ContractService } from './contract.service';
import { ApproveModel } from '../models/approve.model';
import { IncreaseApprovalModel } from '../models/increase-approval.model';
import { MintToModel } from '../models/mint-to.model';
import { BurnFromModel } from '../models/burn-from.model';
import { AllowanceModel } from '../models/allowance.model';
import { TransferModel } from '../models/transfer.model';
import { TransferFromModel } from '../models/transfer-from.model';

@Injectable({
    providedIn: 'root'
})
export class TokenService {
    private _totalSupply = new BehaviorSubject<any>(null);
    private _name = new BehaviorSubject<any>(null);
    private _symbol = new BehaviorSubject<any>(null);
    private _balance = new BehaviorSubject<any>(null);
    private _allowanceNumber = new BehaviorSubject<any>(null);
    private _transferTransactionHash = new BehaviorSubject<any>(null);
    private _transferFromTransactionHash = new BehaviorSubject<any>(null);
    private _approveTransactionHash = new BehaviorSubject<any>(null);
    private _increaseApprovalTransactionHash = new BehaviorSubject<any>(null);
    private _decreaseApprovalTransactionHash = new BehaviorSubject<any>(null);
    private _mintToTransactionHash  = new BehaviorSubject<any>(null);
    private _burnFromTransactionHash  = new BehaviorSubject<any>(null);

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

    get transferTransactionHash() {
        return this._transferTransactionHash.asObservable();
    }

    get transferFromTransactionHash() {
        return this._transferFromTransactionHash.asObservable();
    }

    get approveTransactionHash() {
        return this._approveTransactionHash.asObservable();
    }

    get increaseApprovalTransactionHash() {
        return this._increaseApprovalTransactionHash.asObservable();
    }

    get decreaseApprovalTransactionHash() {
        return this._decreaseApprovalTransactionHash.asObservable();
    }

    get mintTransactionHash() {
        return this._mintToTransactionHash.asObservable();
    }

    get burnTransactionHash() {
        return this._burnFromTransactionHash.asObservable();
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

    public allowance(model: AllowanceModel) {
        this.contractService.contractInstance.subscribe(async (contractInstance) => {
            if (contractInstance) {
                const allowance = await contractInstance.allowance(model.owner, model.spender);
                this._allowanceNumber.next(Number(allowance).toString());
            }
        });
    }

    public transfer(model: TransferModel) {
        console.log(model);
        this.contractService.contractInstance.subscribe(async (contractInstance) => {
            if (contractInstance) {
                const transaction = await contractInstance.transfer(model.to, model.value);
                this._transferTransactionHash.next(transaction.hash);
            }
        });
    }

    public transferFrom(model: TransferFromModel) {
        this.contractService.contractInstance.subscribe(async (contractInstance) => {
            if (contractInstance) {
                const transaction = await contractInstance.transferFrom(model.from, model.to, model.value);
                this._transferFromTransactionHash.next(transaction.hash);
            }
        });
    }

    public approve(model: ApproveModel) {
        this.contractService.contractInstance.subscribe(async (contractInstance) => {
            if (contractInstance) {
                const transaction = await contractInstance.approve(model.spender, model.value);
                this._approveTransactionHash.next(transaction.hash);
            }
        });
    }

    public increaseApproval(model: IncreaseApprovalModel) {
        this.contractService.contractInstance.subscribe(async (contractInstance) => {
            if (contractInstance) {
                const transaction = await contractInstance.increaseApproval(model.spender, model.value);
                this._increaseApprovalTransactionHash.next(transaction.hash);
            }
        });
    }

    public decreaseApproval(model: IncreaseApprovalModel) {
        this.contractService.contractInstance.subscribe(async (contractInstance) => {
            if (contractInstance) {
                const transaction = await contractInstance.decreaseApproval(model.spender, model.value);
                this._decreaseApprovalTransactionHash.next(transaction.hash);
            }
        });
    }

    public mintTo(model: MintToModel) {
        this.contractService.contractInstance.subscribe(async (contractInstance) => {
            if (contractInstance) {
                const transaction = await contractInstance.mintTo(model.to, model.amount);
                this._mintToTransactionHash.next(transaction.hash);
            }
        });
    }

    public burnFrom(model: BurnFromModel) {
        this.contractService.contractInstance.subscribe(async (contractInstance) => {
            if (contractInstance) {
                const transaction = await contractInstance.burnFrom(model.from, model.amount);
                this._burnFromTransactionHash.next(transaction.hash);
            }
        });
    }
}