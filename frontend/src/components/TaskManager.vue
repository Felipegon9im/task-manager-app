<template>
    <div>
      <h1>Gerenciador de Tarefas</h1>
      <form @submit.prevent="addTask">
        <input v-model="newTask.title" placeholder="Título" required />
        <input v-model="newTask.description" placeholder="Descrição" />
        <input v-model="newTask.dueDate" type="date" required />
        <select v-model="newTask.priority">
          <option value="low">Baixa</option>
          <option value="medium">Média</option>
          <option value="high">Alta</option>
        </select>
        <button type="submit">Adicionar Tarefa</button>
      </form>
      <ul>
        <li v-for="task in tasks" :key="task._id">
          <h3>{{ task.title }} ({{ task.priority }})</h3>
          <p>{{ task.description }}</p>
          <p>Prazo: {{ task.dueDate }}</p>
          <button @click="deleteTask(task._id)">Excluir</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        newTask: {
          title: '',
          description: '',
          dueDate: '',
          priority: 'medium',
        },
        tasks: [],
      };
    },
    methods: {
      async fetchTasks() {
        try {
          const response = await axios.get('http://localhost:5000/api/tasks');
          this.tasks = response.data;
        } catch (error) {
          console.error('Erro ao buscar tarefas:', error);
        }
      },
      async addTask() {
        try {
          await axios.post('http://localhost:5000/api/tasks', this.newTask);
          this.newTask = { title: '', description: '', dueDate: '', priority: 'medium' }; // Resetar o formulário
          await this.fetchTasks();
        } catch (error) {
          console.error('Erro ao adicionar tarefa:', error);
        }
      },
      async deleteTask(id) {
        try {
          await axios.delete(`http://localhost:5000/api/tasks/${id}`);
          await this.fetchTasks();
        } catch (error) {
          console.error('Erro ao excluir tarefa:', error);
        }
      },
    },
    mounted() {
      this.fetchTasks();
    },
  };
  </script>
  
  <style>
  /* Estilos básicos */
  h1 {
    font-size: 2em;
  }
  form {
    margin-bottom: 20px;
  }
  </style>
  