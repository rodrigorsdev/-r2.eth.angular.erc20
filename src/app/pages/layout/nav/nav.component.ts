import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isCollapsed: boolean;
  isToggled: boolean;

  constructor(
    private sidebarService: SidebarService
  ) { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.isToggled = !this.isToggled;
    this.sidebarService.changeVisibility(this.isToggled);
  }

  signout() {
  }
}
