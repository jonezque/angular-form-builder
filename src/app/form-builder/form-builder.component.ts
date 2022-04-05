import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { FormService } from './form.service';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css'],
})
export class FormBuilderComponent implements OnInit {
  formGroup: FormGroup;

  get projects() {
    return this.formService.projects;
  }

  projectFromGroup(project: any) {
    return project as FormGroup;
  }

  constructor(private formService: FormService) {}

  ngOnInit() {
    this.formGroup = this.formService.formGroup;
  }

  addForm() {
    this.formService.addForm();
  }

  removeForm(index: number) {
    this.formService.removeForm(index);
  }
}
