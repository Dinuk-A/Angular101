import { Routes } from '@angular/router';

export const routes: Routes = [

    //for HOME
    {        
        path: '',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./home/home').then((m) => m.Home)
        },
    },

    //for TODO
    {
        path: 'todos',
        loadComponent: () => {
            return import('./todos/todos').then((m) => m.Todos)
        }
    }


];
