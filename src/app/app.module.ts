import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {CardComponent} from './components/card/card.component';
import {CharacterListComponent} from './pages/character-list/character-list.component';
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "./shared/shared.module";
import {InfiniteScrollModule} from "ngx-infinite-scroll";

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        CardComponent,
        CharacterListComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        SharedModule,
        InfiniteScrollModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
