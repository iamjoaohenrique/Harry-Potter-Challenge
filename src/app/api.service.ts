import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getAllPersonagens(){
    return this.http.get(`http://hp-api.herokuapp.com/api/characters/`);    
  }

  getOneHouse(house){
    return this.http.get(`http://hp-api.herokuapp.com/api/characters/house/${house}`);   
  }

}
