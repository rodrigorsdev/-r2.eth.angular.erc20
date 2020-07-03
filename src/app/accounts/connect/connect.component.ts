import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SignInModel } from 'src/app/models/signin-model';
import { ContractService } from 'src/app/services/contract.service';
import { AccountService } from 'src/app/services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {

  form: FormGroup;
  model: SignInModel;

  constructor(
    private fb: FormBuilder,
    private contractService: ContractService,
    private accountService: AccountService,
    private router: Router
  ) {

    this.form = this.fb.group({
      erc20Address: ['', [Validators.required]],
      network: ['rinkeby', [Validators.required]],
      remeberAddress: [true]
    });
  }

  ngOnInit(): void {
    const erc20Address = this.contractService.getLocalContractAddress();

    if (erc20Address) {
      this.form.patchValue({
        erc20Address
      });
    }
  }

  async connect() {
    this.model = Object.assign({}, this.model, this.form.value);

    if (this.model.remeberAddress) {
      this.contractService.setLocalContractAddress(
        this.model.erc20Address);
    } else {
      this.contractService.removerLocalContractAddress();
    }

    this.accountService.setConectedNetwork(this.model.network);

    this.router.navigate(['/pages/home']);
  }

}
