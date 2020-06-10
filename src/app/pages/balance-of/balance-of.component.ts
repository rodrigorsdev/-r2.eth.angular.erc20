import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TokenService } from 'src/app/services/token.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-balance-of',
  templateUrl: './balance-of.component.html',
  styleUrls: ['./balance-of.component.css']
})
export class BalanceOfComponent implements OnInit {

  form: FormGroup;
  address: string;

  constructor(
    private fb: FormBuilder,
    private tokenService: TokenService,
    private toastrService: ToastrService
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
      this.toastrService.success(`Balance is ${balance}`, 'Success', {
        timeOut: 0,
        closeButton: true
      });
    });

    this.tokenService.updateBalance(this.address);
  }
}
