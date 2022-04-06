import { Component } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-form-array-example',
  templateUrl: './form-array-example.component.html',
  styleUrls: ['./form-array-example.component.css'],
})
export class FormArrayExampleComponent {
  get projects() {
    return this.projectService.projects;
  }

  constructor(public projectService: ProjectService) {}
}
