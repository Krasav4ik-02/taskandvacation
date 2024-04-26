import { useAppDispatch, useAppSelector } from 'app/redux/hooks/redux'
import cls from './TaskPage.module.scss'
import { Navbar } from 'widgets/Navbar'
import { useEffect, useState } from 'react'
import { Button } from 'shared/ui/Button/Button'
import { changeUserTask, sendUserTask } from 'app/redux/store/reducers/ActionCreator'
import { changeTask } from 'shared/lib/changeTask'
import { useNavigate } from 'react-router-dom'
import { Modal } from 'widgets/Modal'
import { Theme, useTheme } from 'app/providers/ThemeProvider'

const TaskPage = () => {
    const dispatch = useAppDispatch()
    const {selectedTask, user, selectedProject, projects} = useAppSelector(state => state.userReducer)
    const navigate = useNavigate()
    const {theme} = useTheme()
    
    const selectedTaskFromStorage = JSON.parse(localStorage.getItem('selectedTask'))
    const selectedProjectFromStorage = JSON.parse(localStorage.getItem('selectedProject'))
    const [task, setTask] = useState(selectedTask || selectedTaskFromStorage)
    const [project, setProject] = useState(selectedProject || selectedProjectFromStorage)

    const [isModalOpen, setIsModalOpen] = useState(false)

    const [taskName, setTaskName] = useState(task.name_task)
    const [taskDescriptions, setTaskDescriptions] = useState(task.task_descriptions)
    const [taskDateStart, setTaskDateStart] = useState(task.task_date_start)
    const [taskDateEnd, setTaskDateEnd] = useState(task.task_date_end)
    const [taskPriority, setTaskPriority] = useState(task.task_priority)
    const [taskComplexity, setTaskComplexity] = useState(task.task_complexity)
    const [taskStatus, setTaskStatus] = useState(task.task_status)
    const [responsible, setResponsible] = useState('')

    const sendTaskHandler = (e: any) => {
      e.preventDefault()
      const data = {
        task_id: task.task_id,
        name_task: taskName,
        task_descriptions: taskDescriptions,
        task_date_start: taskDateStart,
        task_date_end: taskDateEnd,
        task_priority: taskPriority,
        task_complexity: taskComplexity,
        project_id: project.project_id
        // taskStatus
      }
      console.log(data)

      dispatch(sendUserTask(data))
    }

    const changeTaskHandler = (e: any) => {
      e.preventDefault()
      const data = {
        task_id: task.task_id,
        name_task: taskName,
        task_descriptions: taskDescriptions,
        task_date_start: taskDateStart,
        task_date_end: taskDateEnd,
        task_priority: taskPriority,
        task_complexity: taskComplexity,
        // taskStatus
      }
      // console.log(changeTask(projects, data))
      dispatch(changeUserTask(data, projects, 'POST'))
    }

    const deleteTaskHandler = (e: any) => {
      e.preventDefault()
      const data = {
        task_id: task.task_id,
        name_task: taskName,
        task_descriptions: taskDescriptions,
        task_date_start: taskDateStart,
        task_date_end: taskDateEnd,
        task_priority: taskPriority,
        task_complexity: taskComplexity,
        // taskStatus
      }
      // console.log(changeTask(projects, data))
      dispatch(changeUserTask(data, projects, 'DELETE')).then(() => navigate('/home'))
      
    }

    useEffect(() => {
      console.log('Projects has changed: ', projects)
      // localStorage.setItem('projects', JSON.stringify(projects))
      
    }, [projects])

  return user.role !== 5 ? (
    <div className={cls.Task}>
        <Navbar/>
      <div className={cls.task_container}>
          <h2>{task.name_task}</h2>
          <p><strong>Description:</strong> {task.task_descriptions}</p>
          <p><strong>Start Date:</strong> {task.task_date_start}</p>
          <p><strong>End Date:</strong> {task.task_date_end}</p>
          <p><strong>Priority:</strong> {task.task_priority}</p>
          <p><strong>Complexity:</strong> {task.task_complexity}</p>
          <p><strong>Status:</strong> {task.task_status}</p>
      </div>
      <Button onClick={(e) => sendTaskHandler(e)} className={theme == Theme.DARK ? cls.btn : cls.btn_light}>Send</Button>
    </div>
    ) : 
    (
        <div className={cls.Task}>
            <Navbar/>
            {/* <div style={{padding: '30px'}}>
          <div className={cls.project_container}>
              <h2>Project: <input  value={project.name_project}></input></h2>
              
              <p><strong>Start Date:</strong> <input  value={project.project_date_start}/></p>
              <p><strong>End Date:</strong> <input  value={project.project_date_end}/></p>
          </div>
          <p><strong>Description:</strong> <textarea className={cls.textarea}  value={project.project_descriptions}></textarea></p>
          </div> */}
          
          <div className={cls.task_container}>
              <h2>Task: <input onChange={e => setTaskName(e.target.value)} value={taskName}></input></h2>
              <p><strong>Description:</strong> <textarea onChange={e => setTaskDescriptions(e.target.value)} value={taskDescriptions}></textarea></p>
              <p><strong>Start Date:</strong> <input onChange={e => setTaskDateStart(e.target.value)} value={taskDateStart}/></p>
              <p><strong>End Date:</strong> <input onChange={e => setTaskDateEnd(e.target.value)} value={taskDateEnd}/></p>
              <p><strong>Priority:</strong> <input onChange={e => setTaskPriority(e.target.value)} value={taskPriority}/></p>
              <p><strong>Complexity:</strong> <input onChange={e => setTaskComplexity(e.target.value)} value={taskComplexity}/></p>
              <p><strong>Status:</strong> <input  value={taskStatus}/></p>
          </div>
          {/* <div className={cls.task_container}>
              <table>
              <h2>Task: <input onChange={e => setTaskName(e.target.value)} value={taskName}></input></h2>
              <tr><td><strong>Description:</strong></td> <td><textarea onChange={e => setTaskDescriptions(e.target.value)} value={taskDescriptions}></textarea></td></tr>
              <tr><td><strong>Start Date:</strong></td> <td><input onChange={e => setTaskDateStart(e.target.value)} value={taskDateStart}/></td></tr>
              <tr><td><strong>End Date:</strong></td> <td><input onChange={e => setTaskDateEnd(e.target.value)} value={taskDateEnd}/></td></tr>
              <tr><td><strong>Priority:</strong></td> <td><input onChange={e => setTaskPriority(e.target.value)} value={taskPriority}/></td></tr>
              <tr><td><strong>Complexity:</strong></td> <td><input onChange={e => setTaskComplexity(e.target.value)} value={taskComplexity}/></td></tr>
              <tr><td><strong>Status:</strong></td> <td><input  value={taskStatus}/></td></tr>
              </table>
          </div> */}

          <Button onClick={e => setIsModalOpen(true)} className={theme == Theme.DARK ? cls.btn_delete : cls.btn_delete_light}>Delete</Button>
          <Button onClick={e => changeTaskHandler(e)} className={theme == Theme.DARK ? cls.btn : cls.btn_light}>Change</Button>

          <Modal className={cls.modal} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
              <h2>Вы уверенны?</h2>
              <Button onClick={e => deleteTaskHandler(e)} className={theme == Theme.DARK ? cls.btn_delete : cls.btn_delete_light}>Delete</Button>
              <Button onClick={() => setIsModalOpen(false)} className={theme == Theme.DARK ? cls.btn : cls.btn_light}>Cancel</Button>
          </Modal>
        </div>
    )
}

export default TaskPage