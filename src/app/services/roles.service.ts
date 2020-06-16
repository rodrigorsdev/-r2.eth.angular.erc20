import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ContractService } from './contract.service';
import { VerifyRoleModel } from '../models/verify-role.model';
import { AddRoleModel } from '../models/add-role.model';
import { RemoveRoleModel } from '../models/remove-role.model';

@Injectable({
    providedIn: 'root'
})
export class RoleService {
    private _verify = new BehaviorSubject<any>(null);
    private _addTransactionHash = new BehaviorSubject<any>(null);
    private _removeTransactionHash = new BehaviorSubject<any>(null);

    constructor(
        private contractService: ContractService
    ) { }

    get verifyResult() {
        return this._verify.asObservable();
    }

    get addTransactionHash() {
        return this._addTransactionHash.asObservable();
    }

    get removeTransactionHash() {
        return this._addTransactionHash.asObservable();
    }

    public verify(model: VerifyRoleModel) {
        this.contractService.contractInstance.subscribe(async (contractInstance) => {
            let result;
            if (contractInstance) {
                switch (model.role) {
                    case 'admin':
                        result = await contractInstance.isAdmin(model.address);
                        break;
                    case 'minter':
                        result = await contractInstance.isMinter(model.address);
                        break;
                    case 'burner':
                        result = await contractInstance.isBurner(model.address);
                        break;
                    default:
                        throw new Error('Invalid role!');
                }

                this._verify.next(result);
            }
        });
    }

    public add(model: AddRoleModel) {
        this.contractService.contractInstance.subscribe(async (contractInstance) => {
            let transaction;
            if (contractInstance) {
                switch (model.role) {
                    case 'admin':
                        transaction = await contractInstance.addAdmin(model.address);
                        break;
                    case 'minter':
                        transaction = await contractInstance.addMinter(model.address);
                        break;
                    case 'burner':
                        transaction = await contractInstance.addBurner(model.address);
                        break;
                    default:
                        throw new Error('Invalid role!');
                }

                this._addTransactionHash.next(transaction);
            }
        });
    }

    public remove(model: RemoveRoleModel) {
        this.contractService.contractInstance.subscribe(async (contractInstance) => {
            let transaction;
            if (contractInstance) {
                switch (model.role) {
                    case 'admin':
                        transaction = await contractInstance.removeAdmin(model.address);
                        break;
                    case 'minter':
                        transaction = await contractInstance.removeMinter(model.address);
                        break;
                    case 'burner':
                        transaction = await contractInstance.removeBurner(model.address);
                        break;
                    default:
                        throw new Error('Invalid role!');
                }

                this._removeTransactionHash.next(transaction);
            }
        });
    }
}