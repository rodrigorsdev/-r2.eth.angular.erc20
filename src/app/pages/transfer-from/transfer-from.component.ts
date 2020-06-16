import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TransferFromModel } from 'src/app/models/transfer-from.model';
import { TokenService } from 'src/app/services/token.service';
import { CustomValidators } from 'ngx-custom-validators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-transfer-from',
  templateUrl: './transfer-from.component.html',
  styleUrls: ['./transfer-from.component.css']
})
export class TransferFromComponent implements OnInit {

  form: FormGroup;
  transferResult: string;
  model: TransferFromModel;

  constructor(
    private fb: FormBuilder,
    private tokenService: TokenService
  ) {
    this.form = this.fb.group({
      from: ['', [Validators.required, CustomValidators.rangeLength([42, 42])]],
      to: ['', [Validators.required, CustomValidators.rangeLength([42, 42])]],
      value: ['', [Validators.required, CustomValidators.number]]
    });
  }

  ngOnInit(): void {
    this.tokenService.transferTransactionHash.subscribe((result) => {
      this.transferResult = result;
    });
  }

  transferFrom() {
    try {
      this.model = Object.assign({}, this.form.value);
      this.tokenService.transferFrom(this.model);
    } catch (err) {
      console.error(err);
      console.error(err.message);
    }
  }
}