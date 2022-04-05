import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  formGroup: FormGroup;
  index = 0;
  constructor(private fb: FormBuilder) {
    this.formGroup = fb.group({
      projects: this.fb.array([this.createForm()]),
    });
  }

  get projects() {
    return this.formGroup.controls.projects as FormArray;
  }

  private createForm() {
    this.index++;
    return this.fb.group({
      id: this.index,
      name: `FormGroup-${this.index}`,
    });
  }

  addForm() {
    this.projects.push(this.createForm());
  }

  removeForm(index: number) {
    this.projects.removeAt(index);
  }
}
