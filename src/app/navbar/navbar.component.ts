import { LocalStorageService } from './../services/local-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private LocalStorageService: LocalStorageService) { 
  
  }

  ngOnInit(): void {
      
   
  }
  //

}

