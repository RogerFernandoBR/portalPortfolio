import { Component, Input } from '@angular/core';
import { LayoutService } from 'src/app/services/layout.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent {
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
