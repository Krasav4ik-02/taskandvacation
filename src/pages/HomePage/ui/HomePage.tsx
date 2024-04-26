import { useAppDispatch, useAppSelector } from "app/redux/hooks/redux"
import cls from './HomePage.module.scss'
import { Navbar } from "widgets/Navbar"
import { Task } from "widgets/Task"
import { useEffect, useState } from "react"
import { Project } from "widgets/Projects"
import { Modal } from "widgets/Modal"
import { Button } from "shared/ui/Button/Button"
import { createProject, createTask, fetchUserData, selectProject } from "app/redux/store/reducers/ActionCreator"
import { Dropdown } from "widgets/Dropdown"
import { IProject, ITAsk } from "app/redux/models/IUser"
import Loader from "shared/ui/Loader/Loader"
import { Profile } from "widgets/Profile"
import { Calendar } from "widgets/Calendar"
import plus_icon from '../../../shared/assets/icons/icons8-plus.png'
import { Theme, useTheme } from "app/providers/ThemeProvider"
import { useTranslation } from "react-i18next"

const HomePage = () => {
  const dispatch = useAppDispatch()
  const {user, projects, teamleads, programmers, isLoading, selectedProject} = useAppSelector(state => state.userReducer)
  const {theme} = useTheme()
  const {t, i18n} = useTranslation('home')

  
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [projectName, setProjectName] = useState('')
  const [taskName, setTaskName] = useState('')
  const [projectDescriptions, setProjectDescriptions] = useState('')
  const [projectDateStart, setProjectDateStart] = useState(null)
  const [projectDateEnd, setProjectDateEnd] = useState(null)
  const [responsible, setResponsible] = useState('')
  const [userProjects, setUserProjects] = useState([])


  // const [selectedProject, setSelectedProject] = useState(null) 
  

  // const closeModal = () => {
  //   setIsOpen
  // }

  // let userProjects = projects

  const createProjectHandler = (e: any) => {
    e.preventDefault()
    const data = {
      name_project: projectName,
      user: responsible,
      project_descriptions: projectDescriptions,
      project_date_start: projectDateStart,
      project_date_end: projectDateEnd,
    }
    dispatch(createProject(data))
    setIsModalOpen(false)
  }

  const createTaskHandler = (e: any) => {
    e.preventDefault()
    // let now = new Date()
    // let hours = now.getHours()
    // let minutes = now.getMinutes()
    // let seconds = now.getSeconds()
    const data = {
      name_task: projectName,
      user: responsible,
      teamlead_id: user.id,
      project_id: selectedProject.project_id,
      task_descriptions: projectDescriptions,
      task_date_start: `${projectDateStart}`,
      task_date_end: `${projectDateEnd}`,
      task_priority: 2,
      task_complexity: 2
    }
    console.log(data)
    dispatch(createTask(data))
    setIsModalOpen(false)
  }


  useEffect(() => {
    dispatch(fetchUserData(user)).then(data => console.log(data))
  }, [])

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
    // projects.length ? :
    localStorage.setItem('projects', JSON.stringify(projects))
    localStorage.setItem('teamleads', JSON.stringify(teamleads))
    localStorage.setItem('programmers', JSON.stringify(programmers))
    projects !== null  && setUserProjects(projects)
    // projects !== null  && setSelectedProject(projects[0])
    projects !== null  && dispatch(selectProject(projects[0]))
  }, [user, projects, teamleads, programmers])

  
  // const selectProjectHandler = (proj: IProject) => {
  //   setSelectedProject(proj)
  //   setSelectedProject(proj)
  //   console.log('Select',selectedProject)
  // }

  return (
    <div className={cls.HomePage}>
      <Navbar/>
      {isModalOpen && <Modal className={cls.modal} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        { user.role == 7 || user.role == 8 && <h2>{t('Create project')}</h2>}
        { user.role == 5 && <h2>{t('Create task')}</h2>}
        <input value={projectName} onChange={e => setProjectName(e.target.value)} type="text" placeholder={t('Enter the title')}/>
        {/* <input value={projectDescriptions} onChange={e => setProjectDescriptions(e.target.value)} type="text" placeholder="Описание проекта"/> */}
        <textarea value={projectDescriptions} onChange={e => setProjectDescriptions(e.target.value)}  placeholder={t('Description')}  rows={5}></textarea>
        {/* <input value={projectDateStart} onChange={e => setProjectDateStart(e.target.value)} type="text" placeholder="Дата старта"/> */}
        <Calendar date={projectDateStart} placeholder={t('Start date')} setDate={date => setProjectDateStart(date)}/>
        <Calendar date={projectDateEnd} placeholder={t('End date')} setDate={date => setProjectDateEnd(date)}/>
        {/* <input value={projectDateEnd} onChange={e => setProjectDateEnd(e.target.value)} type="text" placeholder="Дата окончания"/> */}
        { user.role == 7 || user.role == 8 && <select
                id="teamleads-select"
                value={responsible}
                onChange={e => setResponsible(e.target.value)}
            >
                <option>{ t('Choose someone responsible') }</option>
                {teamleads && teamleads.map((teamlead, index) => (
                    <option key={index} value={teamlead.id}>
                      {teamlead.username}
                    </option>
                ))}
        </select>}
        { user.role == 5 && <select
            id="teamleads-select"
            value={responsible}
            onChange={e => setResponsible(e.target.value)}
            >
            <option>{ t('Choose someone responsible') }</option>
            {programmers && programmers.map((programmer, index) => (
              <option key={index} value={programmer.id}>
                {programmer.username}
              </option>
            ))}
        </select>}
        { user.role == 7 || user.role == 8 &&  <div><Button onClick={(e) => createProjectHandler(e)} className={cls.btn}>{ t('Create') }</Button></div>}
        { user.role == 5 &&  <div><Button onClick={(e) => createTaskHandler(e)} className={theme == Theme.DARK ? cls.btn : cls.btn_light}>{ t('Create') }</Button></div>}
        </Modal>} 
      
      {userProjects.length ? 
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
          <Dropdown selectedProject={selectedProject} setSelectedProject={(proj: IProject) => dispatch(selectProject(proj))}  projects={userProjects}/>
          <div  className={cls.projectInfo}> {t('Responsibles')}
            <div style={{display: 'flex'}}>{selectedProject.users_in_project?.map(user => <Profile user={user}/>)}</div>
          </div>
          <div className={cls.projectInfo}> {t('Deadline')} 
            <div><h4>{ selectedProject.project_date_start + ' - ' + selectedProject.project_date_end }</h4></div>
          </div>
        </div> : null }
        { userProjects.length && <div style={{display: 'flex', justifyContent: 'space-between'}}><h3 style={{background: 'none', color: '#A3A4CC'}}>{t('Description')}</h3> { !!projects && projects.length  ? user.role == 5 && <h3 style={{margin: '10px 160px'}} onClick={() => setIsModalOpen(true)}> {t('Create new Task')} </h3> : null}  </div> }
        { user.role == 8 && <h3 style={{margin: '10px 160px'}} onClick={() => setIsModalOpen(true)}> {t('Create new Project')} </h3>}
        { userProjects.length && <div className={cls.projectDescriptions}><p> {selectedProject.project_descriptions}</p></div>}
      {/* {userProjects.length ? <Dropdown selectedProject={selectedProject} setSelectedProject={(proj: IProject) => dispatch(selectProject(proj))}  projects={userProjects}/> : null} */}
      {/* {userProjects.length ? <div className={cls.projectInfo}></div> : null} */}
      {/* { user.role == 7 || user.role == 8 && <h3 onClick={() => setIsModalOpen(true)}> Create new Project </h3>}  */}
      {/* { !!projects && projects.length  ? user.role == 5 && <h3 onClick={() => setIsModalOpen(true)}>  Create new Task</h3> : null}  */}
      <div className={cls.tasksLine}>
        {/* { userData.role !== 7 && userData.role !== 8 ? userProjects[0]?.tasks?.length ? projects[0].tasks.map(task => <Task task={task}/>) : <div>Пусто</div> : null} */}
        { user.role !== 7 && user.role !== 8 ? selectedProject?.tasks?.length ? selectedProject.tasks.map((task: ITAsk) => <Task task={task}/>) : <div> { t('No tasks') } </div> : null}
        { user.role == 7 || user.role == 8 ? userProjects?.length ? projects.map(project => <Project project={project}/>) : <div>Пусто</div> : null }
      </div>
      {isLoading && <Loader/>}
    </div>
  )
}

export default HomePage