import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { SignInModel } from 'src/app/models/signin-model';
import { StorageService } from 'src/app/services/storage.service';
import { LocalStorageKeysEnum } from 'src/app/models/local-storage-keys.enum';
import { ContractService } from 'src/app/services/contract.service';
import { ethers } from 'ethers';
import { provider } from '../../services/ethers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  form: FormGroup;
  model: SignInModel;

  constructor(
    @Inject(provider) private ethersProvider: ethers.providers.Web3Provider,
    private fb: FormBuilder,
    private storage: StorageService,
    private contractService: ContractService,
    private router: Router
  ) {

    this.form = this.fb.group({
      erc20Address: ['', [Validators.required]],
      remeberAddress: [true]
    });
  }

  ngOnInit(): void {
    const erc20Address = this.storage.getLocalStorage(
      LocalStorageKeysEnum.er20address
    );

    if (erc20Address) {
      this.form.patchValue({
        erc20Address
      });
    }
  }

  async signin() {
    this.ethersProvider = await this.ethersProvider;
    this.model = Object.assign({}, this.model, this.form.value);

    if (this.model.remeberAddress) {
      this.storage.setLocalStorage(
        LocalStorageKeysEnum.er20address,
        this.model.erc20Address);
    } else {
      this.storage.removeLocalStorage(LocalStorageKeysEnum.er20address);
    }

    this.storage.setLocalStorage(
      LocalStorageKeysEnum.connectedAddress, 
      this.ethersProvider._web3Provider['selectedAddress']);

    this.contractService.instanceContract(
      this.ethersProvider,
      this.model.erc20Address);

    this.router.navigate(['/pages/home']);
  }
}
