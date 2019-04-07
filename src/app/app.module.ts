import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_ROUTING} from './app.routes';

import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { FindPetComponent } from './components/find-pet/find-pet.component';
import { PetProfileComponent } from './components/pet-profile/pet-profile.component';
import { PetService } from './services/pet-service';
import { HttpClientModule } from '@angular/common/http';
import { PetProfileGuard } from './services/guards/pet.profile.guard';
import { DateFormatterPipe } from './pipes/date-formatter.pipe';
import { NullTransformerPipe } from './pipes/null-transformer.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FindPetComponent,
    PetProfileComponent,
    DateFormatterPipe,
    NullTransformerPipe,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [
    PetService,
    PetProfileGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
