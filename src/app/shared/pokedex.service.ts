import { Injectable, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { HttpClient } from '@angular/common/http';
import { POKEMONS } from './pokemons-mock';

@Injectable({
  providedIn: 'root'
})
export class PokedexService implements OnInit {
  
  public pokemons: Pokemon[]= POKEMONS

  constructor(public http: HttpClient) { 
  
    
  }

  ngOnInit(): void {
   
  }


}
