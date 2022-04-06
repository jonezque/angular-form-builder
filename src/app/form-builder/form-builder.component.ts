import { Component } from '@angular/core';
import { FormService } from './form.service';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css'],
})
export class FormBuilderComponent {
  get projects() {
    return this.formService.projects;
  }

  constructor(public formService: FormService) {}
}
