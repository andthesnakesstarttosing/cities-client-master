import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private opened$ = new BehaviorSubject<boolean>(false);
  constructor() {}

  open(): void {
    this.opened$.next(true);

    document.body.style.overflow = 'hidden';
  }

  close(): void {
    this.opened$.next(false);
    document.body.style.overflow = '';
  }

  get isOpened(): boolean {
    return this.opened$.value;
  }
}
