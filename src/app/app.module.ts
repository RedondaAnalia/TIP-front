import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// tslint:disable-next-line:max-line-length
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatTabsModule, MatCardModule, MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatSnackBarModule, MatStepperModule} from '@angular/material';


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
import { LoginComponent } from './components/login/login.component';
import { ShowUserProfileComponent } from './components/show-user-profile/show-user-profile.component';
import { PetsListComponent } from './components/pets-list/pets-list.component';
import { LoggedGuard } from './services/guards/logged.guard';
import { UserLoggedGuard } from './services/guards/user-logged.guard';
import { VetLoggedGuard } from './services/guards/vet-logged.guard';
import { UserProfileComponent } from './components/pages/user-profile/user-profile.component';
import { USER_ROUTES } from './components/pages/user-profile/user-profile.routes';
import { UserModule } from './components/pages/user-profile/user.module';
import { ShowMedicalCardsComponent } from './components/show-medical-cards/show-medical-cards.component';
import { NewMedicalCardComponent } from './components/new-medical-card/new-medical-card.component';

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
    UserProfileComponent,
    LoginComponent,
    ShowUserProfileComponent,
    PetsListComponent,
    ShowMedicalCardsComponent,
    NewMedicalCardComponent,
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
    MatStepperModule,
    MatDatepickerModule,        // <----- import(must)
    MatNativeDateModule,        // <----- import for date formating(optional)
    APP_ROUTING,
    UserModule
  ],
  providers: [
    PetService,
    UserService,
    ApplicationService,
    PetProfileGuard,
    SelectPetGuard,
    LoggedGuard,
    UserLoggedGuard,
    VetLoggedGuard
  ],
  bootstrap: [AppComponent],
  entryComponents: [ NewMedicalCardComponent ]
})
export class AppModule { }
