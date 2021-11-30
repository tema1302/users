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
      return this.$route.params.idUser
    }
  }
}
</script>
