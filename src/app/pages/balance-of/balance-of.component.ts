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
  address:string;
  balance: number;

  constructor(
    private fb: FormBuilder,
    private tokenService: TokenService
  ) {
    this.form = this.fb.group({
      address: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  balanceOf() {
    this.address = this.form.controls.address.value;
    this.tokenService.balance.subscribe((balance) => {
      this.balance = balance;
    });

    this.tokenService.updateBalance(this.address);
  }
}
