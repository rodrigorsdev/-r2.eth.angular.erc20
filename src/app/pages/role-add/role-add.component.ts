import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AddRoleModel } from 'src/app/models/add-role.model';
import { RoleService } from 'src/app/services/roles.service';
import { provider } from 'src/app/services/ethers.service';
import { ethers } from 'ethers';
import { link } from 'src/app/utils/transaction.util';
import { CustomValidators } from 'ngx-custom-validators';

@Component({
  selector: 'app-role-add',
  templateUrl: './role-add.component.html',
  styleUrls: ['./role-add.component.css']
})
export class RoleAddComponent implements OnInit {

  form: FormGroup;
  result: string;
  model: AddRoleModel;

  constructor(
    @Inject(provider) private ethersProvider: ethers.providers.Web3Provider,
    private fb: FormBuilder,
    private rolesService: RoleService
  ) {
    this.form = this.fb.group({
      address: ['', [Validators.required, CustomValidators.rangeLength([42, 42])]],
      role: ['admin', [Validators.required]]
    });
   }

  ngOnInit(): void {
    this.rolesService.addTransactionHash.subscribe((result) => {
      // if (result)
        // this.result = link(this.ethersProvider._web3Provider['networkVersion'], result);
    });
  }

  add() {
    this.model = Object.assign({}, this.form.value);
    this.rolesService.add(this.model);
  }
}