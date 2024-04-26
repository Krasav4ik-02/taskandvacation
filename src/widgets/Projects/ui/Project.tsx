import { Button } from 'shared/ui/Button/Button'
import cls from './Project.module.scss'
import { IProject } from 'app/redux/models/IUser'

interface ProjectProps{
  project: IProject
}

export const Project = ({project}: ProjectProps) => {

  const msToDays = (ms: number) => {
    let days = Math.floor(ms / 86400000);
    return days
  }

  return (
    <div className={cls.Project}>
      {project.name_project}
      <div className={cls.task_body}>
        <div>Time left:</div>
        <div className={cls.time}><p>{msToDays(Date.parse(project.project_date_end) - Date.now())}d</p></div>
      </div>
      <Button className={cls.btn}>Change</Button>
    </div>
  )
}
