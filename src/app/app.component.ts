import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor(private menuCtrl: MenuController) {}
  ngOnInit(): void {
    this.menuCtrl.toggle();
  }

  closeMenu(){
    const toggle=document.getElementById('closeMenu');
    toggle.click();
  }
}
