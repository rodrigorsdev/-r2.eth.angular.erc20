import { Component, OnInit, Inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { provider } from 'src/app/services/ethers.service';
import { ethers } from 'ethers';
import { AccountService } from 'src/app/services/account.service';
import { StorageService } from 'src/app/services/storage.service';
import { LocalStorageKeysEnum } from 'src/app/models/local-storage-keys.enum';
import { ContractService } from 'src/app/services/contract.service';

@Component({
  selector: 'app-wallet-card',
  templateUrl: './wallet-card.component.html',
  styleUrls: ['./wallet-card.component.css']
})
export class WalletCardComponent implements OnInit {

  address: string;
  balanceEther: string;
  balanceErc20: string;

  constructor(
    private modalService: NgbModal,
    private toastrService: ToastrService,
    private accountService: AccountService,
    private storage: StorageService
  ) { }

  ngOnInit(): void {
    this.address = this.storage.getLocalStorage(LocalStorageKeysEnum.connectedAddress);
    this.accountService.updateBalanceEthers(this.address);
    this.accountService.balanceEthers.subscribe((balance) => {
      this.balanceEther = balance;
    });
    this.accountService.updateBalanceErc20(this.address);
    this.accountService.balanceErc20.subscribe((balance) => {
      this.balanceErc20 = balance;
    });
  }

  openQrCodeModal(qrcodemodal) {
    this.modalService.open(qrcodemodal);
  }

  copyToClipboard() {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.address;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);

    this.toastrService.success('Success', 'Address copied to clipboard!', {
      progressBar: true
    });
  }

  updateBalance(){
    this.accountService.updateBalanceEthers(this.address);
    this.accountService.updateBalanceErc20(this.address);
  }

}
