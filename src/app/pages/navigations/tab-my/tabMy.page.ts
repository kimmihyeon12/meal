import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tab-my',
  templateUrl: 'tabMy.page.html',
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ],
  standalone: true
})
export class TabMy { }
