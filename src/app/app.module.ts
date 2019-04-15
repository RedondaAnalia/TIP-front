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
import { ShowVaccinesComponent } from './components/show-vaccines/show-vaccines.component';
import { ShowPetProfileComponent } from './components/show-pet-profile/show-pet-profile.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SelectPetfromUserComponent } from './components/select-petfrom-user/select-petfrom-user.component';

@NgModule({
  declarations: [
    AppComponent,
    FindPetComponent,
    PetProfileComponent,
    DateFormatterPipe,
    NullTransformerPipe,
    ShowVaccinesComponent,
    ShowPetProfileComponent,
    SelectPetfromUserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
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
