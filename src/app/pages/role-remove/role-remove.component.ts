import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RemoveRoleModel } from 'src/app/models/remove-role.model';
import { provider } from 'src/app/services/ethers.service';
import { ethers } from 'ethers';
import { RoleService } from 'src/app/services/roles.service';
import { CustomValidators } from 'ngx-custom-validators';
import { link } from 'src/app/utils/transaction.util';

@Component({
  selector: 'app-role-remove',
  templateUrl: './role-remove.component.html',
  styleUrls: ['./role-remove.component.css']
})
export class RoleRemoveComponent implements OnInit {

  form: FormGroup;
  result: string;
  model: RemoveRoleModel;
  
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
    this.rolesService.removeTransactionHash.subscribe((result) => {
      if (result)
        this.result = link(this.ethersProvider._web3Provider['networkVersion'], result);
    });
  }

  remove(){
    this.model = Object.assign({}, this.form.value);
    this.rolesService.remove(this.model);
  }
}