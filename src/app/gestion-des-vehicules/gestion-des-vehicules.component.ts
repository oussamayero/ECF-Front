import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-des-vehicules',
  templateUrl: './gestion-des-vehicules.component.html',
  styleUrls: ['./gestion-des-vehicules.component.css']
})
export class GestionDesVehiculesComponent implements OnInit {
  list: any;

  constructor() { }

  ngOnInit(): void {


  }

  addTasks(items: string) {

    
    this.list.push({id:this.list.length,name:items});
console.warn(this.list)
}

removeTasks(id:string){
  console.warn(id)
  this.list=this.list.filter((item: { id: string; }) => item.id === id);
}

}



