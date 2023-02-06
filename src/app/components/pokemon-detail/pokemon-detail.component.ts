import { Component, Input,  OnInit } from '@angular/core';
import { Pokemon } from 'src/app/shared/pokemon';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit{
 
  @Input() pokemonRecu!:Pokemon|undefined

  constructor(){
 
    console.log(this.pokemonRecu);
  }
  
  ngOnInit(): void {
    
    
    
    
  }

}
