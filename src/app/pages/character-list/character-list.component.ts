import {DOCUMENT} from '@angular/common';
import {Component, HostListener, Inject, OnInit} from '@angular/core';

import {CharactersService} from "@services/characters.service";
import {CharacterInterface} from "@models/character.interface";
import {InfoInterface} from "@models/resultRequest.interface";

@Component({
    selector: 'app-character-list',
    templateUrl: './character-list.component.html',
    styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
    characters: CharacterInterface[] = []
    infoApiResult: InfoInterface
    private scrollHeight: number = 500
    private nameSearch: string = ''
    private pageNum: number = 1
    showButton: boolean = false

    constructor(@Inject(DOCUMENT) private document: Document,
                private charactersService: CharactersService) {
    }

    ngOnInit(): void {
        this.getCharactersFilter()
    }

    @HostListener('window:scroll')
    onWindowScroll(): void {
        const yOffset = window.scrollY
        const scrollTop = this.document.documentElement.scrollTop
        const scrollBodyTop = this.document.documentElement.scrollTop
        if ((yOffset || scrollTop || scrollBodyTop) > this.scrollHeight) {
            this.showButton = true
        } else if (this.showButton && (yOffset || scrollTop || scrollBodyTop) < this.scrollHeight) {
            this.showButton = false
        }
    }

    getCharactersFilter() {
        this.charactersService.getCharactersFilter(this.nameSearch, this.pageNum).subscribe({
            next: (res) => {
                this.characters = [...this.characters, ...res.results]
                this.infoApiResult = res.info
            },
            error: (err) => {
                if (err.error.error === 'There is nothing here') {
                    this.characters = []
                    this.infoApiResult = {
                        count: 0,
                        next: '',
                        prev: '',
                        pages: 0
                    }
                }
            }
        })
    }

    filterCharacters(name: string) {
        this.characters = []
        this.pageNum = 1
        this.nameSearch = name
        this.infoApiResult.count = 0
        this.getCharactersFilter()
    }

    onScrollDow() {
        if (this.infoApiResult.next) {
            this.pageNum++;
            this.getCharactersFilter()
        }
    }

    onScrollTop() {
        /** browser safari*/
        this.document.body.scrollTop = 0
        /** other browsers*/
        this.document.documentElement.scrollTop = 0
    }
}
