import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {CharacterInterface} from "@models/character.interface";

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

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }

    showCharacter() {
        this.router.navigate(['/character-details'], {
            queryParams: {
                id: this.character.id
            }
        })
    }

}
