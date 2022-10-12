import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LomQuizzRoutingModule } from './routes';

import { LomQuizzMainComponent } from './main/main.component';

@NgModule({
    imports: [
        CommonModule,
        LomQuizzRoutingModule
    ],
    declarations: [LomQuizzMainComponent],
    providers: [],
    exports: [LomQuizzMainComponent],
})
export class LomQuizzModule { }
