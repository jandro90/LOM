import { NgModule } from '@angular/core'; 
import { RouterModule } from '@angular/router';

import { LomQuizzRoutes } from './lom-quizz.routes';

@NgModule({
  imports: [RouterModule.forChild(LomQuizzRoutes)],
  exports: [RouterModule]
})
export class LomQuizzRoutingModule { }
