import { RouterModule, Routes } from '@angular/router';
import { FindPetComponent } from './components/find-pet/find-pet.component';
import { PetProfileComponent } from './components/pet-profile/pet-profile.component';

const APP_ROUTES: Routes = [
    { path: 'findPet', component: FindPetComponent },
    { path: 'petProfile', component: PetProfileComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'findPet' }
] ;

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
