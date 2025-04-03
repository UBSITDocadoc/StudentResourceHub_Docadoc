import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../../resource.service';
import { Resource } from '../../models/resource';

@Component({
  selector: 'app-programming',
  standalone: false,
  templateUrl: './programming.component.html',
  styleUrl: './programming.component.css'
})
export class ProgrammingComponent implements OnInit {
  resources: Resource[] = [];

  constructor(private resourceService: ResourceService) {}

  ngOnInit(): void {
    this.resourceService.getResources().subscribe(res =>
      this.resources = res.filter(r => r.category === 'Programming')
    );
  }
}