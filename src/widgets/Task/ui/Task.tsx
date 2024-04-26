import { Button } from 'shared/ui/Button/Button'
import cls from './Task.module.scss'
import { ITAsk } from 'app/redux/models/IUser'
import { useAppDispatch, useAppSelector } from 'app/redux/hooks/redux'
import { selectTask } from 'app/redux/store/reducers/ActionCreator'
import { useNavigate } from 'react-router-dom'
import HighlightedCell from 'shared/ui/HighlightedCell/HighlightedCell'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import { useTranslation } from 'react-i18next'

interface TaskProps {
    task: ITAsk
}

export const Task = ({task}: TaskProps) => {

  const {selectedProject} = useAppSelector(state => state.userReducer)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const {user} = useAppSelector(state => state.userReducer)
  const {theme} = useTheme()
  const {t} = useTranslation('home')

  const msToDays = (ms: number) => {
    let days = Math.floor(ms / 86400000);
    return days
  }

  const selectTaskHandler = (task: ITAsk) => {
    dispatch(selectTask(task))
    localStorage.setItem('selectedTask', JSON.stringify(task))
    localStorage.setItem('selectedProject', JSON.stringify(selectedProject))
    navigate('/task')
  }

  return (
    <div className={cls.Task}>
        {task.name_task}
        <div className={cls.task_body}>

          <div style={{position: 'absolute', left: '42%'}}> {t('Time left')}: </div>
          <div className={cls.time}><p>{    msToDays(Date.parse(task.task_date_end) - Date.now())}d</p></div>

          <div style={{position: 'absolute', left: '13%'}}> {t('Priority')}: </div>
          <HighlightedCell task={task} highlightLevelName='task_priority' highlightLevel={task.task_priority} levels={5} className={cls.priority}>123</HighlightedCell>
        
          <div style={{position: 'absolute', left: '70%'}}> {t('Complexity')}: </div>
          <HighlightedCell task={task} highlightLevelName='task_complexity' highlightLevel={task.task_complexity} levels={5} className={cls.complexity}>123</HighlightedCell>
        </div>
      
        <Button onClick={() => selectTaskHandler(task)} className={theme == Theme.DARK ? cls.btn : cls.btn_light}>{user.role == 5 ? t('Change') : t('Open')}</Button>
    </div>
  )
}
