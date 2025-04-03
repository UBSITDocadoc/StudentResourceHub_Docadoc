import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { AboutComponent } from './about/about.component';
import { AddResourceComponent } from './add-resource/add-resource.component';
import { ProgrammingComponent } from './Categories/programming/programming.component';
import { DesignComponent } from './Categories/design/design.component';
import { MathComponent } from './Categories/math/math.component';

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
    MathComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
