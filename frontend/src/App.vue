<template>
  <div id="app">
    <TaskManager />
  </div>
</template>

<script>
import TaskManager from './components/TaskManager.vue';

export default {
  components: {
    TaskManager,
  },
};
</script>

<style>
/* Estilos globais */
#app {
  text-align: center;
}
</style>
