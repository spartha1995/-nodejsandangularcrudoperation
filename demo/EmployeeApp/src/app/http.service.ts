import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Employee} from './employee/employee.model';

@Injectable()
export class HttpService {

    constructor(private http:HttpClient){}

    getAllEmployee(){
        return this.http.get('/api/Fetchemployee');
    }

    addEmployee(employee:Employee)
    {
        return this.http.post('/api/employee',employee);
    }

    getEmployeeById(id:number)
    {
        return this.http.get('/api/employee/'+id);
    }

    updateEmployee(employee:Employee)
    {
        return this.http.put('api/employee',employee);
    }

    deleteEmployee(id:number)
    {
        return this.http.get('/api/employee/'+id+'/delete');
    }
}