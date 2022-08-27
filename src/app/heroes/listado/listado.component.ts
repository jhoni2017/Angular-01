import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
 
})
export class ListadoComponent  {

  heroes:string[]=['goku','batman','spiderMan','thor','hulk']

  borrado:string='';

  borrarHeroe() {
    //console.log('borrando heroe...')
   this.borrado=this.heroes.shift()||'';
  

   
    
    //this.heroes[i].split
  }

  

 

}
