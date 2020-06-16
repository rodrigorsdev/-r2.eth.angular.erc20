import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ContractService } from './contract.service';

@Injectable({
    providedIn: 'root'
})
export class LifecycleService {
    private _paused = new BehaviorSubject<any>(null);
    private _pauseTransactionHash = new BehaviorSubject<any>(null);
    private _unpauseTransactionHash = new BehaviorSubject<any>(null);

    constructor(
        private contractService: ContractService
    ) { }

    get pausedResult() {
        return this._paused.asObservable();
    }

    get pauseTransactionHash() {
        return this._pauseTransactionHash.asObservable();
    }

    get unpauseTransactionHash() {
        return this._unpauseTransactionHash.asObservable();
    }

    public paused() {
        this.contractService.contractInstance.subscribe(async (contractInstance) => {
            if (contractInstance) {
                const result = await contractInstance.paused();
                this._paused.next(result);
            }
        });
    }

    public pause(){
        this.contractService.contractInstance.subscribe(async (contractInstance) => {
            if (contractInstance) {
                const result = await contractInstance.pause();
                this._pauseTransactionHash.next(result);
            }
        });
    }

    public unpause(){
        this.contractService.contractInstance.subscribe(async (contractInstance) => {
            if (contractInstance) {
                const result = await contractInstance.unpause();
                this._unpauseTransactionHash.next(result);
            }
        });
    }
}