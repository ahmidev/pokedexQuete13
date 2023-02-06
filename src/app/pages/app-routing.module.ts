import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePokemonPageComponent } from '../components/create-pokemon-page/create-pokemon-page.component';
import { PokedexPageComponent } from '../components/pokedex-page/pokedex-page.component';

const routes: Routes = [
  {path:"", component:PokedexPageComponent},
  {path:"create", component:CreatePokemonPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
