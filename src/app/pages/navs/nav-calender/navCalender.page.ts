import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-nav-calender',
  templateUrl: 'navCalender.page.html',
  imports: [
    IonicModule,
    CommonModule
  ],
  standalone: true
})
export class navCalenderPage { }
