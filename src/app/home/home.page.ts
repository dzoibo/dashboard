import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { MenuServiceService } from '../menu-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  subList: boolean;
  isOpen=false;
  isShowDetails: boolean;

  constructor( private menuCtrl: MenuController, private menuService: MenuServiceService ) {
    this.showMenu();
    this.subList=false;
    this.menuService.menuState.subscribe(value=>this.isOpen=!value);
  }

  showMenu(){
    this.menuCtrl.open();
    this.isOpen=false;
  }
  showDetails(){
    this.isShowDetails=!this.isShowDetails;
  }
}
