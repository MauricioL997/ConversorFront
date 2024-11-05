import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { Error404Component } from './pages/error404/error404.component';
import { ConversorComponent } from './pages/conversor/conversor.component';
import { MonedasComponent } from './pages/monedas/monedas.component';
import { SuscripcionesComponent } from './pages/suscripciones/suscripciones.component';
import { AdminconsoleComponent } from './pages/adminconsole/adminconsole.component';
import { HistorialComponent } from './pages/historial/historial.component';
import { DashboardconteinerComponent } from './pages/dashboardconteiner/dashboardconteiner.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'dashboard',
        component: DashboardconteinerComponent,
        children: [
            {
                path: 'conversor',
                component: ConversorComponent
            },
            {
                path: 'historial',
                component: HistorialComponent
            },
            {
                path: 'monedas',
                component: MonedasComponent
            },
            {
                path: 'suscripciones',
                component: SuscripcionesComponent
            },
            {
                path: 'adminconsole',
                component: AdminconsoleComponent
            }
        ]
    },
    {
        path: '**',
        component: Error404Component
    }
];
