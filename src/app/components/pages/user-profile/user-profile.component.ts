import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html'
})
export class UserProfileComponent implements OnInit {

   width;
   height;
   mode: String = 'side';
   open = 'true';
   title = 'Pet Heroes';
   navList: NavList[];

   constructor(public ngZone: NgZone,
               public route: Router) {

       this.navList = [
           { categoryName: 'Mascotas', icon: 'pets', dropDown: false,
               subCategory:
                   [
                       { subCategoryName: 'Ver mis mascotas',
                         subCategoryLink: '/myPets', subCategoryQuery: {title: 'query item 1'}, visable: true, },
                       { subCategoryName: 'Agregar una mascota',
                         subCategoryLink: '/addPet', subCategoryQuery: {title: 'query item 1'}, visable: true, },
                   ]
           },
         { categoryName: 'Amigos', icon: 'person', dropDown: false,
           subCategory:
             [
               { subCategoryName: 'Ver mis amigos',
                 subCategoryLink: '/myFriends', subCategoryQuery: {title: 'query item 1'}, visable: true, },
               { subCategoryName: 'Agregar un amigo',
                 subCategoryLink: '/searchFriends', subCategoryQuery: {title: 'query item 1'}, visable: true, },
             ]
         },
           { categoryName: 'Logros', icon: 'thumb_up', dropDown: false,
               subCategory:
                   [
                       { subCategoryName: 'Ver mis logros', subCategoryLink: '/myMilestones', visable: true, },
                   ]
           },
           { categoryName: 'Veterinarias cercanas', icon: 'room', dropDown: false,
               subCategory:
                   [
                       { subCategoryName: 'Ver veterinarias cercanas', subCategoryLink: '/nearbyVeterinarians', visable: true, },
                   ]
           },
           { categoryName: 'Salir', icon: 'exit_to_app', dropDown: false,
               subCategory:
                   [
                       { subCategoryName: 'Cerrar sesion', subCategoryLink: '/login', visable: true, },
                   ]
           },
       ];
       this.changeMode();
       window.onresize = (e) => {
           ngZone.run(() => {
               this.changeMode();
           });
       };
   }

   ngOnInit() {

   }

   changeMode() {
       this.width = window.innerWidth;
       this.height = window.innerHeight;
       if (this.width <= 800) {
           this.mode = 'over';
           this.open = 'false';
       }
       if (this.width > 800) {
           this.mode = 'side';
           this.open = 'true';
       }
   }

}

export class NavList {
   categoryName: string;
   icon: string;
   dropDown: boolean;
   subCategory: NavListItem[];
   constructor(_categoryName:string,_icon:string,_dropDown:boolean,_subCategory:NavListItem[]) {
       this.categoryName = _categoryName;
       this.icon = _icon;
       this.dropDown = _dropDown;
       this.subCategory = _subCategory;
   }
}

export class NavListItem {
   subCategoryName: string;
   subCategoryLink: string;
   subCategoryQuery?: any;
   visable: boolean;
}

