
import { Employee } from '../Model/employee-model';

/**
 * Method to migrate database
 */
export let MigratedDatabase = () => {
    Employee.sync();
}

/**
 * Method to get all model data
 * @param model 
 */
export let GetAll = (model: any) => {
    return model.findAll();
}

/**
 * Method to get Model data by Id
 * @param model 
 * @param id 
 */
export let GetById = (model: any, id: number) => {
    return model.find({
        where: {
            id: id
        }
    });
}

/**
 * Method to add data into model
 * @param model 
 * @param data 
 */
export let AddData = (model: any, data: any) => {
    return model.create(data);
}

/**
 * Method to update model data
 * @param model 
 * @param data 
 * @param query 
 */
export let UpdateData = (model: any, data: any, query: any) => {
    return model.update(data, {
        where: query
    });
}

/**
 * Method to remove model data
 * @param model 
 * @param query 
 */
export let RemoveData = (model: any, query: any) => {
    return model.destroy({
        where: query
    });
}