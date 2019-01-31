import * as express from 'express';
import * as SqlConnection  from './sql-connection/sqlconnection';
import * as migrateDB from './Repository/data.repository';
import * as EmployeeController from './Controllers/employee-controller';
import {EmployeeAC} from './Model/employee-model';

var app = express();
var path = require('path');
app.use(express.json());
var port = 8085;

//create table
migrateDB.MigratedDatabase();
app.use(express.static(path.join(__dirname, 'EmployeeApp')));
// set the view engine to ejs
app.set('views', __dirname + '/Views');
app.use(express.static(__dirname + '/EmployeeApp'));
app.use(express.static(__dirname + '/EmployeeApp/dist/EmployeeApp'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);


app.get('/', function (request, response) {
    response.render('index.html');
});

// app.get('/dashboard', function (request, response) {
//     response.render('index.html');
// });


app.get('/api/Fetchemployee', function (request, response) {
    EmployeeController.GetAllEmployee(response);
});

app.get('/api/employee/:id', function (request, response) {
    let id = +request.params.id;
    EmployeeController.GetEmployeeById(response, id);
});

app.post('/api/employee', function (request, response) {
    let body = request.body;
    let department: EmployeeAC = JSON.parse(JSON.stringify(body));
    EmployeeController.AddEmployee(response, department);
});
app.put('/api/employee', function (request, response) {
    let body = request.body;
    let department: EmployeeAC = JSON.parse(JSON.stringify(body));
    EmployeeController.UpdateEmployee(response, department);
});

app.get('/api/employee/:id/delete', function (request, response) {
    let id = +request.params.id;
    EmployeeController.RemoveEmployee(response , id);
});

//api/employee/1/delete
// app.get('/api/employee/:id/delete', function (request, response) {
//     let id = +request.params.id;
//     EmployeeController.RemoveEmployee(response, id);
// });

app.listen(port);