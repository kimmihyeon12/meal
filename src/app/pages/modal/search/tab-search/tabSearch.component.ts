import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-tab-search',
  templateUrl: 'tabSearch.component.html',
  imports: [IonicModule, CommonModule],
  standalone: true
})

export class TabSearchComponent {
  list: any = ["참치마요 주먹밥", "치킨마요 덮밥", "참치김치찌개", "참치마요 주먹밥", "참기름 비빔밥"]
}