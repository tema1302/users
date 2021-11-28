<template>
  <v-container>
    <h1>Пользователь {{ idUser }}</h1>
  </v-container>
</template>
<script>
// динамическая маршрутизация
export default {
  validate ({ params }) {
    return /^\d+$/.test(params.idUser)
  },
  computed: {
    idUser () {
      const a = this.$route.params.idUser
      console.log(a)
      return a
      // return this.$route.params.idUser
    }
  }
}
</script>
