<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
      <input v-model="pokemonName" type="text" class="input mb-4" placeholder="Ingrese el nombre del Pokémon">
      <button @click="searchPokemon" class="btn-primary w-full">Buscar</button>

      <div v-if="pokemon" class="mt-6">
        <div class="flex items-center mb-4">
          <div>
            <div class="container">
              <div class="image-container">
                <img :src="pokemon.imageUrl" :alt="pokemon.name" class="w-64 h-64 ml-4 object-cover">
              </div>
              <div class="text-container">
                <p class="mb-2"><strong>Altura:</strong> {{ pokemon.height }}</p>
                <p class="mb-2"><strong>Peso:</strong> {{ pokemon.weight }}</p>
                <p><strong>Tipo(s):</strong> {{ pokemon.types.join(', ') }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="border-t pt-4">
          <h2 class="text-xl font-semibold mb-2"><strong>Habilidades:</strong></h2>
          <table class="w-full" style="border-collapse: collapse;">
            <thead style="border: 1px solid black;">
            <tr>
              <th class="px-4 py-2" style="border: 1px solid black;">Nombre</th>
              <th class="px-4 py-2" style="border: 1px solid black;">Descripción</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="ability in pokemon.abilities" :key="ability.name">
              <td class="px-4 py-2" style="border: 1px solid black;">{{ ability.name }}</td>
              <td class="px-4 py-2" style="border: 1px solid black;">{{ ability.description }}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      pokemonName: '',
      pokemon: null
    };
  },
  methods: {
    async searchPokemon() {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.pokemonName.toLowerCase()}`);
        const abilities = response.data.abilities.map(async ability => {
          const abilityResponse = await axios.get(ability.ability.url);
          return {
            name: ability.ability.name,
            description: abilityResponse.data.effect_entries.find(entry => entry.language.name === 'en').effect
          };
        });
        this.pokemon = {
          name: response.data.name,
          height: response.data.height,
          weight: response.data.weight,
          types: response.data.types.map(type => type.type.name),
          abilities: await Promise.all(abilities),
          imageUrl: response.data.sprites.front_default
        };
      } catch (error) {
        console.error('Error fetching Pokémon:', error);
      }
    }
  }
};
</script>

<style>
.input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #cbd5e0;
  border-radius: 0.375rem;
}

.btn-primary {
  display: block;
  width: 100%;
  padding: 0.75rem 1rem;
  color: rgb(255, 255, 255);
  background-color: #ff2c00;
  border: 5px solid transparent;
  border-color: black;
  border-radius: 0.375rem;
  transition: background-color 0.15s ease-in-out;
}

.btn-primary:hover {
  background-color: #ff2c00;
}
.container {
  display: flex;
  align-items: center; /* Para alinear verticalmente */
}

.image-container {
  margin-right: 20px; /* Espacio entre la imagen y el texto */
}

.text-container {
  flex: 1; /* El texto ocupará todo el espacio restante */
}


</style>
