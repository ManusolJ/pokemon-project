import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { PokemonCache } from '@interfaces/pokemon-cache';
import Pokemon from '@interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root',
})
export default class PokemonService {
  private http = inject(HttpClient);
  private pokemonCache = new Map<string, PokemonCache>();
  pokemonTeam = signal<(Pokemon | undefined)[]>(Array(6).fill(undefined));
}
