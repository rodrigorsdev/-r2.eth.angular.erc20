import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TokenService } from 'src/app/services/token.service';
import { CustomValidators } from 'ngx-custom-validators';
import { TransferModel } from 'src/app/models/transfer.model';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  form: FormGroup;
  transferResult: string;
  model: TransferModel;

  constructor(
    private fb: FormBuilder,
    private tokenService: TokenService
  ) {
    this.form = this.fb.group({
      toAddress: ['', [Validators.required, CustomValidators.rangeLength([42, 42])]],
      value: ['', [Validators.required, CustomValidators.number]]
    });
  }

  ngOnInit(): void {
    this.tokenService.transferTransactionHash.subscribe((result) => {
      this.transferResult = result;
    });
  }

  transfer() {
    this.model = Object.assign({}, this.form.value);
    this.tokenService.transfer(this.model.toAddress, this.model.value);
  }
}