import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Model/Employee.Model';
import { EmployeesService } from 'src/app/Services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  Employees:Employee[]=[];
constructor(private employeesService:EmployeesService){}

  ngOnInit(): void {
    this.employeesService.getAllEmployees()
    .subscribe({
      next:(Employees) =>{
        this.Employees=Employees;
      },
      error:(response) =>{
        console.log(response);
      }
    })   

  }

}
