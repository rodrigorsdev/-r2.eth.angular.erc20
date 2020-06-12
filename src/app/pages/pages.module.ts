import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TextMaskModule } from 'angular2-text-mask';
import { QRCodeModule } from 'angularx-qrcode';
import { CustomFormsModule } from 'ngx-custom-validators';

import { PagesAppComponent } from './pages.app.component';
import { PagesRoutingModule } from './pages.route';
import { NavComponent } from './layout/nav/nav.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { WalletCardComponent } from '../components/wallet-card/wallet-card.component';
import { HomeComponent } from './home/home.component';
import { BalanceOfComponent } from './balance-of/balance-of.component';
import { AllowanceComponent } from './allowance/allowance.component';
import { TransferComponent } from './transfer/transfer.component';

@NgModule({
    declarations: [
        PagesAppComponent,
        NavComponent,
        SidebarComponent,
        NotFoundComponent,
        WalletCardComponent,
        HomeComponent,
        BalanceOfComponent,
        AllowanceComponent,
        TransferComponent,
    ],
    imports:[
        CommonModule,
        RouterModule,
        PagesRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        CustomFormsModule,
        TextMaskModule,
        QRCodeModule
    ]
})
export class PagesModule { }