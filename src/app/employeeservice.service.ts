import { Injectable } from '@angular/core';
import {IEmployee} from './employee'
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  constructor() { }
  getEmployee(): IEmployee[]{
    return[
      {EmpCode:1, EmpName:'Mohammad Imran', EmpSal:1000, EmpDob:'05/04/19',EmpAge:19, EmpDesig:'Developer'},
      {EmpCode:1, EmpName:'Mohammad Imran', EmpSal:1000, EmpDob:'05/04/19',EmpAge:19, EmpDesig:'Developer'},
      {EmpCode:1, EmpName:'Mohammad Imran', EmpSal:1000, EmpDob:'05/04/19',EmpAge:19, EmpDesig:'Developer'},
      {EmpCode:1, EmpName:'Mohammad Imran', EmpSal:1000, EmpDob:'05/04/19',EmpAge:19, EmpDesig:'Developer'},
      {EmpCode:1, EmpName:'Mohammad Imran', EmpSal:1000, EmpDob:'05/04/19',EmpAge:19, EmpDesig:'Developer'},
      {EmpCode:1, EmpName:'Mohammad Imran', EmpSal:1000, EmpDob:'05/04/19',EmpAge:19, EmpDesig:'Developer'},
      {EmpCode:1, EmpName:'Mohammad Imran', EmpSal:1000, EmpDob:'05/04/19',EmpAge:19, EmpDesig:'Developer'},
      {EmpCode:1, EmpName:'Mohammad Imran', EmpSal:1000, EmpDob:'05/04/19',EmpAge:19, EmpDesig:'Developer'},
      {EmpCode:1, EmpName:'Mohammad Imran', EmpSal:1000, EmpDob:'05/04/19',EmpAge:19, EmpDesig:'Developer'}
      
    ]
  }
}
