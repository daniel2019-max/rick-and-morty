import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from '@angular/platform-browser';

import {InfiniteScrollModule} from "ngx-infinite-scroll";

import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {CardComponent} from './components/card/card.component';
import {CharacterListComponent} from './pages/character-list/character-list.component';
import {AppRoutingModule} from "./app-routing.module";
import { CharacterDetailComponent } from './pages/character-detail/character-detail.component';
import {SharedModule} from "@shared/shared.module";
import { TableComponent } from './components/table/table.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        CardComponent,
        CharacterListComponent,
        CharacterDetailComponent,
        TableComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        SharedModule,
        InfiniteScrollModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
