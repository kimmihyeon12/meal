import { Injectable, NgZone } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, throwError } from "rxjs";
import { AuthService } from "./auth.service";

declare const Kakao: any;
declare const naver: any;
declare const gapi: any;

@Injectable({
  providedIn: 'root'
})
export class SocialLoginService {

  constructor(
    private readonly http: HttpClient,
    private readonly authService: AuthService) { }

  async init() {
    this.kakaoInit();
    this.naverInit();
    this.googleInit();
  }

  kakaoInit() {
    Kakao.init('791e5dda69a721c3ff0ab026fd49c06d');
  }

  naverInit() {

  }

  googleInit() {
    gapi.load('client:auth2', () => {
      gapi.client.init({
        clientId: '1096901307198-o2gi1p8u8fe2s7v9ta83l0o1kfgpoiqn.apps.googleusercontent.com',
        scope: 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile',
        prompt: 'select_account',
        plugin_name: "chat"
      })
    });
  }

  async loginWithGoogle() {
    gapi.auth2.getAuthInstance().signIn().then((googleUser: any) => {
      const token = googleUser.getAuthResponse().access_token;
      if (!token) {
        return
      }
      this.getGoogleUserInfo(token)
    });
  }

  async loginWithNaver() {
  }

  async loginWithKakao() {
    Kakao.Auth.login({
      success: (res: any) => {
        const token = res.access_token;
        if (!token) {
          return
        }
        this.getKakaoUserInfo(res.token)
      },
      fail: (err: any) => {
        console.error(err)
      }
    })
  }

  async getKakaoUserInfo(token: string) {
    await Kakao.Auth.setAccessToken(token);
    await Kakao.API.request({
      url: '/v2/user/me',
    })
      .then((res: any) => {
        this.authService.login(res.email, res.name)
      })
      .catch((err: any) => {
        console.error(err)
      });
  }

  async getGoogleUserInfo(token: string) {
    console.log(token)
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get('https://www.googleapis.com/oauth2/v1/userinfo', { headers }).pipe(
      catchError(error => {
        console.error(error);
        return throwError('Failed to fetch user info');
      })
    ).subscribe((res: any) => {
      console.log(res)
      this.authService.login(res.email, res.name)
    })
  }
}