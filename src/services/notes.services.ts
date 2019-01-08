import { Injectable } from '@angular/core';

@Injectable()
export class NotasService{
     //data de bd
  notes=[
    {id:1, title:"Nota 1", description:"Descripcion de nota 1"},
    {id:2, title:"Nota 2", description:"Descripcion de nota 2"},
    {id:3, title:"Nota 3", description:"Descripcion de nota 3"}
  ];
  public getNotes(){
      return this.notes;
  }

}