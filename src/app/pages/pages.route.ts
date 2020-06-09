import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesAppComponent } from './pages.app.component';
import { HomeComponent } from './home/home.component';
import { BalanceOfComponent } from './balance-of/balance-of.component';

const routerConfig: Routes = [
    {
        path: '', component: PagesAppComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'balance-of', component: BalanceOfComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routerConfig)
    ],
    exports: [RouterModule]
})
export class PagesRoutingModule { }