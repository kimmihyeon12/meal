import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-tab-calender',
  templateUrl: 'tabCalender.page.html',
  imports: [
    IonicModule,
    CommonModule
  ],
  standalone: true
})
export class tabCalender { }
