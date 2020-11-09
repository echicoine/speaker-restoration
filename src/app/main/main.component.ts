import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MainConstants } from '../constants/main-constants';
import { Speaker } from '../model/speaker';
import { SpeakerListGetter } from '../services/speaker-list-getter';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class MainComponent implements OnInit {
  isExpansionDetailRow = true;
  expandedElement: any;
  welcomeMessage = MainConstants.welcomeMessage;
  speakerDataSource = [];
  displayedColumns = ['name', 'brand', 'year', 'cost', 'soldFor'];
  @ViewChild('table', { static: false }) table: MatTable<Speaker>;

  constructor(private speakerListGetter: SpeakerListGetter) { }

  ngOnInit(): void {
    this.speakerDataSource = this.speakerListGetter.getSpeakerList();
  }

  applyFilter(filterValue: string) {
    const ds = new MatTableDataSource<Speaker>(this.speakerListGetter.getSpeakerList());
    ds.filter = filterValue.trim().toLowerCase();
    this.table.dataSource = ds;
  }

  updateExpansion(element) {
    element.expanded = !element.expanded;
  }
}
