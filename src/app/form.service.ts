import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

type Fields = 'id' | 'name';

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

  projectFromGroupControls(project: any) {
    return Object.keys(this.projectFromGroup(project).controls);
  }

  projectFromGroupByIndex(index: number) {
    return this.projects.controls[index] as FormGroup;
  }

  addForm() {
    this.projects.push(this.createForm());
  }

  removeForm(index: number) {
    this.projects.removeAt(index);
  }

  addControl(project: FormGroup, controlName: string) {
    project.addControl(controlName, this.fb.control(''));
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
