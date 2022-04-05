import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from '../api.service';

export class EmailValidator {
  static createValidator(api: ApiService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors> => {
      return api
        .validateEmail(control.value)
        .pipe(
          map((result: boolean) => (result ? null : { emailIsTaken: true }))
        );
    };
  }
}
