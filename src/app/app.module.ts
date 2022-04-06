import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FormExampleComponent } from './form-example/form-example.component';
import { FormArrayExampleComponent } from './form-array-example/form-array-example.component';
import { FormViewComponent } from './form-view/form-view.component';

const routes: Routes = [
  { path: '', component: FormExampleComponent },
  { path: 'form-array', component: FormArrayExampleComponent },
  { path: 'form-view', component: FormViewComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    FormExampleComponent,
    FormArrayExampleComponent,
    FormViewComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
