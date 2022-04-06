import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
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

  addProject() {
    this.projects.push(this.createForm());
  }

  removeProject(index: number) {
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
