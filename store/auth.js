export const state = () => ({
  isAuthenticated: false
})

export const getters = {
  isAuthenticated: state => state.isAuthenticated
}
