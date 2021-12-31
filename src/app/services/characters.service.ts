import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";

import {environment} from '@environment'
import {ResultRequestInterface} from "@models/resultRequest.interface";
import {CharacterInterface} from "@models/character.interface";

@Injectable({
    providedIn: 'root'
})
export class CharactersService {
    baseUrlAPI = environment.baseUrlAPI + '/character'


    constructor(private http: HttpClient) {
    }

    getCharactersFilter(name: string = '', page: number = 1) {
        const url = `${this.baseUrlAPI}/?name=${name}&page=${page}`
        return this.http.get<ResultRequestInterface>(url)
    }

    getCharactersById(id: number): Observable<CharacterInterface> {
        const url = `${this.baseUrlAPI}/${id}`
        return this.http.get<CharacterInterface>(url)
    }
}
