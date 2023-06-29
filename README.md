
This project is a Todo List application
developed with React and the useState() hook.
It enables users to add, delete, and
clear todos, utilizing React's state
management for dynamic updates and rendering.
However, the code contains mistakes that
need to befixed in order for it to
function correctly.

Mistake 1: Incorrect naming of the component
-  Make sure the component name is in PascalCase.
Update todoList to TodoList.

Mistake 2: Using prompt for user input
-  Using prompt for user input is not the
recommended approach in React. Instead,
consider using a form input field or
a modal component to collect user input.

Mistake 3: Incorrect usage of setTodos
-  To fix this, update the addTodo function 
to correctly update the todos state.

Mistake 4: Attempting to directly
assign a new value to 'todos'
-  To fix this, update the clearTodos
function to use the setTodos function 
to clear the todos.

Mistake 5: Missing parentheses in
return statement
-  Make sure to include the parentheses in
return statement within the TodoList function.

Mistake 6: Immediate invocation of deleteTodo
-  To fix this, wrap the deleteTodo function
call in an arrow function to avoid
immediate invocation.

Mistake 7: Immediate invocation of addTodo
-  To fix this, remove the parentheses to
pass a function reference instead of
immediately invoking addTodo.

Mistake 8: Missing 'key' prop in the
mapped list items
-  To fix this, provide a unique 'key' prop
to each list item by using a unique
identifier, such as the index.

