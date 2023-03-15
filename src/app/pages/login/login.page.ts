import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { IonicModule } from "@ionic/angular";

@Component({
  selector: "app-login",
  templateUrl: "login.page.html",
  imports: [
    IonicModule,
    CommonModule
  ],
  standalone: true
})

export class LoginPage { }