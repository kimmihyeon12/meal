import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { IonicModule } from "@ionic/angular";

@Component({
  selector: 'app-board-food',
  templateUrl: 'boardFood.component.html',
  styleUrls: ['boardFood.component.scss'],
  imports: [
    CommonModule,
    IonicModule
  ],
  standalone: true
})
export class BoardFoodComponent { }
