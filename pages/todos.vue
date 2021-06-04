<template>
  <b-row align-h="center" class="mt-n5">
    <b-col md="12">
      <b-form-input
        v-model="newTodo"
        placeholder="Add To Your Todos"
        class="mt-4 mb-4 newTodo-input mt-md-5 mb-md-5"
        @keyup.enter="addTodo"
      />
      <b-list-group>
        <b-list-group-item
          v-for="todo in $store.state.todos"
          :key="todo.itemId"
          class="mt-2 shadow-sm d-flex justify-content-between"
          :class="{ completed: todo.completed }"
        >
          <b-form-checkbox
            :checked="todo.completed"
            class="mr-4 todo-checkbox"
            size="large"
            @change="updateTodoCompletion($event, todo)"
          >
            <div class="title flex-grow-1">{{ todo.title }}</div>
          </b-form-checkbox>
          <!-- <b-button size="sm" @click="deleteTodo(todo.itemId)"> -->
          <b-icon
            icon="trash"
            variant="danger"
            font-scale="1.3"
            @click="deleteTodo(todo.itemId)"
          />
          <!-- </b-button> -->
        </b-list-group-item>
      </b-list-group>
    </b-col>
  </b-row>
</template>

<script>
export default {
  data: () => ({
    newTodo: ''
  }),

  computed: {
    sortedTodos() {
      const todos = [...this.$store.state.todos]
      const sortedTodos = todos.sort(
        (a, b) => a.createdBy.timestamp - b.createdBy.timestamp
      )
      return sortedTodos
    }
  },

  methods: {
    updateTodoCompletion(newValue, todo) {
      const { title, itemId } = todo

      this.updateTodo({
        itemId,
        item: {
          title,
          completed: newValue
        }
      })
    },

    async addTodo() {
      await this.$userbase.insertItem({
        databaseName: 'todos',
        item: {
          title: this.newTodo.trim(),
          completed: false,
          createdOn: new Date()
        }
      })

      this.newTodo = ''
    },

    async updateTodo(todoItem) {
      await this.$userbase.updateItem({
        databaseName: 'todos',
        ...todoItem
      })
    },

    async deleteTodo(id) {
      await this.$userbase.deleteItem({ databaseName: 'todos', itemId: id })
    }
  }
}
</script>

<style>
.completed .title {
  text-decoration: line-through;
  opacity: 0.5;
}

.todo-checkbox input,
.todo-checkbox .title {
  cursor: pointer;
}

.bi-trash {
  cursor: pointer;
}

.list-group-item {
  border-top-width: 1px !important;
  margin-bottom: 10px;
  border-radius: 7px !important;
  border: none !important;
  color: #2b435d;
  /* color: #2d3f52; */
  margin-bottom: 10px;
  border-radius: 8px !important;
  border: none !important;
  color: #647991;
  color: #909fb1;
  color: #8fa5c0;
  padding-top: 1.15rem;
  padding-bottom: 1.15rem;
  font-weight: 600;
}

.newTodo-input {
  font-size: 1.1rem;
  height: 48px;
  border-width: 2px;
  border-radius: 7px;
  font-weight: 600;
  /* color: #2d3f52; */
  color: #314c67;
}

.custom-controlt {
  font-size: 1.15rem;
}

.custom-control-label {
  padding-left: 0.5rem;
}

.custom-control-label:before,
.custom-control-label:after {
  top: 0.175rem;
  left: -1.5rem;
  width: 20px !important;
  height: 20px;
}
.custom-control-label:after {
  background: 60%/65% 70% no-repeat;
}

::placeholder {
  font-weight: 300;
  font-style: italic;
}
</style>
