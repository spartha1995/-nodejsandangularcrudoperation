import {EmployeeAC} from '../Model/employee-model';
import * as EmployeeRepository from '../Repository/employee.repository';

/**
 * 
 * @param res Method to get all Employee
 */
export let GetAllEmployee=(res:any)=>{
    EmployeeRepository.GetAllEmployee().then(employee=>{
        let employeeList = new Array<any>();
        for(var i=0;i < employee.length; i++){
            employeeList.push(employee[i].dataValues);
        }
        res.send(employeeList);
    });
}

/**
 * 
 * @param res Method to get employee by id
 * @param id 
 */
export let GetEmployeeById=(res:any,id:number)=>{
    EmployeeRepository.GetEmployeeById(id).then(employee=>{
        res.send(employee.dataValues);
    });
}

/**
 * Method to add employee
 * @param res 
 * @param employee 
 */
export let AddEmployee=(res:any ,employee:EmployeeAC)=>{
       let employeeData = {
        firstname: employee.firstname,
        lastname :employee.lastname,
        email : employee.email
       }
       EmployeeRepository.AddEmployee(employeeData).then(employeeResponse=>{
        res.send();
       });
    
}

/**
 * 
 * @param res Method to Update Employee
 * @param employee 
 */
export let UpdateEmployee = (res: any, employee: EmployeeAC) => {
     let employeeData = {
        firstname: employee.firstname,
        lastname :employee.lastname,
        email : employee.email
       }
    EmployeeRepository.UpdateEmployee(employeeData,{id:employee.id}).then(employeeResponse=>{
        res.send();
       });
}

/**
 * Method to delete Employee
 * @param res 
 * @param id 
 */
export let RemoveEmployee = (res:any,id:number)=>{
    EmployeeRepository.DeleteEmployee(id).then(employee=>{
        res.send();
    });
}