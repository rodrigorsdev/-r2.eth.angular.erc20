import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { AllowanceModel } from 'src/app/models/allowance.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'ngx-custom-validators';

@Component({
  selector: 'app-allowance',
  templateUrl: './allowance.component.html',
  styleUrls: ['./allowance.component.css']
})
export class AllowanceComponent {

  form: FormGroup;
  allowanceResult: number;
  model: AllowanceModel;

  constructor(
    private fb: FormBuilder,
    private tokenService: TokenService
  ) {
    this.form = this.fb.group({
      owner: ['', [Validators.required, CustomValidators.rangeLength([42, 42])]],
      spender: ['', [Validators.required, CustomValidators.rangeLength([42, 42])]]
    });
  }

  allowance() {
    this.model = Object.assign({}, this.form.value);

    this.tokenService.allowanceNumber.subscribe((result) => {
      this.allowanceResult = result;
    });
    this.tokenService.allowance(this.model.owner, this.model.spender)
  }
}
