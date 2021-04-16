import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../core/api.service';
import { infoDb } from '../model/infoDb.model ';
import { utilities } from '../utils/common';

 
@Component({
  selector: 'app-listClients',
  templateUrl: './listClients.component.html',
  styleUrls: ['./listClients.component.css']
})
export class ListClientComponent implements OnInit {


  loading: boolean = false;
  dataUser: infoDb = new infoDb(); 
  listUsers : infoDb[]  = [];

  constructor(private router: Router,private apiService: ApiService){}

  ngOnInit() {
    this.listUser();

  }

  getDataForms(listUser)
  {
    this.loading = true; 

    if(listUser != null)
    this.listUsers.forEach(element  => {
        this.updateRegister(element);
    } ) ;

    this.loading = false; 
    alert(utilities.PROCESADOS)
    window.location.reload();
  } 

  updateRegister(dataUser)
  {

    this.apiService.createUser(dataUser).subscribe(dataa => {        

      var obj = JSON.parse(dataa.body);
     
      this.loading = false;    
     },
      error => {
        alert(utilities.INVALID)
        this.loading = false;    

    });    
  }

  listUser()
  {
    this.loading = true; 
      this.apiService.listUsers().subscribe(dataa => {        

      var obj = JSON.parse(dataa.body);

      obj.forEach(element => {
        this.dataUser = new infoDb();
        this.dataUser.id = element.id;
        this.dataUser.name = element.name;
        this.dataUser.lastName = element.lastName;
        this.dataUser.process = element.process;

        if (element.process)
        this.dataUser.state = utilities.PROCESS;
        else
        this.dataUser.state = utilities.NOPROCESS;
   
        this.listUsers.push(this.dataUser);
       }); 
       
      this.loading = false;    
     },
      error => {
        alert(utilities.INVALID)
        this.loading = false;    

    });  
}

return()
{
  this.router.navigate([utilities.INDEX]);
}  

}
