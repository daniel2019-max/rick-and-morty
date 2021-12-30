import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSearchComponent } from './components/input-search/input-search.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        InputSearchComponent
    ],
    exports: [
        InputSearchComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class SharedModule { }
