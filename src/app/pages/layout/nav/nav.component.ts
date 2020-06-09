import { Component, OnInit, Inject } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { StorageService } from 'src/app/services/storage.service';
import { LocalStorageKeysEnum } from 'src/app/models/local-storage-keys.enum';
import { ContractService } from 'src/app/services/contract.service';
import { provider } from 'src/app/services/ethers.service';
import { ethers } from 'ethers';
import { network } from '../../../utils/network.util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isCollapsed: boolean;
  isToggled: boolean;

  erc20ContractAddress: string;
  totalSupply: number;
  networkName: string;

  constructor(
    private sidebarService: SidebarService,
    @Inject(provider) private ethersProvider: ethers.providers.Web3Provider,
    private storage: StorageService,
    private contractService: ContractService,
    private router: Router
  ) { }

  async ngOnInit() {
    this.ethersProvider = await this.ethersProvider;

    this.erc20ContractAddress = this.storage.getLocalStorage(
      LocalStorageKeysEnum.er20address
    );

    this.contractService.contractInstance.subscribe(async (contractInstance) => {
      if (contractInstance)
        this.totalSupply = await contractInstance.totalSupply();
    });

    this.networkName = network(this.ethersProvider._web3Provider['networkVersion']);
  }

  toggleSidebar() {
    this.isToggled = !this.isToggled;
    this.sidebarService.changeVisibility(this.isToggled);
  }

  signout() {
    this.contractService.resetContract();
    this.storage.removeLocalStorage(LocalStorageKeysEnum.connectedAddress);
    this.router.navigate(['/accounts/signin']);
  }
}
