import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NotasService } from '../../services/notes.services';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  notes = [];
  @ViewChild('myNav') nav: NavController

  constructor(public navCtrl: NavController,
              public notesServices:NotasService) {

      this.notes = notesServices.getNotes();

  }

  public goToDetail(){
    this.navCtrl.push(DetailPage);
  }

}
