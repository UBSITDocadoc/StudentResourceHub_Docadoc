import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ResourceService } from '../resource.service';
import { Resource } from '../models/resource';
@Component({
  selector: 'app-add-resource-form',
  standalone: false,
  templateUrl: './add-resource-form.component.html',
  styleUrl: './add-resource-form.component.css'
})
export class AddResourceFormComponent {
  resource: Partial<Resource> = {
    title: '',
    description: '',
    category: 'Programming'
  };
  categories: string[] = ['Programming', 'Design', 'Math'];

  constructor(private router: Router, private resourceService: ResourceService) {}

  onSubmit(): void {
    if (this.isFormValid()) {
      // Add the new resource using the service
      this.resourceService.addResource(this.resource as Resource);
      
      // Ensure category has a value, then navigate.
      const category = (this.resource.category || 'Programming').toLowerCase();
      console.log('Resource category for navigation:', category);
      
      this.router.navigate(['/categories', category]);
    }
  }
  

  onCancel(): void {
    this.router.navigate(['/categories']);
  }

  isFormValid(): boolean {
    return !!this.resource.title &&
           !!this.resource.description &&
           !!this.resource.category;
  }
}