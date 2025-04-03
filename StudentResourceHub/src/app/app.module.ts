import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { AboutComponent } from './about/about.component';
import { AddResourceComponent } from './add-resource/add-resource.component';
import { ProgrammingComponent } from './categories/programming/programming.component';
import { DesignComponent } from './categories/design/design.component';
import { MathComponent } from './categories/math/math.component';
import { ResourceListComponent } from './resource-list/resource-list.component';
import { ResourceDetailsComponent } from './resource-details/resource-details.component';
import { ResourceCategoryComponent } from './resource-category/resource-category.component';
import { AddResourceFormComponent } from './add-resource-form/add-resource-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'add-resource', component: AddResourceFormComponent },
  { path: 'resources', component: ResourceListComponent },
  { path: 'resources/:id', component: ResourceDetailsComponent },
  { path: 'categories', component: CategoriesComponent, children: [
      { path: 'programming', component: ProgrammingComponent },
      { path: 'design', component: DesignComponent },
      { path: 'math', component: MathComponent },
      { path: '', redirectTo: 'programming', pathMatch: 'full' }
    ] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationMenuComponent,
    FooterComponent,
    HomeComponent,
    CategoriesComponent,
    AboutComponent,
    AddResourceComponent,
    ProgrammingComponent,
    DesignComponent,
    MathComponent,
    ResourceListComponent,
    ResourceDetailsComponent,
    ResourceCategoryComponent,
    AddResourceFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
