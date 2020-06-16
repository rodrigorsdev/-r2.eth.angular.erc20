import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-balance-of',
  templateUrl: './balance-of.component.html',
  styleUrls: ['./balance-of.component.css']
})
export class BalanceOfComponent implements OnInit {

  form: FormGroup;
  formSubmitted: boolean = false;
  address: string;
  balanceResult: string;

  constructor(
    private fb: FormBuilder,
    private tokenService: TokenService
  ) {
    this.form = this.fb.group({
      address: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.tokenService.balance.subscribe((result) => {
      this.balanceResult = result;
    });
  }

  balanceOf() {
    this.address = this.form.controls.address.value;
    this.tokenService.updateBalance(this.address);
    this.formSubmitted = true;
  }
}
