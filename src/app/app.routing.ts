import {Routes, RouterModule}   from '@angular/router';
import {Hello2Component} from './hello2/hello2.component';

// Components
const appRoutes: Routes = [
    {
        path: 'hello2',
        component: Hello2Component
    }
];

export const AppRouting = RouterModule.forRoot(appRoutes, {useHash: false, initialNavigation: false});
