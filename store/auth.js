export const state = () => ({
  token: null
})

export const mutations = {
  setToken(state, token) {
    state.token = token
  }
}

export const actions = {
  async login({commit, dispatch}, formData) {

    await setTimeout(() => {console.log(formData)}, 2000)
    const token = 'mock-token'

    dispatch('setToken', token)
  },
  setToken({commit}, token) {
    commit('setToken', token)
  }
}

export const getters = {
  isAuthenticated: state => Boolean(state.token)
}
