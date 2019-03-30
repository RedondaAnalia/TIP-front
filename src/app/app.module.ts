import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_ROUTING} from './app.routes';


import { AppComponent } from './app.component';
import { FindPetComponent } from './components/find-pet/find-pet.component';


@NgModule({
  declarations: [
    AppComponent,
    FindPetComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
