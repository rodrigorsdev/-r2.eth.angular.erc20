import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-wallet-card',
  templateUrl: './wallet-card.component.html',
  styleUrls: ['./wallet-card.component.css']
})
export class WalletCardComponent implements OnInit {

  address: string = '0x17cA6A08758F4A078B9c53ca25E6F6736dF34094';
  balanceErc20: string = '100';
  balanceEther: string = '5';

  constructor(
    private modalService: NgbModal,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
  }

  openQrCodeModal(qrcodemodal){
    this.modalService.open(qrcodemodal);
  }

  copyToClipboard(){
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

}
