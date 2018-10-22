import { Component } from '@angular/core';

@Component({
  selector: 'app-tareas',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tareas : Tarea[];//arreglo de tareas
  ultimoId: number;
  

	constructor(){
    this.tareas = [{id: 1,titulo: 'Terminar el API',completada: false},
    {id: 2, titulo: 'Revisar historias de usuario',completada: true},
    new Tarea({id: 3,titulo: 'Comprar boletos para el cine',completada: false})];
    this.ultimoId = 3;
  
  }
  
  agregarTarea(tituloTarea: string){
    const tareaNueva = new Tarea({titulo: tituloTarea});
    tareaNueva.id =++this.ultimoId;
    this.tareas.push(tareaNueva);
  }
  eliminarTarea(idTarea:number){
     this.tareas = this.tareas.filter(t => t.id !== idTarea);
    //  this.tareas = this.tareas.filter(function(tarea){
    //    return tarea.id!=idTarea;
    //  })

  }
  toggleTarea(idTarea: number) {
    // for (const tarea of this.tareas)  {
    //   if (tarea.id === idTarea) {
    //      tarea.completada = !tarea.completada;
    //      break;
    //   }
    // }
   this.tareas.filter(t => t.id === idTarea?t.completada=!t.completada:null)
  } 

  tareasCompletadas(): number {
    return this.tareas.filter(function(tarea) {
      return tarea.completada === true;
    }).length;
  }
}//fin clase


class Tarea{
  id: number;
  titulo: string;
  completada : boolean;
  
  constructor(valores:object={}){
  
      Object.assign(this,valores)
  }
}
