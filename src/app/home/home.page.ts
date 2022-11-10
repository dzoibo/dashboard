import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  subList: boolean;

  constructor( private menuCtrl: MenuController) {
    this.showMenu();
    this.subList=false;
  }

  showMenu(){
    this.menuCtrl.open();
  }
  closeMenu(){
    this.menuCtrl.close();
  }
}
