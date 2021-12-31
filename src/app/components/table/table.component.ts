import {Component, Input, OnInit} from '@angular/core';
import {EpisodeInterface} from "@models/episode.interface";
import {EpisodeService} from "@services/episode.service";

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
    episodes: EpisodeInterface[] = []

    _episodesUrl: string[];

    get episodesUrl(): string[] {
        return this._episodesUrl;
    }

    @Input() set episodesUrl(value: string[]) {
        this._episodesUrl = value;
        this.getEpisodes()
    }

    constructor(private episodeService: EpisodeService) {
    }

    ngOnInit(): void {
    }

    getEpisodes() {
        this.episodesUrl.forEach((url) => {
            this.episodeService.getEpisode(url).subscribe(
                {
                    next: (episodeData) => {
                        this.episodes.push(episodeData)
                    },
                    error: (err) => {
                        console.log(err)
                    }
                }
            )
        })
    }

}
