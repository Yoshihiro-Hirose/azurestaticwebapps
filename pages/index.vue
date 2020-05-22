<template>
  <v-sheet class="pa-6" elevation="2">
    <v-text-field
      v-model="newTodo"
      label="やることはなんですか?"
      solo
      @keydown.enter="addTodo"
    />
    <v-list>
      <template v-for="(todo, index) in todos">
        <v-list-item :key="index">
          <v-list-item-action>
            <v-checkbox v-model="todo.done" color="primary" />
          </v-list-item-action>
          <v-list-content>
            <v-list-item-title>{{ todo.content }}</v-list-item-title>
          </v-list-content>
          <v-spacer />
          <v-icon v-if="todo.done" color="success">
            mdi-check-bold
          </v-icon>
        </v-list-item>
        <v-divider :key="`divider-${index}`" />
      </template>
    </v-list>
  </v-sheet>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/todos')
    return { todos: data }
  },
  data() {
    return {
      newTodo: ''
    }
  },
  methods: {
    addTodo() {
      this.todos.push({
        content: this.newTodo,
        done: false
      })
      this.newTodo = ''
    }
  }
}
</script>
