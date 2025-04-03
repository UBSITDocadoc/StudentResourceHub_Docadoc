import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Resource {
  id: number;
  title: string;
  description: string;
  category: string;
}
@Component({
  selector: 'app-resource-category',
  standalone: false,
  templateUrl: './resource-category.component.html',
  styleUrl: './resource-category.component.css'
})
export class ResourceCategoryComponent implements OnInit {
  category: string = '';
  categoryDescription: string = '';
  filteredResources: Resource[] = [];
  resources: Resource[] = [
    { id: 1, title: 'Angular Basics', description: 'Introduction to Angular framework.', category: 'Programming' },
    { id: 2, title: 'UI/UX Design', description: 'Principles of user interface design.', category: 'Design' },
    { id: 3, title: 'Calculus 101', description: 'Fundamentals of differential calculus.', category: 'Math' },
    { id: 4, title: 'Advanced Angular', description: 'Deep dive into Angular features.', category: 'Programming' }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.category = this.route.snapshot.paramMap.get('category') || '';
    if (this.category.toLowerCase() === 'programming') {
      this.categoryDescription = 'Resources related to programming topics.';
    } else if (this.category.toLowerCase() === 'design') {
      this.categoryDescription = 'Resources on design and creativity.';
    } else if (this.category.toLowerCase() === 'math') {
      this.categoryDescription = 'Resources covering various math topics.';
    }
    this.filteredResources = this.resources.filter(res => res.category.toLowerCase() === this.category.toLowerCase());
  }
}
