import { LocalStorageService } from './../../services/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-harry-detalhe',
  templateUrl: './harry-detalhe.component.html',
  styleUrls: ['./harry-detalhe.component.css']
})
export class HarryDetalheComponent implements OnInit {

  constructor(private LocalStorageService: LocalStorageService ) {
   
  }

  

  ngOnInit(): void {

  }
  selecionado:any =[this.LocalStorageService.get('2')];

}