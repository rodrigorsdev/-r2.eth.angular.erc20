import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TokenService } from 'src/app/services/token.service';
import { CustomValidators } from 'ngx-custom-validators';
import { TransferModel } from 'src/app/models/transfer.model';
import { link } from '../../utils/transaction.util';
import { provider } from 'src/app/services/ethers.service';
import { ethers } from 'ethers';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  form: FormGroup;
  transferResult: string;
  model: TransferModel;

  constructor(
    @Inject(provider) private ethersProvider: ethers.providers.Web3Provider,
    private fb: FormBuilder,
    private tokenService: TokenService
  ) {
    this.form = this.fb.group({
      to: ['', [Validators.required, CustomValidators.rangeLength([42, 42])]],
      value: ['', [Validators.required, CustomValidators.number]]
    });
  }

  async ngOnInit() {
    this.ethersProvider = await this.ethersProvider;

    this.tokenService.transferTransactionHash.subscribe((result) => {

      // if (result)
        // this.transferResult = link(this.ethersProvider._web3Provider['networkVersion'], result);
    });
  }

  transfer() {
    this.model = Object.assign({}, this.form.value);
    this.tokenService.transfer(this.model);
  }
}