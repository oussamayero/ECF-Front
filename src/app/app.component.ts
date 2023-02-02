
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ECF-FRONT';
  
  list : any[] = [];



/* J'ai creer unne to do list qui me permet d'ajoouter et de supprimer un clients ou une voiture */


  addTasks(items: string) {

    
    this.list.push({id:this.list.length,name:items});
console.warn(this.list)
}

removeTasks(id:string){
  console.warn(id)
  this.list=this.list.filter(item => item.id === id);
}

 

}
