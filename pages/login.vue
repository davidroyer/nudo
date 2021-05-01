<template>
  <div>
    <h1 class="mb-4 h2">Login to your account</h1>
    <b-form-group id="input-group-1" label="Your Username" label-for="username">
      <b-form-input id="username" v-model="user.username" required />
    </b-form-group>
    <b-form-group id="input-group-2" label="Your Password" label-for="password">
      <b-form-input
        id="password"
        v-model="user.password"
        type="password"
        required
      />
    </b-form-group>
    <b-button variant="primary" @click="handleSignIn">
      Login
      <b-spinner v-if="handlingSignIn" small></b-spinner>
    </b-button>
    <b-alert
      v-model="showFormErrorMessage"
      class="mt-5"
      variant="danger"
      dismissible
    >
      {{ formErrorMessage }}
    </b-alert>
  </div>
</template>

<script>
export default {
  data: () => ({
    handlingSignIn: false,
    formErrorMessage: '',
    showFormErrorMessage: false,
    user: {
      username: '',
      password: ''
    }
  }),

  methods: {
    async handleSignIn() {
      this.handlingSignIn = true

      const payload = {
        ...this.user,
        rememberMe: 'local',
        sessionLength: 8760
      }

      try {
        const user = await this.$userbase.signIn(payload)
        this.$store.commit('setUser', user)
        await this.$store.dispatch('getTodos')
        this.handlingSignIn = false
        this.$router.push('/todos')
      } catch (error) {
        this.handlingSignIn = false
        this.formErrorMessage = error
        this.showFormErrorMessage = true

        // eslint-disable-next-line no-console
        console.log('🚀 ~ file: index.js ~ line 35 ~ signIn ~ error', error)
      }

      // await this.$store.dispatch('signIn', {
      //   ...this.user,
      //   rememberMe: 'local',
      //   sessionLength: 8760
      // })

      // await this.$store.dispatch('signIn', {
      //   username: 'admin1',
      //   password: '@pw4admin1',
      //   rememberMe: 'local',
      //   sessionLength: 8760
      // })
    }
  }
}
</script>
