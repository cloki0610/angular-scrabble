import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'callus',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/callus.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'findus',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/findus.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'trophy',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/trophy.svg')
    );
  }
}
