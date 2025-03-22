import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Para realizar la solicitud HTTP
import { CommonModule } from '@angular/common';  // Se requiere para usar ngIf y ngModel
import { MatInputModule } from '@angular/material/input'; // Para usar input de Material
import { MatButtonModule } from '@angular/material/button'; // Para usar botón de Material
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-poke-searcher',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatButtonModule, FormsModule],  // Incluye los módulos necesarios
  templateUrl: './poke-searcher.component.html',
  styleUrls: ['./poke-searcher.component.scss']
})
export class PokeSearcherComponent {
  pokemonName: string = '';  // Almacena el nombre del Pokémon ingresado
  pokemon: any;  // Para almacenar los datos del Pokémon
  error: string = '';  // Para manejar los errores

  constructor(private http: HttpClient) { }

  searchPokemon() {
    if (!this.pokemonName) {
      this.error = 'Please enter a Pokémon name';
      return;
    }

    // Realiza la solicitud HTTP a la API de Pokémon
    this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${this.pokemonName.toLowerCase()}`)
      .subscribe(
        (response) => {
          this.pokemon = {
            name: response.name,
            image: response.sprites.front_default,  // Imagen del Pokémon
          };
          this.error = '';  // Limpiar errores
        },
        (error) => {
          this.error = 'Pokémon not found or error occurred';  // Si hay un error en la API
        }
      );
  }
}
