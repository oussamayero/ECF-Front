import { Component, OnInit } from '@angular/core';
import{HttpClient, HttpClientModule} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent  {

  constructor(private http:HttpClient) { }

  postClient(data : any) {

    return this.http.post<any>("http://localhost:3000/posts",data)
    .pipe(map((res:any) => {
      return res;
    }))




    

  
    

  }
}
