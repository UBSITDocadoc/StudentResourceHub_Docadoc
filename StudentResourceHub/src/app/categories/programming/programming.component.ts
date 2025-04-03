import { Component, OnInit } from '@angular/core';
import { Resource } from '../../models/resource';
import { ResourceService } from '../../resource.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-programming',
  standalone: false,
  templateUrl: './programming.component.html',
  styleUrls: ['./programming.component.css']
})
export class ProgrammingComponent implements OnInit {
  resources: Resource[] = [];

  constructor(private resourceService: ResourceService, private router: Router) {}

  ngOnInit(): void {
    this.resourceService.getResources().subscribe(res => {
      this.resources = res.filter(resource => resource.category.toLowerCase() === 'programming');
      console.log('ProgrammingComponent resources:', this.resources);
    });
  }

  viewDetails(resource: Resource): void {
    this.router.navigate(['/resources', resource.id]);
  }
}
