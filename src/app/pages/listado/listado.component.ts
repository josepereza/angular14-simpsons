import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { ApiSimpsonsService } from 'src/app/services/api-simpsons.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  name = new FormControl('');
personajes:any[]=[]
  constructor(private apiSimpsonsService:ApiSimpsonsService) { }

  ngOnInit(): void {
    this.getAll('')
   this.name.valueChanges.pipe(debounceTime(500),distinctUntilChanged()).subscribe((data:any)=>{
   this.getAll(data)
  

   })
     
  }
getAll(data:any){
  this.apiSimpsonsService.getAll(data).subscribe((mispersonajes:any)=>{
    this.personajes=mispersonajes
    console.log(mispersonajes)
  })
}
}
