import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface Resource {
  id: number;
  title: string;
  description: string;
  category: string;
  url: string;
  author: string;
  publicationDate: Date;
}
@Component({
  selector: 'app-resource-details',
  standalone: false,
  templateUrl: './resource-details.component.html',
  styleUrl: './resource-details.component.css'
})
export class ResourceDetailsComponent implements OnInit {
  resource!: Resource;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.resource = { 
      id: parseInt(id || '0'),
      title: 'Sample Resource Title',
      description: 'This is a complete detailed description of the resource. It provides all the necessary information that a user might need to understand the context, usage, and benefits of the resource.',
      category: 'Programming',
      url: 'https://example.com',
      author: 'John Doe',
      publicationDate: new Date('2025-04-03')
    };
  }

  goBack(): void {
    this.router.navigate(['/resources']);
  }
}