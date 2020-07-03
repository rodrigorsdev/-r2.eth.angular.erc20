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
import { CardTokenNameComponent } from '../components/card-token-name/card-token-name.component';
import { CardTokenTotalSupplyComponent } from '../components/card-token-total-supply/card-token-total-supply.component';
import { CardNetworkComponent } from '../components/card-network/card-network.component';
import { NavConnectedComponent } from '../components/nav-connected/nav-connected.component';
import { NavDisconnectedComponent } from '../components/nav-disconnected/nav-disconnected.component';
import { TransactionListComponent } from '../components/transaction-list/transaction-list.component';

import { HomeComponent } from './home/home.component';
import { BalanceOfComponent } from './balance-of/balance-of.component';
import { AllowanceComponent } from './allowance/allowance.component';
import { TransferComponent } from './transfer/transfer.component';
import { TransferFromComponent } from './transfer-from/transfer-from.component';
import { ApproveComponent } from './approve/approve.component';
import { IncreaseApprovalComponent } from './increase-approval/increase-approval.component';
import { DecreaseApprovalComponent } from './decrease-approval/decrease-approval.component';
import { MintToComponent } from './mint-to/mint-to.component';
import { BurnFromComponent } from './burn-from/burn-from.component';
import { RoleVerifyComponent } from './role-verify/role-verify.component';
import { RoleAddComponent } from './role-add/role-add.component';
import { RoleRemoveComponent } from './role-remove/role-remove.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';

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
        TransferFromComponent,
        ApproveComponent,
        IncreaseApprovalComponent,
        DecreaseApprovalComponent,
        MintToComponent,
        BurnFromComponent,
        RoleVerifyComponent,
        RoleAddComponent,
        RoleRemoveComponent,
        LifecycleComponent,
        CardTokenNameComponent,
        CardTokenTotalSupplyComponent,
        CardNetworkComponent,
        NavConnectedComponent,
        NavDisconnectedComponent,
        TransactionListComponent
    ],
    imports: [
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