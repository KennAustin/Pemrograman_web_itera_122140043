// Class 
class Task {
  constructor(id, content, completed = false) {
    this.id = id;
    this.content = content;
    this.completed = completed;
  }
}

// Deklarasi variabel
const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const tasksContainer = document.getElementById('tasks-container');

let tasks = [];

// Arrow Functions
const renderTasks = () => {
  tasksContainer.innerHTML = '';
  tasks.forEach(task => {
    const taskEl = document.createElement('div');
    taskEl.className = 'task';

    const checked = task.completed ? 'checked' : '';
    const textClass = task.completed ? 'completed' : '';

    taskEl.innerHTML = `
      <input type="checkbox" onchange="toggleComplete('${task.id}')" ${checked}>
      <span class="${textClass}">${task.content}</span>
      <button onclick="editTask('${task.id}')">Edit</button>
      <button onclick="deleteTask('${task.id}')">Hapus</button>
    `;
    tasksContainer.appendChild(taskEl);
  });
};

const saveTasksToLocal = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const loadTasksFromLocal = async () => {
  const stored = localStorage.getItem('tasks');
  if (stored) {
    tasks = JSON.parse(stored);
    renderTasks();
  }
};

// Tambah Tugas
form.addEventListener('submit', e => {
  e.preventDefault();
  const content = input.value.trim();
  if (content) {
    const newTask = new Task(Date.now().toString(), content, false);
    tasks.push(newTask);
    saveTasksToLocal();
    renderTasks();
    input.value = '';
  }
});

// Edit Task
window.editTask = async function(id) {
  const task = tasks.find(t => t.id === id);
  const newContent = prompt('Edit tugas:', task.content);
  if (newContent !== null) {
    task.content = newContent;
    saveTasksToLocal();
    renderTasks();
  }
};

// Hapus Task
window.deleteTask = id => {
  tasks = tasks.filter(t => t.id !== id);
  saveTasksToLocal();
  renderTasks();
};

// Toggle Complete
window.toggleComplete = id => {
  const task = tasks.find(t => t.id === id);
  task.completed = !task.completed;
  saveTasksToLocal();
  renderTasks();
};

// Inisialisasi 
(async () => {
  await loadTasksFromLocal();
})();