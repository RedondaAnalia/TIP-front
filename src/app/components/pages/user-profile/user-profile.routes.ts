import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile.component';
import { LoggedGuard } from '../../../services/guards/logged.guard';
import { UserLoggedGuard } from '../../../services/guards/user-logged.guard';
import { PetProfileComponent } from '../../pet-profile/pet-profile.component';
import { MyMilestonesComponent } from '../my-milestones/my-milestones.component';
import { MyPetsComponent } from '../my-pets/my-pets.component';

const userRoutes: Routes = [
    {
        path: '',
        component: UserProfileComponent,
        canActivate: [LoggedGuard, UserLoggedGuard],
        children: [
            { path: 'myPets', component: MyPetsComponent},
            { path: 'myPet', component: PetProfileComponent},
            { path: 'myMilestones', component: MyMilestonesComponent},
            { path: '', redirectTo: '/myPets', pathMatch: 'full' }
        ]
    }
];


export const USER_ROUTES = RouterModule.forChild( userRoutes );
