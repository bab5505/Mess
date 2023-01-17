document.addEventListener("DOMContentLoaded", function() {
    const todoForm = document.getElementById("newTodoForm");
    const todoList = document.getElementById("todoList");
  
    todoForm.addEventListener("submit", function(e) {
      e.preventDefault();
  
      let removeButton = document.createElement("button");
      removeButton.innerText = "Delete!";
  
      let newTodo = document.createElement("li");
      newTodo.innerText = document.getElementById("task").value;
  
      todoList.appendChild(newTodo);
      newTodo.appendChild(removeButton);
  
      todoForm.reset();
    });
  
    todoList.addEventListener("click", function(e) {
      const targetTagToLowerCase = e.target.tagName.toLowerCase();
      if (targetTagToLowerCase === "li") {
        e.target.style.textDecoration = "line-through";
      } else if (targetTagToLowerCase === "button") {
        e.target.parentNode.remove();
      }e
  });
});