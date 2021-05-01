<template>
  <div>
    <h1 class="mb-4 h2">Create a new account</h1>
    <b-button variant="primary" @click="signUp">
      Sign Up
      <b-spinner v-if="handlingSignUp" small></b-spinner>
    </b-button>
  </div>
</template>

<script>
export default {
  data: () => ({
    handlingSignUp: false
  }),

  methods: {
    signUp() {
      this.handlingSignUp = false

      this.$store.dispatch('signUp', {
        username: 'admin1',
        password: '@pw4admin1',
        email: 'droyer01@gmail.com',
        rememberMe: 'local',
        sessionLength: 8760
      })

      this.handlingSignUp = false
      this.$router.push({ name: 'app' })
    }
  }
}
</script>

<style></style>
