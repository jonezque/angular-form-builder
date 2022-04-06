import { Component } from '@angular/core';
import { FormService } from '../form.service';

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.css'],
})
export class FormViewComponent {
  index = 0;
  name = '';
  constructor(public formService: FormService) {}
}
