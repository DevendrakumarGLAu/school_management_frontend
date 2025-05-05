import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // For reactive forms
import { HttpClientModule } from '@angular/common/http'; // For HTTP requests

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,  // Import ReactiveFormsModule
    HttpClientModule,     // Import HttpClientModule for making API requests
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,  // Export ReactiveFormsModule for use in other components
    HttpClientModule,     // Export HttpClientModule for use in other components
  ]
})
export class SharedModule { }
