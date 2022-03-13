
const todo = {
    task: "meet friends",
    urgent: false,
    important: false,
    done: true
}

console.log(todo['task']) // meet friends
console.log(todo.task) // meet friends

todo.task = "finish assignment"
todo["urgent"] = true

console.log(todo.task) // finish assignment
console.log(todo['urgent']) //true

console.log(todo) // {task: "finish assignment", urgent: true, important: false, done: true}