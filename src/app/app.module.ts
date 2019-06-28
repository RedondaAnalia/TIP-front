import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
const firebaseConfig = environment.firebaseConfig;
// tslint:disable-next-line:max-line-length
import {MatButtonModule,
        MatToolbarModule,
        MatTabsModule,
        MatCardModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSnackBarModule,
        MatStepperModule,
        MatGridListModule,
        MatExpansionModule,
        MatListModule,
        MatRadioModule,
        MatChipsModule,
        MAT_DATE_LOCALE,
        MatTooltipModule,
        MatDialogModule,
        MatMenuModule,
        MatSidenavModule,
        MatProgressSpinnerModule} from '@angular/material';

import { AgmCoreModule } from '@agm/core';

// Config
import {APP_ROUTING} from './app.routes';

// Components
import { AppComponent } from './app.component';
import { FindPetComponent } from './components/pages/find-pet/find-pet.component';
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
import { LoginComponent } from './components/pages/login/login.component';
import { ShowUserProfileComponent } from './components/show-user-profile/show-user-profile.component';
import { PetsListComponent } from './components/pets-list/pets-list.component';
import { LoggedGuard } from './services/guards/logged.guard';
import { UserLoggedGuard } from './services/guards/user-logged.guard';
import { VetLoggedGuard } from './services/guards/vet-logged.guard';
import { UserProfileComponent } from './components/pages/user-profile/user-profile.component';
import { UserModule } from './components/pages/user-profile/user.module';
import { ShowMedicalCardsComponent } from './components/show-medical-cards/show-medical-cards.component';
import { NewMedicalCardComponent } from './components/new-medical-card/new-medical-card.component';
import { MyPetsComponent } from './components/pages/my-pets/my-pets.component';
import { MyMilestonesComponent } from './components/pages/my-milestones/my-milestones.component';
import { NewPetComponent } from './components/new-pet/new-pet.component';
import { BooleanTransformerPipe } from './pipes/boolean-transformer.pipe';
import { GenderTransformerPipe } from './pipes/gender-transformer.pipe';
import { GenderUserTransformerPipe } from './pipes/gender-user-transformer.pipe';
import { ChangePhotoComponent } from './components/change-photo/change-photo.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { PdfViewComponent } from './components/pdf-view/pdf-view.component';
import { PdfService } from './services/pdf.service';
import { VeterinariesMapComponent } from './components/veterinaries-map/veterinaries-map.component';
import { MyNearbyVeterinariansComponent } from './components/pages/my-nearby-veterinarians/my-nearby-veterinarians.component';
import { MyFriendsListComponent } from './components/my-friends-list/my-friends-list.component';
import { MyFriendsComponent } from './components/pages/my-friends/my-friends.component';
import { SearchUsersComponent } from './components/search-users/search-users.component';
import {SingUpDialogComponent} from './components/sing-up-dialog/sing-up-dialog.component';
import { FindUsersComponent } from './components/pages/find-users/find-users.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {LocationPetComponent} from './components/location-pet/location-pet.component';
import {AngularFirestore} from '@angular/fire/firestore';
import {FirebaseService} from './services/firebase.service';


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
    MyPetsComponent,
    MyMilestonesComponent,
    NewPetComponent,
    BooleanTransformerPipe,
    GenderTransformerPipe,
    GenderUserTransformerPipe,
    ChangePhotoComponent,
    MyFriendsListComponent,
    ImagenPipe,
    PdfViewComponent,
    VeterinariesMapComponent,
    MyNearbyVeterinariansComponent,
    MyFriendsComponent,
    SearchUsersComponent,
    SingUpDialogComponent,
    FindUsersComponent,
    LocationPetComponent,
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAx82m7KSQg0obJQYw7L5tGcEXcoM1u9sE',
      libraries: ['places']}),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatMenuModule,
    MatSidenavModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSelectModule,
    MatSidenavModule,
    MatExpansionModule,
    MatMenuModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatStepperModule,
    MatDatepickerModule,        // <----- import(must)
    MatNativeDateModule,        // <----- import for date formating(optional)
    APP_ROUTING,
    UserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [
    FirebaseService,
    PetService,
    UserService,
    PdfService,
    ApplicationService,
    PetProfileGuard,
    SelectPetGuard,
    LoggedGuard,
    UserLoggedGuard,
    VetLoggedGuard,
    AngularFirestore,
    {provide: MAT_DATE_LOCALE, useValue: 'es'},
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    NewMedicalCardComponent,
    NewPetComponent,
    ChangePhotoComponent,
    SingUpDialogComponent,
    PdfViewComponent ]
})
export class AppModule { }
