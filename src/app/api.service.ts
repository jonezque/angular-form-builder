import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private emails = ['1@1.1', '1@gmail.com'];
  validateEmail(value: string) {
    return of(this.emails.includes(value)).pipe(delay(2000));
  }
}
