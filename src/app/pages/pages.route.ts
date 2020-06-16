import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesAppComponent } from './pages.app.component';
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

const routerConfig: Routes = [
    {
        path: '', component: PagesAppComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'balance-of', component: BalanceOfComponent },
            { path: 'allowance', component: AllowanceComponent },
            { path: 'transfer', component: TransferComponent },
            { path: 'transfer-from', component: TransferFromComponent },
            { path: 'approve', component: ApproveComponent },
            { path: 'increase-approval', component: IncreaseApprovalComponent },
            { path: 'decrease-approval', component: DecreaseApprovalComponent },
            { path: 'mint-to', component: MintToComponent },
            { path: 'burn-from', component: BurnFromComponent },
            { path: 'role-verify', component: RoleVerifyComponent },
            { path: 'role-add', component: RoleAddComponent },
            { path: 'role-remove', component: RoleRemoveComponent },
            { path: 'lifecycle', component: LifecycleComponent }
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