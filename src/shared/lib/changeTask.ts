import { IChangeTask, IProject, ITAsk } from "app/redux/models/IUser";

export function changeTask(projects: IProject[], data: ITAsk) {
    // const projects = JSON.parse(localStorage.getItem('projects'))
    // console.log(data)
    // for(let i = 0; i < projects.length; i++) {
    //     let currentProject = projects[i]
    //     for(let j = 0; j < currentProject.tasks.length; j++) {
    //         let currentTask = currentProject.tasks[i]
    //         if(currentTask.task_id == data.task.task_id) {
    //             currentTask = data.task
    //             // console.log(currentTask)
    //         }
    //     }
    // }
    // localStorage.setItem('projects', JSON.stringify(projects))
    // console.log(projects)
    // return projects


    return projects.map(project => {
        // if(project.project_id == data.project_id) {
        //     project.tasks.map(task => task.task_id == data.task.task_id ? data.task : task)
        // }
        if(project.tasks.find(task => task.task_id == data.task_id)) {
            return {
                ...project,
                tasks: project.tasks.map(task => task.task_id == data.task_id ? data : task) 
            }
        }
        return project
    })

}