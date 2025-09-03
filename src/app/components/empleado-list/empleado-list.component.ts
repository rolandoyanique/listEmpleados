import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit{
  cantidadTotal:number=0;
  cantidadHombres:number=0;
  cantidadMujeres:number=0;
  sexoSeleccionado:string="Todos";
  listEmpleados:Empleado[] = [
    {legajo: 1, nombre: "Juan", apellido: "Perez", sexo: "Masculino", salario: 150000},
    {legajo: 2, nombre: "Ana", apellido: "Gomez", sexo: "Femenino", salario: 200000},
    {legajo: 3, nombre: "Carla", apellido: "Lopez", sexo: "Femenino", salario: 250000},
    {legajo: 4, nombre: "Luis", apellido: "Martinez", sexo: "Masculino", salario: 300000},
    {legajo: 5, nombre: "Marta", apellido: "Rodriguez", sexo: "Femenino", salario: 350000},
    {legajo: 6, nombre: "Carlos", apellido: "Garcia", sexo: "Masculino", salario: 400000},
    {legajo: 7, nombre: "Lucia", apellido: "Fernandez", sexo: "Femenino", salario: 450000},
    {legajo: 8, nombre: "Jorge", apellido: "Sanchez", sexo: "Masculino", salario: 500000},
    {legajo: 9, nombre: "Sofia", apellido: "Ramirez", sexo: "Femenino", salario: 550000},
    {legajo: 10, nombre: "Diego", apellido: "Torres", sexo: "Masculino", salario: 600000},
    {legajo: 11, nombre: "Elena", apellido: "Flores", sexo: "Femenino", salario: 650000},
  ];
  ngOnInit(): void {
    this.cantidadTotal=this.contarTodos();
    this.cantidadHombres=this.contarHombres();
    this.cantidadMujeres=this.contarMujeres();
  }
  contarTodos():number{
    return this.listEmpleados.length;
  }
  contarHombres():number{
    return this.listEmpleados.filter(e=>e.sexo==="Masculino").length;
  }
  contarMujeres():number{
    return this.listEmpleados.filter(e=>e.sexo==="Femenino").length;
  }
}
