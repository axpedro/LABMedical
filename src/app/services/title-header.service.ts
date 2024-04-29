import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleHeaderService {
  private titleSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() { }

  setTitle(title: string): void {
    this.titleSubject.next(title);
  }
  getTitle(): Observable<string> {
    return this.titleSubject.asObservable();
  }
}
