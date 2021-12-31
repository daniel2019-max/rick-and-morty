import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EpisodeInterface} from "@models/episode.interface";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class EpisodeService {

    constructor(private http: HttpClient) {
    }

    getEpisode(url: string): Observable<EpisodeInterface> {
        return this.http.get<EpisodeInterface>(url)
    }
}
