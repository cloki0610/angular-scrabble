import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['Position', 'Name', 'GamesPlayed', 'TotalScore'];

  @Input() PlayerResultList!: Array<any>;

  constructor() {}

  ngOnInit(): void {}

}
