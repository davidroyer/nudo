<template>
  <div class="app-wrapper" :class="$route.name">
    <SiteHeader />
    <b-container class="mt-5">
      <Nuxt />
    </b-container>
  </div>
</template>

<style>
html {
  -moz-osx-font-smoothing3: grayscale;
  -webkit-font-smoothing: antialiased;
}

.container {
  max-width: 650px;
}

.app-wrapper {
  min-height: 100vh;
  padding-bottom: 40px;
  background: #f1f5f8;
}

/* :root {
  --font-family-sans-serif: Inter;
}

body {
  font-family: var(--font-family-sans-serif) !important;
} */

.page-enter-active,
.page-leave-active {
  transition: all 0.4s cubic-bezier(0.55, 0, 0.1, 1);
}
.page-enter,
.page-leave-active {
  opacity: 0;
  transform: translate(10px, 0);
}
</style>
