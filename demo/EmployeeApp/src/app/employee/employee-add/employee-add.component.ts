import { Component } from '@angular/core';
import { Employee } from '../employee.model';
import {HttpService} from '../../http.service';
import {Router} from '@angular/router';

@Component({
  templateUrl: './employee-add.component.html',
  //styleUrls: ['./app.component.css']
})
export class EmployeeAddComponent {
    employee:Employee;

    constructor(private httpservice : HttpService,private router : Router){
      this.employee = new Employee();
    }

    addEmployee(employee:Employee)
    {
      return this.httpservice.addEmployee(employee).subscribe(
        res=>{
          this.router.navigate(['list']);
        }
      );
    }
}