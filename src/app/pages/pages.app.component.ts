import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../services/sidebar.service';
import { StorageService } from '../services/storage.service';
import { LocalStorageKeysEnum } from '../models/local-storage-keys.enum';
import { Router } from '@angular/router';

@Component({
    selector: 'pages-app-root',
    templateUrl: './pages.app.component.html',
    styleUrls: ['./pages.app.component.css']
})
export class PagesAppComponent implements OnInit {

    isToogled: boolean;

    constructor(
        private sidebarService: SidebarService,
        private storage: StorageService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.sidebarService.currentState.subscribe(a => this.isToogled = a);

        if (!this.storage.getLocalStorage(LocalStorageKeysEnum.connectedAddress))
            this.router.navigate(['/accounts/signin']);
    }

}