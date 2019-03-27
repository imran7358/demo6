import { Component, OnInit } from '@angular/core';
import{IEmployee} from '../employee';
import{EmployeeserviceService} from '../employeeservice.service'

@Component({
  selector: 'app-employedata',
  templateUrl: './employedata.component.html',
  styleUrls: ['./employedata.component.css'],
  providers:[EmployeeserviceService]
})
export class EmployedataComponent implements OnInit {
  employee:IEmployee[];
  constructor(private employeeService:EmployeeserviceService) { }

  ngOnInit() {
    this.employee = this.employeeService.getEmployee();
    console.log(this.employee)
  }

}
