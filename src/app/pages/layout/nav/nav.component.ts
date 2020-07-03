import { Component, OnInit, Inject } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isCollapsed: boolean;
  isToggled: boolean;

  isConnected: boolean = true;

  constructor(
    private sidebarService: SidebarService,
    private accountService: AccountService
  ) { }

  async ngOnInit() {
    // this.isConnected = this.accountService.isConnected();
  }

  toggleSidebar() {
    this.isToggled = !this.isToggled;
    this.sidebarService.changeVisibility(this.isToggled);
  }
}
