<template>
  <div>
    <h1>Pokémon</h1>
    <ul>
      <li v-for="pokemon in pokemons" :key="pokemon.id">
        {{ pokemon.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      pokemons: []
    };
  },
  created() {
    this.fetchPokemons();
  },
  methods: {
    async fetchPokemons() {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
        this.pokemons = response.data.results;
      } catch (error) {
        console.error('Error fetching Pokémon:', error);
      }
    }
  }
};
</script>
