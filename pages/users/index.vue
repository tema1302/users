<template>
  <v-container>
    <h1>Юзеры</h1>
    <v-list>
      <v-list-item v-for="(user, index) in users" :key="index">
        <nuxt-link :to="`/users/${index+1}`">Пользователь {{ index+1 }}</nuxt-link>
      </v-list-item>
    </v-list>
    <nuxt-link class="d-block" to="/users/create">Создать пользователя</nuxt-link>
    <nuxt-link class="d-block" to="/">На главную</nuxt-link>
  </v-container>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      users: 'users/getUsers'
    })
  }
}
</script>
