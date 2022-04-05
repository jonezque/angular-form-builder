import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { EmailValidator } from './email-validator';

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.css'],
})
export class FormExampleComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private fb: FormBuilder, private api: ApiService) {}

  ngOnInit() {
    this.formGroup = this.fb.group({
      email: [
        '',
        {
          validators: [Validators.required, Validators.email],
          asyncValidators: [EmailValidator.createValidator(this.api)],
        },
      ],
      password: [
        '',
        [Validators.minLength(5), Validators.required, Validators.maxLength(8)],
      ],
    });

    Object.entries(this.formGroup.controls).map(([name, control]) => {
      control.valueChanges.subscribe((value) => {
        console.log(name, value);
      });
    });
  }

  hasFieldError(field: string, error: string) {
    const control = this.getControl(field);
    return control.hasError(error);
  }

  getControl(field: string) {
    return this.formGroup.controls[field];
  }
}
