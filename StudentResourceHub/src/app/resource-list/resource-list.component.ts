import { Component, OnInit } from '@angular/core';

interface Resource {
  id: number;            
  title: string;
  description: string;
  category: string;
}
@Component({
  selector: 'app-resource-list',
  standalone: false,
  templateUrl: './resource-list.component.html',
  styleUrl: './resource-list.component.css'
})
export class ResourceListComponent implements OnInit {
  resources: Resource[] = [
    { id: 1, title: 'Resource One', description: 'This is a brief description about Resource One.', category: 'Programming' },
    { id: 2, title: 'Resource Two', description: 'This is a brief description about Resource Two.', category: 'Design' },
    { id: 3, title: 'Resource Three', description: 'This is a brief description about Resource Three.', category: 'Math' },
  ];

  constructor() { }

  ngOnInit(): void {

  }

  viewDetails(resource: Resource): void {

    console.log('Viewing details for:', resource);
  }
}
