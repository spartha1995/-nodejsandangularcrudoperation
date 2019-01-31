import { Component,OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import {HttpService} from '../../http.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  templateUrl: './employee-edit.component.html'
})
export class EmployeeEditComponent implements OnInit {
    employee:any;
    id:number;
    constructor(private httpservice : HttpService,private router : Router,private _activatedRoute:ActivatedRoute){
      this.employee = new Employee();
    }

   ngOnInit(): void {
    this.id =+this._activatedRoute.snapshot.paramMap.get('id');
    this.getEmployeeById(this.id);
   }

   getEmployeeById(id:number)
   {
     debugger;
     this.httpservice.getEmployeeById(id).subscribe(res=>{
       this.employee=res;
        console.log(res);
     });
   }

   updateEmployee(employee:Employee)
   {
     this.httpservice.updateEmployee(employee).subscribe(res=>{
        this.router.navigate(['list']);
     });
   }
}