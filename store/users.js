export const state = () => ({
  aaa: [
    {
      name: 'User 1'
    },
    {
      name: 'User 2'
    },
    {
      name: 'User 3'
    }
  ]
})
export const getters = {
  getUsers: state => state.aaa
}
