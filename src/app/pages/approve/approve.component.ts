import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'ngx-custom-validators';
import { TokenService } from 'src/app/services/token.service';
import { link } from '../../utils/transaction.util';
import { provider } from 'src/app/services/ethers.service';
import { ethers } from 'ethers';
import { ApproveModel } from 'src/app/models/approve.model';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.css']
})
export class ApproveComponent implements OnInit {

  form: FormGroup;
  model: ApproveModel;
  approveResult: string;

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
    this.tokenService.approveTransactionHash.subscribe((result) => {
      // if (result)
        // this.approveResult = link(this.ethersProvider._web3Provider['networkVersion'], result);
    });
  }

  approve() {
    this.model = Object.assign({}, this.form.value);
    this.tokenService.approve(this.model);
  }
}