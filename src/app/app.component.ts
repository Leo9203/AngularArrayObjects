import { Component, OnInit } from '@angular/core';
import { objeto } from './objeto';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    
  }
  title = 'ngFor';

  objeto: objeto[]=[];
  texto:String="1,2,3,4,5,6,7"
  textoSep:any[]=[];
  submit() {
    this.textoSep=this.texto.split(',');
    for(let i=0;i<this.textoSep.length;i++){
      this.objeto.push(this.objetoNuevo(this.textoSep[i]))
    }

    console.log(this.objeto)
  }
  objetoNuevo(s:String): objeto {
    return {
      nombre: s
     
    };
  }

  

  
}
