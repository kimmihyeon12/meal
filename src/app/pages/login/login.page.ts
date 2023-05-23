import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { SocialLoginService } from "src/app/services/socialLogin.service";

@Component({
  selector: "app-login",
  templateUrl: "login.page.html",
  imports: [
    IonicModule,
    CommonModule
  ],
  standalone: true
})

export class LoginPage {
  constructor(public socialLoginService: SocialLoginService) { }

  ngAfterViewInit() {
    this.socialLoginService.init()
  }

}