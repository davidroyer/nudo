<template>
  <div class="app-wrapper" :class="$route.name">
    <SiteHeader />
    <b-container class="mt-5">
      <Nuxt />
    </b-container>
  </div>
</template>

<script>
export default {}
</script>

<style>
html {
  -moz-osx-font-smoothing3: grayscale;
  -webkit-font-smoothing: antialiased;
}
.page-enter-active,
.page-leave-active {
  transition: all 0.4s cubic-bezier(0.55, 0, 0.1, 1);
}
.page-enter,
.page-leave-active {
  opacity: 0;
  transform: translate(10px, 0);
}

.container {
  max-width: 650px;
}

.app-wrapper {
  min-height: 100vh;
  background: #eceff1;
  background: #f1f5f8;
  /* background: #f6fafd; */

  /* background: #dde5ea; */
  /* background: #e4e9ee; */
}
</style>
