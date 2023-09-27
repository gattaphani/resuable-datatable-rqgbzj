import {Component, OnInit, ViewChild, Input, Output, EventEmitter} from '@angular/core';
import {MatSort, MatTableDataSource, MatTable} from '@angular/material';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  @Input() tableData;
  @Input() columnHeader;
  @Input() grid;
  objectKeys = Object.keys;

  tableOne:any
  tableTwo:any
  emitter:string;

  dataSource;

  @Output() 



  @ViewChild(MatSort) sort: MatSort;

  //  this.emitter = new EventEmitter<string>

  //  sendGrid(){
  //  this.table
  //  }



  ngOnInit() {
    console.log(this.tableData);
    this.dataSource = new MatTableDataSource(this.tableData);
    this.dataSource.sort = this.sort;
    
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}