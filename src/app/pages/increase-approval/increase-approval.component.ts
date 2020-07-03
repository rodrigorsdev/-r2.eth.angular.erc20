import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IncreaseApprovalModel } from 'src/app/models/increase-approval.model';
import { provider } from 'src/app/services/ethers.service';
import { ethers } from 'ethers';
import { TokenService } from 'src/app/services/token.service';
import { CustomValidators } from 'ngx-custom-validators';
import { link } from 'src/app/utils/transaction.util';

@Component({
  selector: 'app-increase-approval',
  templateUrl: './increase-approval.component.html',
  styleUrls: ['./increase-approval.component.css']
})
export class IncreaseApprovalComponent implements OnInit {

  form: FormGroup;
  model: IncreaseApprovalModel;
  result: string;

  constructor(
    @Inject(provider) private ethersProvider: ethers.providers.Web3Provider,
    private fb: FormBuilder,
    private tokenService: TokenService
  ) {
    this.form = this.fb.group({
      spender: ['', [Validators.required, CustomValidators.rangeLength([42, 42])]],
      value: ['', [Validators.required, CustomValidators.number]]
    });
  }

  async ngOnInit() {
    this.ethersProvider = await this.ethersProvider;
    this.tokenService.increaseApprovalTransactionHash.subscribe((result) => {
      // if (result)
        // this.result = link(this.ethersProvider._web3Provider['networkVersion'], result);
    });
  }

  increaseApproval() {
    this.model = Object.assign({}, this.form.value);
    this.tokenService.increaseApproval(this.model);
  }
}
