import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MintToModel } from 'src/app/models/mint-to.model';
import { provider } from 'src/app/services/ethers.service';
import { ethers } from 'ethers';
import { TokenService } from 'src/app/services/token.service';
import { CustomValidators } from 'ngx-custom-validators';
import { link } from 'src/app/utils/transaction.util';

@Component({
  selector: 'app-mint-to',
  templateUrl: './mint-to.component.html',
  styleUrls: ['./mint-to.component.css']
})
export class MintToComponent implements OnInit {

  form: FormGroup;
  result: string;
  model: MintToModel;

  constructor(
    @Inject(provider) private ethersProvider: ethers.providers.Web3Provider,
    private fb: FormBuilder,
    private tokenService: TokenService
  ) { 
    this.form = this.fb.group({
      to: ['', [Validators.required, CustomValidators.rangeLength([42, 42])]],
      amount: ['', [Validators.required, CustomValidators.number]]
    });
  }

  async ngOnInit() {
    this.ethersProvider = await this.ethersProvider;

    this.tokenService.mintTransactionHash.subscribe((result) => {
      if (result)
        this.result = link(this.ethersProvider._web3Provider['networkVersion'], result);
    });
  }

  mintTo(){
    this.model = Object.assign({}, this.form.value);
    this.tokenService.mintTo(this.model);
  }
}
