const Task = require('./task');

const task=new Task()
task.on('add',(task1,task2)=>{
    console.log(`Task added : ${task1}`)
    console.log(`Task added : ${task2}`)
})
task.on('status',(task1,task2)=>{
    console.log(`Task Status of ${task1} : Completed`)
    if (task2){
        console.log(`Task Status of ${task2} : Pending.....`)   
    }
})
task.on('completed',(task1,task2)=>{
    console.log(`Task completed : ${task1}`)
    console.log(`Task completed : ${task2}`)
})
task.addTask('Task 1','Task 2')
task.status('Task 1','Task 2')
task.completed('Task 1' ,'Task 2')



