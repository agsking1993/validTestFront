import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { infoDb } from '../model/infoDb.model ';
import { utilities } from '../utils/common';


@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
 

  createUser(infoDb: infoDb){
    let loginHeaders: HttpHeaders = 
    new HttpHeaders().set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');
    
        return this.http.post(utilities.CREATE, infoDb,
        { 
            headers: loginHeaders,
            observe: 'response',
            responseType: 'text',
            withCredentials : true                   
        },)
  } 

  
  udpateUser(infoDb: infoDb){
    let loginHeaders: HttpHeaders = 
    new HttpHeaders().set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');
    
        return this.http.put(utilities.UPDATE, infoDb,
        { 
            headers: loginHeaders,
            observe: 'response',
            responseType: 'text',
            withCredentials : true                   
        },)
  } 

  

  listUsers() {
    return this.http.get(utilities.LIST,
      {
          observe: 'response',
          responseType: 'text',
          withCredentials : true         
      })
   }

 
}
