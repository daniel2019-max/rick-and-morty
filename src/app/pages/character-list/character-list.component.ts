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
                        this.resultRequest = res
                    },
                    error: (err) => {
                        console.log(err)
                    }
                }
            )
    }

    filterCharacters(name: string) {
        this.charactersService.getCharactersFilter(name).subscribe({
            next: (res) => {
                this.resultRequest = res
            },
            error: (err) => {
                console.log(err)
            }
        })

    }
}
