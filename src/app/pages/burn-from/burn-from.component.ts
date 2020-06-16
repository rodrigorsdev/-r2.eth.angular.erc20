import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BurnFromModel } from 'src/app/models/burn-from.model';
import { provider } from 'src/app/services/ethers.service';
import { ethers } from 'ethers';
import { TokenService } from 'src/app/services/token.service';
import { CustomValidators } from 'ngx-custom-validators';
import { link } from 'src/app/utils/transaction.util';

@Component({
  selector: 'app-burn-from',
  templateUrl: './burn-from.component.html',
  styleUrls: ['./burn-from.component.css']
})
export class BurnFromComponent implements OnInit {

  form: FormGroup;
  result: string;
  model: BurnFromModel;

  constructor(
    @Inject(provider) private ethersProvider: ethers.providers.Web3Provider,
    private fb: FormBuilder,
    private tokenService: TokenService
  ) { 
    this.form = this.fb.group({
      from: ['', [Validators.required, CustomValidators.rangeLength([42, 42])]],
      amount: ['', [Validators.required, CustomValidators.number]]
    });
  }

  async ngOnInit() {
    this.ethersProvider = await this.ethersProvider;
    this.tokenService.burnTransactionHash.subscribe((result) => {
      if (result)
        this.result = link(this.ethersProvider._web3Provider['networkVersion'], result);
    });
  }

  burnFrom(){
    this.model = Object.assign({}, this.form.value);
    this.tokenService.burnFrom(this.model);
  }
}