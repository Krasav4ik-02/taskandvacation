import { Navbar } from 'widgets/Navbar'
import cls from './VacationPage.module.scss'
import { useAppDispatch, useAppSelector } from 'app/redux/hooks/redux'
import { Button } from 'shared/ui/Button/Button'
import { useEffect } from 'react'
import { fetchUserVacation } from 'app/redux/store/reducers/ActionCreator'
import Loader from 'shared/ui/Loader/Loader'


const VacationPage = () => {
    const {user, vacationData, isLoading} = useAppSelector(state => state.userReducer)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchUserVacation(user))
    }, [])

  return (
    <div className={cls.VacationPage}>
        <Navbar/>
        <h1>Data joined to work: { user.data_joined_to_work }</h1>
        {isLoading && <Loader/>}
        {/* <h3>Manager id: { vacationData?.manager_id }</h3> */}
        <h3>Years worked days: { vacationData?.years_worked_days }</h3>
        <h3>Vacation days: { Math.floor(Number(vacationData?.vacation_days)) }</h3>
    </div>
  )
}

export default VacationPage