import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../services/sidebar.service';

@Component({
    selector: 'pages-app-root',
    templateUrl: './pages.app.component.html',
    styleUrls: ['./pages.app.component.css']
})
export class PagesAppComponent implements OnInit {

    isToogled: boolean;

    constructor(
        private sidebarService: SidebarService
    ) {

    }

    ngOnInit(): void {
        this.sidebarService.currentState.subscribe(a => this.isToogled = a);
    }

}