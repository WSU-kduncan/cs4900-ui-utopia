import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'homepage', 
        loadComponent: () => import('./components/homepage/homepage.component').then(m => m.HomepageComponent)
    },

    {
        path: 'clients',
        loadComponent: () => import('./components/client-info/client-info.component').then(m => m.ClientInfoComponent)
    },

    {
        path: 'trainers',
        loadComponent: () => import('./components/trainer/trainer-list.component').then(m => m.TrainerListComponent)
    },

    {
        path: 'sessions',
        loadComponent: () => import('./components/session/session.component').then(m => m.SessionComponent)
    },

    {
        path: '',
        redirectTo: 'homepage',
        pathMatch: 'full'
    },

    {
        path: '**',
        redirectTo: 'homepage'
    }
];
