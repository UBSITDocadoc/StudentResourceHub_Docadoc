import { Component, OnInit } from '@angular/core';
import { Resource } from '../../models/resource';
import { ResourceService } from '../../resource.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-design',
  standalone: false,
  templateUrl: './design.component.html',
  styleUrl: './design.component.css'
})
export class DesignComponent implements OnInit {
  resources: Resource[] = [];

  constructor(private resourceService: ResourceService, private router: Router) {}

  ngOnInit(): void {
    this.resourceService.getResources().subscribe(res => {
      console.log("DesignComponent resources:", res);
      this.resources = res.filter(resource => resource.category.toLowerCase() === 'design');
    });
  }

  viewDetails(resource: Resource): void {
    this.router.navigate(['/resources', resource.id]);
  }
}
