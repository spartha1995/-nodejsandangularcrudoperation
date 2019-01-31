import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import {HttpService} from '../../http.service';
import {Router} from '@angular/router';

@Component({
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.css']
})
export class EmployeeListComponent implements OnInit {
     employeeList:any;

     constructor(private httpservice:HttpService,private router :Router){
       this.employeeList=new Array<Employee>();
     }
     ngOnInit(): void {
       this.fetchAllEmployee();
    }

    fetchAllEmployee()
    {
      debugger;
      this.httpservice.getAllEmployee().subscribe(res=>{
        debugger;
        this.employeeList = res;
        console.log(res);
      })
    }

    UpdateEmployee(id:number)
    {
     this.router.navigateByUrl('edit/'+id);
    }

    deleteEmployee(id:number)
    {
      debugger;
      this.httpservice.deleteEmployee(id).subscribe(res=>{
       this.fetchAllEmployee();
      });
    }
}