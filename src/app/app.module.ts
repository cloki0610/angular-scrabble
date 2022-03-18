import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './card/card.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [AppComponent, CardComponent, TableComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
