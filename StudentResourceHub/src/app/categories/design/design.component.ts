import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../../resource.service';
import { Resource } from '../../models/resource';

@Component({
  selector: 'app-design',
  standalone: false,
  templateUrl: './design.component.html',
  styleUrl: './design.component.css'
})
export class DesignComponent implements OnInit {
  resources: Resource[] = [];

  constructor(private resourceService: ResourceService) {}

  ngOnInit(): void {
    this.resourceService.getResources().subscribe(res =>
      this.resources = res.filter(r => r.category === 'Design')
    );
  }
}
