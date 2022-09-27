import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/Model/Employee.Model';
import { EmployeesService } from 'src/app/Services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  addEmployeeRequest:Employee={
    id:'',
    name:'',
    email:'',
    phone:0,
    salary:0,
    department:''

  };
  constructor(private route:ActivatedRoute,private employeesService:EmployeesService,private router:Router) {
   }

  ngOnInit(): void {
  }
  addEmployee()
  {
    console.log("Add employee method triggred");

    this.employeesService.addEmployee(this.addEmployeeRequest)
    .subscribe({
      next:(Employee) =>{
        this.router.navigate(['Employees']);
      }
    });
  }
}
