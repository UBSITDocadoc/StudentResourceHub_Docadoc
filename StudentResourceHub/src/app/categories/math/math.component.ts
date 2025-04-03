import { Component, OnInit } from '@angular/core';
import { Resource } from '../../models/resource';
import { ResourceService } from '../../resource.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-math',
  standalone: false,
  templateUrl: './math.component.html',
  styleUrl: './math.component.css'
})
export class MathComponent implements OnInit {
  resources: Resource[] = [];

  constructor(private resourceService: ResourceService, private router: Router) {}

  ngOnInit(): void {
    this.resourceService.getResources().subscribe(res => {
      console.log("MathComponent resources:", res);
      this.resources = res.filter(resource => resource.category.toLowerCase() === 'math');
    });
  }

  viewDetails(resource: Resource): void {
    this.router.navigate(['/resources', resource.id]);
  }
}
