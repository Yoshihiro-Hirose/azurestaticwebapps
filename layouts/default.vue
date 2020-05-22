<template>
  <v-app dark>
    <v-app-bar fixed app color="primary" dark>
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <v-content class="grey lighten-5">
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      title: 'Azure Static Web Apps デモ'
    }
  }
}
</script>
