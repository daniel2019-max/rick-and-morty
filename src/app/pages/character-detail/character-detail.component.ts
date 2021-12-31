import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {CharactersService} from "@services/characters.service";
import {CharacterInterface} from "@models/character.interface";
import {EpisodeInterface} from "@models/episode.interface";

@Component({
    selector: 'app-character-detail',
    templateUrl: './character-detail.component.html',
    styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
    idCharacter: number

    character$: Observable<CharacterInterface>
    episodes: EpisodeInterface[] = []

    constructor(private route: ActivatedRoute,
                private router: Router,
                private charactersService: CharactersService) {
    }

    ngOnInit(): void {
        this.route.queryParams
            .subscribe(
                (params) => {
                    if (params['id']) {
                        this.getCharacter(parseInt(params['id']))
                    } else {
                        this.router.navigate(['/character-list'])
                    }
                }
            );
    }

    getCharacter(id: number) {
        this.character$ = this.charactersService.getCharactersById(id)

    }

}
