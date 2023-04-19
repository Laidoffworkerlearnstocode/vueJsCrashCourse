<template>
  <div class="app">
    <nav>
      <RouterLink to="/">Home</RouterLink> | 
      <RouterLink to="/about">About</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<style>
.app{
  font-size: 1.2rem;
  text-align:center
}

</style>