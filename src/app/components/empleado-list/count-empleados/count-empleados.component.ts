import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-count-empleados',
  templateUrl: './count-empleados.component.html',
  styleUrls: ['./count-empleados.component.css']
})
export class CountEmpleadosComponent implements OnInit {
  @Input() todos:number;
  @Input() hombres:number;
  @Input() mujeres:number;
  @Output() seleccion=new EventEmitter<string>();
  sexoSeleccionado:string="Todos";
  constructor() {
    this.todos=0;
    this.hombres=0;
    this.mujeres=0;
  }
  ngOnInit(): void {
    console.log(this.todos);
  }
  radioChange():void{
    this.seleccion.emit(this.sexoSeleccionado)
  }
}
