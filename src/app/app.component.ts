import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { MenuServiceService } from './menu-service.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  subList: boolean;
  isClose: boolean;
  constructor(private menuCtrl: MenuController, private menuService: MenuServiceService) {}
  ngOnInit(): void {
    this.menuCtrl.toggle();
    this.subList=false;
  }

  async closeMenu(){
    this.menuCtrl.toggle();
  }
  displaySubList(){
    this.subList=!this.subList;
  }

  menuToggled(menuIsOpen: boolean){
    this.isClose=!menuIsOpen;
    this.emitEventBaseOnMenuState(menuIsOpen);
  }
  emitEventBaseOnMenuState(menuWillDisplay: boolean){
    if(menuWillDisplay){
      this.menuService.menuState.next(true);
    }else{
      this.menuService.menuState.next(false);
    }
  }
  menuOpen(){
    console.log('border is open');
    this.menuCtrl.open();
  }
}
