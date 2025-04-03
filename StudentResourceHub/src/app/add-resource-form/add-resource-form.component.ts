import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-resource-form',
  standalone: false,
  templateUrl: './add-resource-form.component.html',
  styleUrl: './add-resource-form.component.css'
})
export class AddResourceFormComponent {
  resource = {
    title: '',
    description: '',
    url: '',
    category: '',
    author: ''
  };
  categories: string[] = ['Programming', 'Design', 'Math'];

  constructor(private router: Router) { }

  onSubmit(): void {
    console.log('Resource submitted:', this.resource);
    this.router.navigate(['/resources']);
  }

  onCancel(): void {
    this.router.navigate(['/resources']);
  }

  isFormValid(): boolean {
    return this.resource.title !== '' &&
           this.resource.description !== '' &&
           this.resource.url !== '' &&
           this.resource.category !== '' &&
           this.resource.author !== '';
  }
}