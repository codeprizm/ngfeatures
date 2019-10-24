import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedin = false;

  constructor() { }

  public isUserLoggedIn(): boolean {
    return this.isLoggedin;
  }

  public authenticate(username: string, password: string): boolean {
    this.isLoggedin = true;
    return this.isLoggedin;
  }
}
