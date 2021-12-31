import {Component, Input, OnInit} from '@angular/core';
import {CharacterInterface} from "../../models/character.interface";

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
    isHover = false

    _character: CharacterInterface;

    get character(): CharacterInterface {
        return this._character;
    }

    @Input() set character(value: CharacterInterface) {
        this._character = value;
    }

    constructor() {
    }

    ngOnInit(): void {
    }

    showCharacter() {
        alert(this.character.name)
    }

}
