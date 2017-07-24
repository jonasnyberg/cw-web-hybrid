import {Routes, RouterModule}   from '@angular/router';

// Components
import {NotFoundComponent} from './modules/shared/not-found/not-found.component';

const appRoutes: Routes = [
    // {
    //     path: '',
    //     redirectTo: '/login',
    //     pathMatch: 'full'
    // },
    // {
    //     path: '**',
    //     component: NotFoundComponent
    // },
    // {
    //     path: 'not-found',
    //     component: NotFoundComponent
    // }
];

export const AppRouting = RouterModule.forRoot(appRoutes, {initialNavigation: true});
