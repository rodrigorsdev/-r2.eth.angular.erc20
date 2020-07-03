import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';

import { AccountAppComponent } from './account.app.component';
import { ConnectComponent } from './connect/connect.component';

const routerConfig: Routes = [
    {
        path: '', component: AccountAppComponent,
        children: [
            { path: 'connect', component: ConnectComponent }
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