import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiSimpsonsService {

  constructor(private http:HttpClient) { }

  getAll(data:any){
   console.log('el primer data',data)
   return  this.http.get(`https://thesimpsonsquoteapi.glitch.me/quotes?count=30&character=${data}`)
  }
}
