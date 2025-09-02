import { Component } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent {
  listEmpleados:Empleado[] = [
    {legajo: 1, nombre: "Juan", apellido: "Perez", sexo: "Masculino", salario: 150000},
    {legajo: 2, nombre: "Ana", apellido: "Gomez", sexo: "Femenino", salario: 200000},
    {legajo: 3, nombre: "Carla", apellido: "Lopez", sexo: "Femenino", salario: 250000},
    {legajo: 4, nombre: "Luis", apellido: "Martinez", sexo: "Masculino", salario: 300000},
    {legajo: 5, nombre: "Marta", apellido: "Rodriguez", sexo: "Femenino", salario: 350000}
  ];
}
