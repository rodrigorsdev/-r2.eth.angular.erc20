import { InjectionToken } from '@angular/core';
import { ethers } from 'ethers';

export const provider = new InjectionToken('provider', {
    providedIn: 'root',
    factory: async () => {
        try {
            const ethereum = window['ethereum'];
            const provider = new ethers.providers.Web3Provider(ethereum);
            await ethereum.enable();
            return provider;
        } catch (err) {
            throw new Error('Non-Ethereum browser detected. You should consider trying Mist or MetaMask!');
        }
    }
});