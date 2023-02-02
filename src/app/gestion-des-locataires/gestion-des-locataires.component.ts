import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-des-locataires',
  templateUrl: './gestion-des-locataires.component.html',
  styleUrls: ['./gestion-des-locataires.component.css']
})
export class GestionDesLocatairesComponent implements OnInit {
  
  public form: FormGroup;
  
  ngOnInit(): void {
    this.form = new FormGroup({
      nom: new FormControl('', Validators.compose([])),
      prenom: new FormControl('', Validators.compose([])),
      email: new FormControl('', Validators.compose([])),
      telephone: new FormControl('', Validators.compose([]))
    });
  }
  title = 'ECF-FRONT';
  
  list : any[] = [];


  addTasks() {
    this.list.push({...this.form.value, id:this.list.length});
}

removeTasks(id:string){

  this.list=this.list.filter(item => item.id != id);
}

   



}
