import { HarryDetalheComponent } from './../harry-detalhe/harry-detalhe.component';
import { LocalStorageService } from './../../services/local-storage.service';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-harry-lista',
  templateUrl: './harry-lista.component.html',
  styleUrls: ['./harry-lista.component.css']
})
export class HarryListaComponent implements OnInit {

  personagens: any = [];

  house: string = 'todas';

  constructor(
    private ApiService: ApiService, 
    private LocalStorageService:LocalStorageService,
    private Router:Router ) {

    this.getOneHouse(); 
  }

  ngOnInit(): void {
  }

 

  trocarCasa(value) {
    this.house = value;
    this.getOneHouse();
  }

  getOneHouse() {
    if (this.house != 'todas') {
      this.ApiService.getOneHouse(this.house).subscribe(
        (success) => {
          console.log(success);
          this.personagens = success;
        },
        (error) => { console.log(error) }
      );
    }
    else {
      this.ApiService.getAllPersonagens().subscribe(
        (success) => {
          console.log(success);
          this.personagens = success;
        },
        (error) => { console.log(error) }
      );
    }
  }

  selecionar(item){
    this.LocalStorageService.set('1',item);
    this.Router.navigate(['detalhe']);
  }

}
