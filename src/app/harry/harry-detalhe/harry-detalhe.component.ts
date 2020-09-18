import { LocalStorageService } from './../../local-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-harry-detalhe',
  templateUrl: './harry-detalhe.component.html',
  styleUrls: ['./harry-detalhe.component.css']
})
export class HarryDetalheComponent implements OnInit {

  constructor(private LocalStorageService: LocalStorageService) {
    this.mostrardados();
  }

  teste : any = [];

  ngOnInit(): void {
  }

  mostrardados() {
      this.teste = this.LocalStorageService.get('1');
      if(this.teste[1].name == 'Hermione Granger'){
        console.log(this.teste);
      }
      
    }

}




