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
    { id: 1, title: 'Java', description: 'Java is an object-oriented programming language known for its portability, allowing applications to run on any device with a Java Virtual Machine (JVM).', category: 'Programming' },
    { id: 2, title: 'Html', description: 'HTML (HyperText Markup Language) is the standard markup language used to create and structure content on the web. It defines the elements like headings, paragraphs, links, images, and other components to display webpages in browsers.', category: 'Design' },
    { id: 3, title: 'Fraction', description: 'Fractions are mathematical expressions that represent parts of a whole, consisting of a numerator (top number) and a denominator (bottom number).', category: 'Math' },
  ];

  constructor() { }

  ngOnInit(): void {

  }

  viewDetails(resource: Resource): void {

    console.log('Viewing details for:', resource);
  }
}
