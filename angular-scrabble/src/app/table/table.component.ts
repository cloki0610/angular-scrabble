import {
  Component,
  AfterViewInit,
  Input,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'Position',
    'Name',
    'GamesPlayed',
    'TotalScore',
  ];
  @Input() PlayerResultList!: Array<any>;
  dataSource = new MatTableDataSource<any[]>([]);

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  @ViewChild(MatSort, {static: false}) sort!: MatSort;

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    this.dataSource = new MatTableDataSource<any[]>(this.PlayerResultList);
    this.ngAfterViewInit();
  }
}
