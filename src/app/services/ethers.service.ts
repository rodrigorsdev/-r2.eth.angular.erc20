import { InjectionToken } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LocalStorageKeysEnum } from '../models/local-storage-keys.enum';
import { ethers } from 'ethers';

export const provider = new InjectionToken('provider', {
    providedIn: 'root',
    factory: async () => {
        try {
            // Metamask
            // const ethereum = window['ethereum'];
            // const provider = new ethers.providers.Web3Provider(ethereum);
            // await ethereum.enable();
            // return provider;

            //Infura
            const network = localStorage.getItem(LocalStorageKeysEnum.connectedNetwork);

            console.log(network);

            if (!network)
                throw new Error('Invalid network!');

            const provider = new ethers.providers.InfuraProvider(network);
            // network,
            // {
            //     projectId: environment.infura.projectId,
            //     projectSecret: environment.infura.projectSecret
            // });

            console.log(provider);

            return provider;
        } catch (err) {
            console.log(err);
            throw new Error('Error to create provider!');
        }
    }
});