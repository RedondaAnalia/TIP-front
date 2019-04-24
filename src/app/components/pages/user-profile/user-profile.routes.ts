import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile.component';
import { LoggedGuard } from '../../../services/guards/logged.guard';
import { UserLoggedGuard } from '../../../services/guards/user-logged.guard';
import { PetsListComponent } from '../../pets-list/pets-list.component';
import { PetProfileComponent } from '../../pet-profile/pet-profile.component';

const userRoutes: Routes = [
    {
        path: '',
        component: UserProfileComponent,
        canActivate: [LoggedGuard, UserLoggedGuard],
        children: [
            { path: 'yourPets', component: PetsListComponent},
            { path: 'myPet', component: PetProfileComponent},
            { path: '', redirectTo: '/yourPets', pathMatch: 'full' }
        ]
    }
];


export const USER_ROUTES = RouterModule.forChild( userRoutes );
