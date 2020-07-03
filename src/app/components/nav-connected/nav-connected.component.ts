import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-connected',
  templateUrl: './nav-connected.component.html',
  styleUrls: ['./nav-connected.component.css']
})
export class NavConnectedComponent implements OnInit {

  constructor(
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  signout() {
    this.accountService.removeConnectedAddress();
    this.accountService.removeConnectedNetwork();
    this.router.navigate(['/accounts/connect']);
  }
}
