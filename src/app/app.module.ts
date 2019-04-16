import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// tslint:disable-next-line:max-line-length
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatTabsModule, MatCardModule, MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatSnackBarModule} from '@angular/material';


// Config
import {APP_ROUTING} from './app.routes';

// Components
import { AppComponent } from './app.component';
import { FindPetComponent } from './components/find-pet/find-pet.component';
import { PetProfileComponent } from './components/pet-profile/pet-profile.component';
import { ShowVaccinesComponent } from './components/show-vaccines/show-vaccines.component';
import { ShowPetProfileComponent } from './components/show-pet-profile/show-pet-profile.component';
import { SelectPetfromUserComponent } from './components/select-petfrom-user/select-petfrom-user.component';

// Pipes
import { NullTransformerPipe } from './pipes/null-transformer.pipe';
import { DateFormatterPipe } from './pipes/date-formatter.pipe';

// Services
import { PetProfileGuard } from './services/guards/pet.profile.guard';
import { UserService } from './services/user.service';
import { PetService } from './services/pet-service';
import { SelectPetGuard } from './services/guards/select-pet.guard';
import { ApplicationService } from './services/application.service';
import { NewApplicationComponent } from './components/new-application/new-application.component';

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
    NewApplicationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSnackBarModule,
    MatSelectModule,
    MatDatepickerModule,        // <----- import(must)
    MatNativeDateModule,        // <----- import for date formating(optional)
    APP_ROUTING
  ],
  providers: [
    PetService,
    UserService,
    ApplicationService,
    PetProfileGuard,
    SelectPetGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
