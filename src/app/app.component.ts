import { Component, HostListener } from '@angular/core';
import { LayoutService } from './services/layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

@HostListener('window:resize', ['$event'])

export class AppComponent {
  title = 'portalPortifolio';
  hideAside: boolean = true;
  viewPortWidth: number = window.innerWidth;
  useDarkMode: boolean = true;

  constructor(private layoutService: LayoutService) {
    this.layoutService.toggleAsideLeft.subscribe((x) => {
      this.hideAside = x;
    });

    this.layoutService.useDarkMode.subscribe((x) => {
      this.useDarkMode = x;
    })
  }

  ngOnInit() {
    this.onResize();
  }

  onResize() {
    this.layoutService.checkViewPortWidth();

  }
}
