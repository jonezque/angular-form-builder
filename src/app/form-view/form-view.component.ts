import { Component } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.css'],
})
export class FormViewComponent {
  index = 0;
  name = '';
  constructor(public projectService: ProjectService) {}
}
