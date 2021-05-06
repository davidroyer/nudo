/**
 * Trigger code to run on app initialization like `nuxtServerInit`
 */

export default async ({ $userbase, $config, store }) => {
  /**
   * Initialize userbase app
   */
  const session = await $userbase.init({
    appId: $config.userbaseAppId,
    sessionLength: 8760
  })

  /**
   * Check for active user. If active user, update state and get our data
   */
  if (session.user) {
    store.commit('setUser', session.user)
    await store.dispatch('getTodos')
  }
}
