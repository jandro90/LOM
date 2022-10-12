import { LomQuizzMainComponent } from './../main/main.component';
import { Routes } from "@angular/router";


export const LomQuizzRoutes: Routes = [
    { path: '', component: LomQuizzMainComponent },
    { path: '', pathMatch: 'full', redirectTo: 'LomQuizzMainComponent' },
];