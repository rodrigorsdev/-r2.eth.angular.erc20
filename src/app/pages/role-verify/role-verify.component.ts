import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VerifyRoleModel } from 'src/app/models/verify-role.model';
import { TokenService } from 'src/app/services/token.service';
import { CustomValidators } from 'ngx-custom-validators';
import { RoleService } from 'src/app/services/roles.service';

@Component({
  selector: 'app-role-verify',
  templateUrl: './role-verify.component.html',
  styleUrls: ['./role-verify.component.css']
})
export class RoleVerifyComponent implements OnInit {

  form: FormGroup;
  result: string;
  model: VerifyRoleModel;

  constructor(
    private fb: FormBuilder,
    private rolesService: RoleService
  ) {
    this.form = this.fb.group({
      address: ['', [Validators.required, CustomValidators.rangeLength([42, 42])]],
      role: ['admin', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.rolesService.verifyResult.subscribe((result) => {
      if (result)
        this.result = result;
    });
  }

  verify(){
    this.model = Object.assign({}, this.form.value);
    this.rolesService.verify(this.model);
  }
}
