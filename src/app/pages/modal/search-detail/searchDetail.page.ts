import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { BackButtonBarComponent } from 'src/app/core/components/back-button-bar/backButtonBar.component';


@Component({
  selector: 'app-search-detail',
  templateUrl: 'searchDetail.page.html',
  imports: [IonicModule, CommonModule, BackButtonBarComponent],
  standalone: true
})

export class SearchDetailPage {
  mealTimeItem = ["아침", "점심", "저녁", "간식"]
  mealTime = [true, false, false, false]

  mealEveItem = ["균형잡힌", "탄수화물", "단백질", "지방", "폭식"]
  mealEv = [true, false, false, false, false]

  mealTimeToogle(index: number) {
    for (let i = 0; i < this.mealTime.length; i++) {
      if (i === index) {
        this.mealTime[i] = true
      } else {
        this.mealTime[i] = false
      }
    }
  }

  mealEvToogle(index: number) {
    this.mealEv[index] = !this.mealEv[index]
  }
}

// {{ tabState ? '' : 'border-[#35248F]' }}