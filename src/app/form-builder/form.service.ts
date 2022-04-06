import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  formGroup: FormGroup;
  index = 0;

  constructor(private fb: FormBuilder) {
    this.init();
  }

  get projects() {
    return this.formGroup.controls.projects as FormArray;
  }

  projectFromGroup(project: any) {
    return project as FormGroup;
  }

  addForm() {
    this.projects.push(this.createForm());
  }

  removeForm(index: number) {
    this.projects.removeAt(index);
  }

  private createForm() {
    this.index++;
    return this.fb.group({
      id: this.index,
      name: `FormGroup-${this.index}`,
    });
  }

  private init() {
    this.formGroup = this.fb.group({
      projects: this.fb.array([this.createForm()]),
    });
    /* 
    this.formGroup = new FormGroup({
      projects: new FormArray([this.createForm()])
    })
    */
  }
}
