<template>
  <div>
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
    <b-button variant="primary" @click="handleAction">
      {{ actionText }}
      <b-spinner v-if="showSpinner" small></b-spinner>
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
/* eslint-disable no-console */
export default {
  props: {
    actionType: {
      required: true,
      type: String
    },
    actionText: {
      type: String,
      required: true
    }
  },
  data: () => ({
    showSpinner: false,
    formErrorMessage: '',
    showFormErrorMessage: false,
    user: {
      username: '',
      password: ''
    }
  }),

  methods: {
    async handleAction() {
      this.showSpinner = true

      const payload = {
        ...this.user,
        rememberMe: 'local',
        sessionLength: 8760
      }

      const user = await this.$userbase[this.actionType](payload).catch(
        (error) => {
          this.formErrorMessage = error
          this.showFormErrorMessage = true
        }
      )

      this.showSpinner = false

      if (user) {
        this.$store.commit('setUser', user)
        await this.$store.dispatch('getTodos')
        this.$router.push('/todos')
      }
    }
  }
}
</script>
