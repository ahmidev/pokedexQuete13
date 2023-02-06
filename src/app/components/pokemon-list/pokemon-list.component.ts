import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from 'src/app/shared/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  @Input() pokemons:Pokemon[]=[];
  @Output() indexPokemon :EventEmitter<number>=new EventEmitter()
  
  constructor(){}

  selectPokemon(index: number){
    this.indexPokemon.emit(index)
    console.log(index)
  }
  ngOnInit(): void {
    
  }

}
