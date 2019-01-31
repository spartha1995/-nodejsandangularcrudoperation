import {Employee} from '../Model/employee-model';
import * as DataRepository from './data.repository';

/**
 * Method to Get all Employee
 */
export let GetAllEmployee =() =>{
    return DataRepository.GetAll(Employee);
}

/**
 * 
 * @param id Method to Get Employee by id
 */
export let GetEmployeeById = (id:number) =>{
    return DataRepository.GetById(Employee,id);
}

/**
 * 
 * @param data Method to Add Employee
 */
export let AddEmployee = (data:any) =>{
    return DataRepository.AddData(Employee,data);
}

/**
 * 
 * @param data Method to update Employee
 * @param query 
 */
export let UpdateEmployee = (data:any,query:any) =>{
    return DataRepository.UpdateData(Employee,data,query);
}

/**
 * 
 * @param id Method to delete Employee
 */
export let DeleteEmployee = (id:number)=>{
    return DataRepository.RemoveData(Employee,{id:id});
}