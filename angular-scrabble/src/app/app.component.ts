import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import players from '../assets/players.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public playerList: { PlayerId: number; Name: string }[] = players.Players;
  public result: Array<any> = new Array<any>();
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private http: HttpClient
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
  ngOnInit() {
    this.getData();
  }
  getData() {
    this.http
      .get<any>('https://mocki.io/v1/dac50ece-1793-4e95-9040-fbb6cd2dbb7a')
      .subscribe((response: any) => {
        this.result = response.Results;
        console.log(this.result);
        console.log(this.playerList)
      });
  }
}
