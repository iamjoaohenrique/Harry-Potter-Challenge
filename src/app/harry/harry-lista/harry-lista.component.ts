import { ApiService } from '../../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-harry-lista',
  templateUrl: './harry-lista.component.html',
  styleUrls: ['./harry-lista.component.css']
})
export class HarryListaComponent implements OnInit {

  personagens : any = []; 

  constructor(private ApiService : ApiService) {
    this.getAllPersonagens();
   }

  ngOnInit(): void {
  }

  getAllPersonagens() {
    this.ApiService.getAllPersonagens().subscribe(
      (success) => {
        console.log (success);
        this.personagens = success;
      },
      (error)=> {console.log (error)}
    );
  }

}
