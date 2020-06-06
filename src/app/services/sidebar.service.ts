import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SidebarService {
    private isToggled = new BehaviorSubject(false);
    currentState = this.isToggled.asObservable();

    constructor() {

    }

    changeVisibility(visibility: boolean) {
        this.isToggled.next(visibility);
    }
}