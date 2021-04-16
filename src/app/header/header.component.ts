import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";


 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  user: string = "";
  ngOnInit() {
   this.user =  window.sessionStorage.getItem('user');
  }

  constructor(private router: Router) {}

  salir() { 
    window.sessionStorage.removeItem('user');
  
    this.router.navigate(['clients']);
  
  }

}
