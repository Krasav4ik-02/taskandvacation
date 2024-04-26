import { IProject } from "app/redux/models/IUser"
import { FC, useState } from "react"
import cls from './Dropdown.module.scss'
import { useTranslation } from "react-i18next"
import { classNames } from "shared/lib/classNames/classNames"

interface DropdownProps {
    projects: IProject[]
    selectedProject: IProject
    setSelectedProject: (proj: IProject) => void
}

export const Dropdown: FC<DropdownProps> = ({projects, selectedProject, setSelectedProject}) => {
    // const [selectedProject, setSelectedProject] = useState(selectedProj)
    // const [selectedProjectName, setSelectedProjectName] = useState(selectedProject.name_project)
    const [visible, setVisible] = useState(false)
    const {t} = useTranslation('home')

    const selectHandler = (e: any) => {
        // const project = JSON.parse(e.target.value)
        const project = JSON.parse(e)
        // setSelectedProjectName(project.name_project)
        setSelectedProject(project)
        setVisible(prev => !prev)
        // console.log(selectedProject)
    }

  return (
        // <div className={cls.Dropdown}>
        //     <label htmlFor="project-select"> {t('Project')} </label>
        //     <select
        //         id="project-select"
        //         value={selectedProject.name_project}
        //         onChange={e => selectHandler(e)}
        //     >
        //         <option>{ selectedProject.name_project }</option>
        //         {projects.map((project, index) => (
        //             <option key={index} value={JSON.stringify(project)}>
        //                 {project.name_project}
        //             </option>
        //         ))}
        //     </select>
        // </div>

        <div 
            className={classNames(cls.Dropdown, {}, [])}
        >
            <div>Project</div>
            <h5 onClick={() => setVisible(prev => !prev)}>{ selectedProject.name_project }</h5>
            <div style={{position: 'relative'}}>
            <div className={cls.dropdown} style={{display: visible ? 'block' : 'none'}}>
                { projects.map((project, idx) => (
                    <div className={classNames(cls.slice, {[cls.selected]: project.project_id === selectedProject.project_id}, [])} onClick={() => selectHandler(JSON.stringify(project))} key={idx}> {project.name_project} </div>
                )) }
            </div>
            </div>
        </div>
    )
}
