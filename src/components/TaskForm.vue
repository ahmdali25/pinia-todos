<template>
  <form @submit.prevent="handleSubmit">
    <input
      type="text"
      placeholder="e.g read a book"
      v-model="newTask"
      required
    >
    <button type="submit">Add</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue'
import { useTaskStore } from '@/stores/TaskStore';

const taskStore = useTaskStore();
const newTask: Ref<string> = ref('');
  
const handleSubmit = () => {
  if (newTask.value.length > 0) {
    taskStore.addTask({
      id: Math.floor(Math.random() * 100),
      title: newTask.value,
      isDone: false,
      isFav: false,
    })
    newTask.value = ""
  }
}
</script>