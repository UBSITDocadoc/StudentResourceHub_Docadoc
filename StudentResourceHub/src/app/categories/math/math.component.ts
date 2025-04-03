import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../../resource.service';
import { Resource } from '../../models/resource';
@Component({
  selector: 'app-math',
  standalone: false,
  templateUrl: './math.component.html',
  styleUrl: './math.component.css'
})
export class MathComponent implements OnInit {
  resources: Resource[] = [];

  constructor(private resourceService: ResourceService) {}

  ngOnInit(): void {
    this.resourceService.getResources().subscribe(res =>
      this.resources = res.filter(r => r.category === 'Math')
    );
  }
}
