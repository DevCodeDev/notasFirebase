import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotasService } from '../../services/notes.services';


@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  note={};
  id = null;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public notesServices:NotasService) {

            this.id = navParams.get('id'); 
            if(this.id != 0){
              notesServices.getNote(this.id)
                .valueChanges().subscribe( note => {
                  this.note = note;
                });
            }  
            
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  addNote(){
    if(this.id != 0){
      //Estamos editando
      this.notesServices.editNote(this.note);
      alert("Nota editada con exito");
    }else{
      this.note.id = Date.now();
      this.notesServices.createNote(this.note);
      alert("Nota creada con exito");
    }
    this.navCtrl.pop();
    
  }

  deleteNote(){
    this.notesServices.deleteNote(this.note);
    alert("Nota eliminada con exito");
    this.navCtrl.pop();
  }

}
