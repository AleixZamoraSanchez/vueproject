import { createRouter, createWebHistory } from 'vue-router'
import Pokemon from "@/views/PokemonView.vue";
import Inici from "@/views/IniciView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/pokemon',
      name: 'pokemon',
      component: Pokemon
    },
    {
      path: '/Inici',
      name: 'Inici',
      component: Inici
    },
  ]
})

export default router
