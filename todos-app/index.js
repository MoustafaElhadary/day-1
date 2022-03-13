const todos = [
    {
        task: "meet friends",
        urgent: false,
        important: true,
        done: false
    },
    {
        task: "finish assignment",
        urgent: true,
        important: true,
        done: false
    },
    {
        task: "study math",
        urgent: true,
        important: true,
        done: false
    },
    {
        task: "play football",
        urgent: false,
        important: false,
        done: true
    },
]

const impTodos = todos.filter(todo => todo.important === true)
const urgTodos = todos.filter(todo => todo.urgent === true)
const doneTodos = todos.filter(todo => todo.done === true)
const urgAndImpTodos = todos.filter(todo => todo.important === true && todo.urgent === true)
//const impTodos = todos.filter(todo => todo.important)
//const urgTodos = todos.filter(todo => todo.urgent)
//const doneTodos = todos.filter(todo => todo.done)

console.log(urgAndImpTodos)