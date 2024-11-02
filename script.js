const taskInput = document.getElementById('task-input');
const taskDatetime = document.getElementById('task-datetime');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Function to add a new task
addTaskBtn.addEventListener('click', () => {
  const taskName = taskInput.value.trim();
  const taskDate = taskDatetime.value;

  if (taskName === '') {
    alert('Please enter a task');
    return;
  }

  addTask(taskName, taskDate);
  taskInput.value = '';
  taskDatetime.value = '';
});

// Function to create and add a task item to the list
function addTask(name, date) {
  const listItem = document.createElement('li');
  listItem.classList.add('task-item');

  const taskNameSpan = document.createElement('span');
  taskNameSpan.classList.add('task-name');
  taskNameSpan.innerText = name;

  const taskDateSpan = document.createElement('span');
  taskDateSpan.classList.add('task-date');
  taskDateSpan.innerText = date ? `Due: ${date}` : '';

  const actionsDiv = document.createElement('div');
  actionsDiv.classList.add('task-actions');

  // Complete button
  const completeBtn = document.createElement('button');
  completeBtn.classList.add('complete-btn');
  completeBtn.innerText = 'Complete';
  completeBtn.addEventListener('click', () => {
    listItem.classList.toggle('completed');
  });

  // Edit button
  const editBtn = document.createElement('button');
  editBtn.classList.add('edit-btn');
  editBtn.innerText = 'Edit';
  editBtn.addEventListener('click', () => {
    const newTaskName = prompt('Edit task name', taskNameSpan.innerText);
    const newTaskDate = prompt('Edit date and time', taskDateSpan.innerText.replace('Due: ', ''));

    if (newTaskName !== null) taskNameSpan.innerText = newTaskName;
    if (newTaskDate !== null) taskDateSpan.innerText = newTaskDate ? `Due: ${newTaskDate}` : '';
  });

  // Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete-btn');
  deleteBtn.innerText = 'Delete';
  deleteBtn.addEventListener('click', () => {
    listItem.remove();
  });

  actionsDiv.appendChild(completeBtn);
  actionsDiv.appendChild(editBtn);
  actionsDiv.appendChild(deleteBtn);

  listItem.appendChild(taskNameSpan);
  listItem.appendChild(taskDateSpan);
  listItem.appendChild(actionsDiv);

  taskList.appendChild(listItem);
}
