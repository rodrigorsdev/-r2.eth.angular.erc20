import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'ngx-custom-validators';

@Component({
  selector: 'app-nav-disconnected',
  templateUrl: './nav-disconnected.component.html',
  styleUrls: ['./nav-disconnected.component.css']
})
export class NavDisconnectedComponent implements OnInit {

  form: FormGroup;

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      password: ['', [Validators.required, CustomValidators.rangeLength([6, 15])]]
    });
  }

  ngOnInit(): void {
  }

  openSignIn(modal) {
    this.modalService.open(modal);
  }

  signin(){
    
  }

}
