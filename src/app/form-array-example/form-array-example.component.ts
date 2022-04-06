import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';

@Component({
  selector: 'app-form-array-example',
  templateUrl: './form-array-example.component.html',
  styleUrls: ['./form-array-example.component.css'],
})
export class FormArrayExampleComponent {
  get projects() {
    return this.formService.projects;
  }

  constructor(public formService: FormService) {}
}
