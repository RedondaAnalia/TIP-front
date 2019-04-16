import { RouterModule, Routes } from '@angular/router';
import { FindPetComponent } from './components/find-pet/find-pet.component';
import { PetProfileComponent } from './components/pet-profile/pet-profile.component';
import { PetProfileGuard } from './services/guards/pet.profile.guard';
import { SelectPetfromUserComponent } from './components/select-petfrom-user/select-petfrom-user.component';
import { SelectPetGuard } from './services/guards/select-pet.guard';
import { NewApplicationComponent } from './components/new-application/new-application.component';

const APP_ROUTES: Routes = [
    { path: 'findPet', component: FindPetComponent },
    { path: 'newApplication',
        component: NewApplicationComponent,
        canActivate: [PetProfileGuard, SelectPetGuard]},
    { path: 'petProfile',
        component: PetProfileComponent,
        canActivate: [PetProfileGuard] },
    { path: 'selectPet',
        component: SelectPetfromUserComponent,
        canActivate: [SelectPetGuard] },
    { path: '**', pathMatch: 'full', redirectTo: 'findPet' }
] ;

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
