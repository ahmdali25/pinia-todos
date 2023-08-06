<template>
  <main>
   <header>
    <img src="./assets/todos.svg" alt="Todos Logo">
    <h1>Todos App</h1>
   </header>

   <div class="new-task-form">
    <p>What's on your to do list?</p>
    <TaskForm />
   </div>

   <nav class="filter-nav">
    <button :class="filter === 'all'? 'active' : ''" @click="filter = 'all'">All Task</button>
    <button :class="filter === 'favs'? 'active' : ''" @click="filter = 'favs'">Fav Task</button>
   </nav>

   <div class="task-list" v-if="filter === 'all'">
    <p>You have {{ taskStore.totalCount }} left todo</p>
    <ul v-for="task in taskStore.tasks" :key="task.id">
      <TaskDetail :task="task"/>
    </ul>
   </div>

   <div class="task-list" v-if="filter === 'favs'">
    <p>You have {{ taskStore.favCount }} left todo</p>
    <ul v-for="task in taskStore.favTask" :key="task.id">
      <TaskDetail :task="task"/>
    </ul>
   </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue'
import { useTaskStore  } from '@/stores/TaskStore';
import TaskDetail from './components/TaskDetail.vue';
import TaskForm from './components/TaskForm.vue';

const taskStore = useTaskStore();
const filter: Ref<string> = ref('all');
</script>
