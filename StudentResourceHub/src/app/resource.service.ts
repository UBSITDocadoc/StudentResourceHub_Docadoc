import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Resource } from './models/resource';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  private resources: Resource[] = [];
  private resourcesSubject = new BehaviorSubject<Resource[]>(this.resources);
  resources$ = this.resourcesSubject.asObservable();

  getResources(): Observable<Resource[]> {
    return this.resources$;
  }

  addResource(resource: Resource): void {
    resource.id = this.generateId();
    this.resources.push(resource);
    this.resourcesSubject.next(this.resources);
  }

  private generateId(): number {
    return this.resources.length ? Math.max(...this.resources.map(r => r.id)) + 1 : 1;
  }
}
