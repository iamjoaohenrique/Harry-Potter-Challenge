import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAllPersonagens(){
    return this.http.get(`http://hp-api.herokuapp.com/api/characters/`);

    //return this.http.get(`https://servicodados.ibge.gov.br/api/v2/censos/nomes/`);
    
  }
}
