import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {debounceTime, distinctUntilChanged} from "rxjs";

@Component({
    selector: 'app-input-search',
    templateUrl: './input-search.component.html',
    styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent implements OnInit {

    nameSearchFC = new FormControl({value: '', disabled: false});
    @Output() nameFilter: EventEmitter<string> = new EventEmitter();

    constructor() {
    }

    ngOnInit(): void {
        this.nameSearchFC.valueChanges.pipe(
            debounceTime(300)
        ).subscribe(value => {
            this.nameFilter.emit(value)
        });
    }

}
