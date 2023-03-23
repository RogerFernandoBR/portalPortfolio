import { HostListener, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LayoutService {

  constructor() { }

  // Aside
  toggleAsideLeft = new BehaviorSubject(false);

  toggleAside(open?: boolean) {
    if (typeof (open) == "undefined") open = !this.toggleAsideLeft.getValue();
    this.toggleAsideLeft.next(open)
  }

  checkViewPortWidth() {
    if (window.innerWidth >= 700) {
      this.toggleAside(false);
    }else {
      this.toggleAside(true);
    }
  }
}
