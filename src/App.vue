<template>
  <header>
    <div class="logo-wrapper">
      <img alt="logo" class="logo" src="@/assets/logo.png" width="500" height="500" />
    </div>

    <nav class="nav-wrapper">
      <RouterLink to="/Inici" class="nav-link">Inici</RouterLink>
      <RouterLink to="/pokemon" class="nav-link">Pokemon</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo-wrapper {
  text-align: center;
  margin-bottom: 2rem;
}

.logo {
  display: inline-block;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
}

.nav-link {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  color: var(--color-text);
  text-decoration: none;
  font-size: 75px;
}

.nav-link:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  .nav-wrapper {
    margin-top: 2rem;
  }
}
</style>
<script setup>
</script>