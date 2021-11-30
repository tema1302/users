export default function ({ store, redirect }) {
  const auth = store.getters['auth/isAuthenticated']

  console.log(auth)
  console.log(redirect)

  if (!auth) {
    return redirect('/login')
  }
}
