import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CharacterListComponent} from "./pages/character-list/character-list.component";
import {CharacterDetailComponent} from "./pages/character-detail/character-detail.component";


const routes: Routes = [
    {
        path: 'character-list',
        component: CharacterListComponent
    },
    {
        path: 'character-details',
        component: CharacterDetailComponent
    },
    {
        path: '',
        redirectTo: 'character-list',
        pathMatch: 'full'
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
