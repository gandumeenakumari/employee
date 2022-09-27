import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/Employees/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/Employees/edit-employee/edit-employee.component';
import { EmployeesListComponent } from './components/Employees/employees-list/employees-list.component';

const routes: Routes = [
  {
    path:'',
    component:EmployeesListComponent
  },
  {
    path:'Employees',
    component:EmployeesListComponent
  },
  {
    path:'Employees/add',
    component:AddEmployeeComponent
  },
  {
    path:'Employees/edit/:id',
    component:EditEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
