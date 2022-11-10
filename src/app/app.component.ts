import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  subList: boolean;
  isClose: boolean;
  constructor(private menuCtrl: MenuController) {}
  ngOnInit(): void {
    this.menuCtrl.toggle();
    this.subList=false;
  }

  async closeMenu(){
    this.menuCtrl.toggle();
    console.log('close');
  }
  displaySubList(){
    this.subList=!this.subList;
  }

  menuToggled(menuIsOpen){
    this.isClose=!menuIsOpen;
  }
}
