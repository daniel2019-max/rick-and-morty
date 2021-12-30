import {Component, OnInit} from '@angular/core';
import {CharactersService} from "../../services/characters.service";
import {ResultRequestInterface} from "../../models/resultRequest.interface";

@Component({
    selector: 'app-character-list',
    templateUrl: './character-list.component.html',
    styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
    resultRequest: ResultRequestInterface

    constructor(private charactersService: CharactersService) {
    }

    ngOnInit(): void {
        this.getAllCharacters()
    }

    getAllCharacters() {
        this.charactersService.getAllCharacters()
            .subscribe(
                {
                    next: (res) => {
                        console.log(res)
                        this.resultRequest = res
                    },
                    error: (err) => {
                        // this.handleError.bind(this)
                        console.log(err)
                    }
                }
            )
    }
}
