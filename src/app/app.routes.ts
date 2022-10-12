import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: '', 
        loadChildren: () => import('./pages/lom-quizz/lom-quizz.module').then(m => m.LomQuizzModule)
    },
];