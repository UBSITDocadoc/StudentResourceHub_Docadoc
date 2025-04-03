import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
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
import { ProgrammingComponent } from './categories/programming/programming.component';
import { DesignComponent } from './categories/design/design.component';
import { MathComponent } from './categories/math/math.component';
import { ResourceListComponent } from './resource-list/resource-list.component';
import { ResourceDetailsComponent } from './resource-details/resource-details.component';
import { ResourceCategoryComponent } from './resource-category/resource-category.component';
import { AddResourceFormComponent } from './add-resource-form/add-resource-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationMenuComponent,
    FooterComponent,
    HomeComponent,
    CategoriesComponent,
    AboutComponent,
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
