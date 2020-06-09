import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';

import { AccountAppComponent } from './account.app.component';
import { SigninComponent } from './signin/signin.component';

const routerConfig: Routes = [
    {
        path: '', component: AccountAppComponent,
        children: [
            { path: 'signin', component: SigninComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routerConfig)
    ],
    exports: [
        RouterModule
    ]
})
export class AccountRoutingModule { }