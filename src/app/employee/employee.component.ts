import { Component, OnInit} from '@angular/core';
import { DataTableComponent } from '../shared/data-table/data-table.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {


  constructor() { }

  data:any;



  ngOnInit() {

    this.data='gridOne'
  }
  
  
  columnHeader1 = {'studentID1': 'ID 1', 'fname1': 'First Name 1', 'weight1': 'Weight 1', 'symbol1': 'Symbol 1'};

  tableData1: any[] = [
    {studentID1: 1, fname1: 'Hydrogen', weight1: 1.0079, symbol1: 'H'},
    {studentID1: 2, fname1: 'Helium', weight1: 4.0026, symbol1: 'He'},
    {studentID1: 3, fname1: 'Lithium', weight1: 6.941, symbol1: 'Li'},
    {studentID1: 4, fname1: 'Beryllium', weight1: 9.0122, symbol1: 'Be'},
    {studentID1: 5, fname1: 'Boron', weight1: 10.811, symbol1: 'B'},
    {studentID1: 6, fname1: 'Carbon', weight1: 12.0107, symbol1: 'C'},
    {studentID1: 7, fname1: 'Nitrogen', weight1: 14.0067, symbol1: 'N'},
    {studentID1: 8, fname1: 'Oxygen', weight1: 15.9994, symbol1: 'O'},
    {studentID1: 9, fname1: 'Fluorine', weight1: 18.9984, symbol1: 'F'},
    {studentID1: 10, fname1: 'Neon', weight1: 20.1797, symbol1: 'Ne'},
  ];

  columnHeader2 = {'studentID2': 'ID 2', 'fname2': 'First Name 2', 'weight2': 'Weight 2', 'symbol2': 'Symbol 2'};

  tableData2: any[] = [
    {studentID2: 1, fname2: 'Hydrogen', weight2: 1.0079, symbol2: 'H'},
    {studentID2: 2, fname2: 'Helium', weight2: 4.0026, symbol2: 'He'},
    {studentID2: 3, fname2: 'Lithium', weight2: 6.941, symbol2: 'Li'},
    {studentID2: 4, fname2: 'Beryllium', weight2: 9.0122, symbol2: 'Be'},
    {studentID2: 5, fname2: 'Boron', weight2: 10.811, symbol2: 'B'},
    {studentID2: 6, fname2: 'Carbon', weight2: 12.0107, symbol2: 'C'},
    {studentID2: 7, fname2: 'Nitrogen', weight2: 14.0067, symbol2: 'N'},
    {studentID2: 8, fname2: 'Oxygen', weight2: 15.9994, symbol2: 'O'},
    {studentID2: 9, fname2: 'Fluorine', weight2: 18.9984, symbol2: 'F'},
    {studentID2: 10, fname2: 'Neon', weight2: 20.1797, symbol2: 'Ne'},
  ];

}