import { dataTransformer } from '@/utils'

export const state = () => ({
  user: null,
  todos: []
})

export const mutations = {
  setUser(state, payload) {
    state.user = payload
  },

  updateTodos(state, todos) {
    state.todos = todos
  }
}

export const actions = {
  async getTodos({ commit }) {
    await this.$userbase.openDatabase({
      databaseName: 'todos',
      changeHandler(items) {
        const todos = dataTransformer(items)
        commit('updateTodos', todos)
      }
    })
  },

  async signOut({ commit }) {
    await this.$userbase.signOut()
    commit('setUser', null)
    this.$router.push('/login')
  }
}
