import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private static AUTH_VALUE_KEY = 'auth-user';
  username: string = '';
  accessToken: string | null = null;

  constructor() {
    this.retrieveFromLocalStorage();
  }

  public login(value: Partial<{ username: string; password: string }>) {
    this.username = value.username ?? '';
    this.accessToken = this.generateAccess(this.username, value.password ?? '');

    this.saveToLocalStorage();
  }

  public generateAccessToken() {
    return 'Basic ' + this.accessToken;
  }

  private generateAccess(username: string, password: string) {
    const result = btoa(`${username}:${password}`);
    return result;
  }

  public logout() {
    this.username = '';
    this.accessToken = null;

    localStorage.removeItem(AuthService.AUTH_VALUE_KEY);
  }

  private retrieveFromLocalStorage() {
    const userString = localStorage.getItem(AuthService.AUTH_VALUE_KEY);
    if (!userString) return;
    try {
      const { username, accessToken } = JSON.parse(userString) as {
        username: string;
        accessToken: string;
      };
      this.username = username;
      this.accessToken = accessToken;
    } catch (error) {}
  }

  private saveToLocalStorage() {
    try {
      const userString = JSON.stringify({
        username: this.username,
        accessToken: this.accessToken,
      });
      localStorage.setItem(AuthService.AUTH_VALUE_KEY, userString);
    } catch (error) {
      this.logout();
    }
  }

  public get isAuthorized() {
    return this.accessToken !== null;
  }
}
