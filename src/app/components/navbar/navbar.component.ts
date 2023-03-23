import { Component } from '@angular/core';
import { LayoutService } from 'src/app/services/layout.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  asideState: boolean = true;
  
  constructor(private layoutService: LayoutService) {
    this.layoutService.toggleAsideLeft.subscribe((x) => {
      this.asideState = x;
    })
  }

  toggleAside() {
    this.layoutService.toggleAside();
  }
}
