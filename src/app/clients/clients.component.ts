import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../core/api.service';
import { infoDb } from '../model/infoDb.model ';
import { utilities } from '../utils/common';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
 
  loading: boolean = false;
  dataUser: infoDb = new infoDb(); 
 
  
  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit() {
    
   this.loading = false;

  }

  getListUsers()
  {
    this.router.navigate([utilities.LIST_CLIENTS]);
  }

  createUser()
  {
    this.loading = true;    

    const data = new HttpParams().set('p','0');
    

    if(this.dataUser.name == null || this.dataUser.lastName == null)
    {
      alert(utilities.INVALID);
      this.loading = false;
    }
    else
    {
      this.apiService.createUser(this.dataUser).subscribe(dataa => {        

      var obj = JSON.parse(dataa.body);
      alert(utilities.OK)

      this.loading = false;    
     },
      error => {
        alert(utilities.INVALID)
        this.loading = false;    

    });
  }
}

}
