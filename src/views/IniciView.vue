<template>
  <div class="bg-gray-100">

    <!-- Encabezado -->
    <header>
      <div class="theme_container">
        <div class="dropdown mb-72">
          <div tabindex="0" role="button" class="btn m-1">
            Theme
            <svg width="12px" height="12px" class="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
          </div>
          <ul tabindex="0" class="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52">
            <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Default" value="default"/></li>
            <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Retro" value="retro"/></li>
            <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Cyberpunk" value="cyberpunk"/></li>
            <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Valentine" value="valentine"/></li>
            <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Cupcake" value="cupcake"/></li>
          </ul>
        </div>
      </div>
    </header>
    <body>
      <section>

      <!-- Hero Section -->
        <div class="hero min-h-screen bg-base-200">
          <div class="hero-content text-center">
            <div class="max-w-md">
              <p class="p-format">Benvingut a la pagina on podras buscar informació sobre els Pokemons</p>
            </div>
          </div>
        </div>
        <div class="hero min-h-screen bg-base-200">
          <div class="hero-content text-center">
            <div class="max-w-md">
              <p class="p-format">REGIONS</p>
              <ul class="timeline timeline-vertical">
                <li>
                  <div class="timeline-start timeline-box">Kanto</div>
                  <hr/>
                </li>
                <li>
                  <hr/>
                  <div class="timeline-end timeline-box">Johto</div>
                  <hr/>
                </li>
                <li>
                  <hr/>
                  <div class="timeline-start timeline-box">Hoenn</div>
                  <hr/>
                </li>
                <li>
                  <hr/>
                  <div class="timeline-end timeline-box">Sinnoh</div>
                  <hr/>
                </li>
                <li>
                  <hr/>
                  <div class="timeline-start timeline-box">Teselia</div>
                  <hr/>
                </li>
                <li>
                  <hr/>
                  <div class="timeline-end timeline-box">Kalos</div>
                  <hr/>
                </li>
                <li>
                  <hr/>
                  <div class="timeline-start timeline-box">Alola</div>
                  <hr/>
                </li>
                <li>
                  <hr/>
                  <div class="timeline-end timeline-box">Galar</div>
                  <hr/>
                </li>
                <li>
                  <hr/>
                  <div class="timeline-start timeline-box">Paldea</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="hero min-h-screen bg-base-200">
          <div class="hero-content text-center">
            <div class="max-w-md">
              <div class="chat chat-start">
                <div class="chat-header">
                  Kenobi
                </div>
                <div class="chat-bubble">Com faig per a buscar informacio sobre els pokemons?</div>
                <div class="chat-footer opacity-50">
                </div>
              </div>
              <div class="chat chat-end">
                <div class="chat-header">
                  Windu
                </div>
                <div class="chat-bubble">Has d'anar a la pagina pokemon, introduir el nom del pokemon que vols buscar i pulsar el boto</div>
              </div>
            </div>
          </div>
        </div>
        <div class="hero min-h-screen bg-base-200">
          <div class="hero-content text-center">
            <div class="rating">
              <input type="radio" name="rating-2" class="mask mask-star-2" checked/>
              <input type="radio" name="rating-2" class="mask mask-star-2"/>
              <input type="radio" name="rating-2" class="mask mask-star-2"/>
              <input type="radio" name="rating-2" class="mask mask-star-2"/>
              <input type="radio" name="rating-2" class="mask mask-star-2"/>
            </div>
          </div>
        </div>
      </section>
    </body>
    <!-- Pie de página -->
    <footer>
      <div class="container mx-auto text-center">
        <p>&copy; 2024 Mi Sitio Web. Tots els drets reservats.</p>
      </div>
    </footer>

  </div>
</template>

<script>

export default {
  name: 'IniciView',
  mounted() {
    const themeDropdown = document.querySelector('.dropdown-content');

    themeDropdown.addEventListener('change', function(event) {
      const selectedTheme = event.target.value;
      document.body.className = ''; // Elimina todas las clases del body
      document.body.classList.add('theme-' + selectedTheme); // Agrega la clase del tema seleccionado al body
    });
  }
}

</script>

<style>
.theme_container {
  text-align: right;
  margin-bottom: 200px;
}

.p-format {
  text-align: center;
  font-size: x-large;
  font-weight: bold;
}
</style>