import { FC, ReactNode, useState } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import cls from './HighlightedCell.module.scss'
import { useAppDispatch, useAppSelector } from "app/redux/hooks/redux"
import { changeUserTask } from "app/redux/store/reducers/ActionCreator"
import { ITAsk } from "app/redux/models/IUser"
import { Theme, useTheme } from "app/providers/ThemeProvider"

interface HighlightedCellProps {
    levels: number
    children: ReactNode,
    className: string,
    highlightLevel: number,
    task: ITAsk,
    highlightLevelName: string
}

const HighlightedCell: FC<HighlightedCellProps> = ({levels, children, className, highlightLevel, highlightLevelName, task}) => {
    const [highlightedLevel, setHighlightedLevel] = useState(highlightLevel)
    const dispatch = useAppDispatch()
    const {projects, isLoading, user} = useAppSelector(state => state.userReducer)
    const {theme} = useTheme()

    const changeTaskHandler = (e: any, level: number) => {
        if(isLoading) return
        e.preventDefault()
        if(user.role == 5) {
        setHighlightedLevel(level)
        const data = {
        //   task_priority: taskPriority,
        //   task_complexity: taskComplexity,
          // taskStatus
          task_id: task.task_id,
          [highlightLevelName]: level
        }
        // console.log(changeTask(projects, data))
        dispatch(changeUserTask(data, projects, 'POST'))
        }
        
    }

  return (
    // <span>
    //     asfasf
    <div className={classNames(cls.HighlightedCell, {}, [className])}>
        
        {[Array(levels).fill(0).map((_, index, arr) => (
            <div style={{display: 'grid', alignItems: 'center', justifyContent: 'center'}}>
            <div
                key={index}
                style={{
                    backgroundColor: arr.length -1 - index >= highlightedLevel 
                    ?
                    theme == Theme.DARK ? '#2b2b3f' : '#fff' :'#5F62E3' , //
                    // padding: '10px',
                    display: 'static',
                    margin: '1px',
                    width: '21px',
                    height: '5px',
                    borderRadius: '2px',
                    cursor: 'pointer'
                }}
                onClick={(e) => changeTaskHandler(e, arr.length  - index)}
            >
                {/* Level {index + 1} {children} */} 
            </div>
            </div>
        ))]}
        
    </div>
    // </span>
  )
}

export default HighlightedCell