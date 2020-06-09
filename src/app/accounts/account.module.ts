import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomFormsModule } from 'ngx-custom-validators';
import { NgxSpinnerModule } from "ngx-spinner";

import { AccountAppComponent } from './account.app.component';
import { AccountRoutingModule } from './account.route';
import { SigninComponent } from './signin/signin.component';

@NgModule({
    declarations: [
        AccountAppComponent,
        SigninComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        CustomFormsModule,
        NgxSpinnerModule,
        AccountRoutingModule
    ],
    providers: [
       
    ]
})
export class AccountModule { }