import { Component, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/shared/pokedex.service';
import { Pokemon } from 'src/app/shared/pokemon';

@Component({
  selector: 'app-pokedex-page',
  templateUrl: './pokedex-page.component.html',
  styleUrls: ['./pokedex-page.component.css']
})
export class PokedexPageComponent implements OnInit {
  public pokemons:Pokemon[] = [];
  public pokemonSelected!:Pokemon;
 

  constructor(public servicePokemon:PokedexService){
  }
  
  selectPokemon(index:number){
    this.pokemonSelected = this.pokemons[index]
 
    
    console.log(this.pokemonSelected)
    
  }
  
  ngOnInit(): void {
    this.pokemons = this.servicePokemon.pokemons
  }
}
