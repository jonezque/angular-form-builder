import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FormExampleComponent } from './form-example/form-example.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';

const routes: Routes = [
  { path: '', component: FormExampleComponent },
  { path: 'form-builder', component: FormBuilderComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
  ],
  declarations: [AppComponent, FormExampleComponent, FormBuilderComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
