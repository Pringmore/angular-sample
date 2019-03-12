import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/* import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
 *//* import { NoopAnimationsModule } from '@angular/platform-browser/animations';
 */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
