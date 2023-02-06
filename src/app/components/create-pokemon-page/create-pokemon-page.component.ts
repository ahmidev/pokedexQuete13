import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PokedexService } from 'src/app/shared/pokedex.service';
import { Pokemon } from 'src/app/shared/pokemon';

@Component({
  selector: 'app-create-pokemon-page',
  templateUrl: './create-pokemon-page.component.html',
  styleUrls: ['./create-pokemon-page.component.css']
})
export class CreatePokemonPageComponent {

  public form: FormGroup = new FormGroup({
    name:new FormControl('', Validators.required),
    url:new FormControl('', Validators.required),
    description:new FormControl('',Validators.required)
  })
  constructor(public pokedexService :PokedexService){}

  
  onSubmit(){
    const pokemon = new Pokemon(this.form.value.name,this.form.value.url,this.form.value.description)
    this.pokedexService.pokemons.push(pokemon)
    this.form.value.name =''
    this.form.value.url =''
    this.form.value.description =''
  }
}
