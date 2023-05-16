import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  message: string = '';

  public clear(): void {
    this.message = '';
  }

  public handle(message: string): void {
    this.message = message;
  }

  public get isErrorPresent(): boolean {
    return this.message !== '';
  }
}
