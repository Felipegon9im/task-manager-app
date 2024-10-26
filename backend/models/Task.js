// backend/models/Task.js
const mongoose = require('mongoose');

// Definição do esquema de tarefas
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium',
  },
  completed: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true, // Adiciona campos createdAt e updatedAt
});

// Exportando o modelo
module.exports = mongoose.model('Task', taskSchema);
