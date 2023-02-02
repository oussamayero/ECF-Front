import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-gestion-des-locations',
  templateUrl: './gestion-des-locations.component.html',
  styleUrls: ['./gestion-des-locations.component.css']
})
export class GestionDesLocationsComponent implements OnInit {
  

  formValue ! : FormGroup
  storage: any;
  title: any;
  note: any;
  router: any;
  list: any;
  form: any;
constructor(private formbuilder:FormBuilder) { }

public formvehicules: FormGroup;
  
ngOnInit(): void {
  this.form = new FormGroup({
    nom: new FormControl('', Validators.compose([])),
    prenom: new FormControl('', Validators.compose([])),
    email: new FormControl('', Validators.compose([])),
    telephone: new FormControl('', Validators.compose([]))
  });
}
titlevehicules = 'ECF-FRONT';

listvehicules : any[] = [];


addTasks() {
  this.list.push({...this.form.value, id:this.list.length});
}

removeTasks(id:string){

this.list=this.list.filter((item: { id: string; }) => item.id != id);
}

}