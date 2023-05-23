import { HttpClientModule } from '@angular/common/http';
import { Component, EnvironmentInjector } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SocialLoginService } from './services/socialLogin.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [
    IonicModule,
    HttpClientModule
  ],
  providers: [
    SocialLoginService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy, },
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  standalone: true
})
export class AppComponent {

  constructor(public environmentInjector: EnvironmentInjector) { }
}
