import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { InputNumberModule } from 'primeng/inputnumber';

import { LomQuizzRoutingModule } from './routes';

import { LomQuizzMainComponent } from './main/main.component';

@NgModule({
    imports: [
        CommonModule,
        LomQuizzRoutingModule,
        CardModule,
        ButtonModule,
        InputTextModule,
        ReactiveFormsModule,
        RadioButtonModule,
        CheckboxModule,
        MessagesModule,
        MessageModule,
        ProgressSpinnerModule,
        InputNumberModule
    ],
    declarations: [LomQuizzMainComponent],
    providers: [],
    exports: [LomQuizzMainComponent],
})
export class LomQuizzModule { }
