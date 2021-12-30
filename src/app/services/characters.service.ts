import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from '@environment'
import {ResultRequestInterface} from "../models/resultRequest.interface";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CharactersService {
    baseUrlAPI = environment.baseUrlAPI + '/character'


    constructor(private http: HttpClient) {
    }

    getAllCharacters(): Observable<ResultRequestInterface> {
        return this.http.get<ResultRequestInterface>(`${this.baseUrlAPI}`)
    }

    getCharactersFilter(name: string) {
        return this.http.get<ResultRequestInterface>(`${this.baseUrlAPI}`, {
            params: {
                'name': name
            }
        })
    }
}
