import { IUser } from "app/redux/models/IUser"
import { FC } from "react"
import cls from './Profile.module.scss'
import profile_icon from '../../../shared/assets/icons/profile.jpg'
import { url } from "app/redux/store/reducers/ActionCreator"

interface ProfileProps {
    user: IUser
}

export const Profile= ({user}: ProfileProps) => {
  // console.log(`${url}${user.ava_image}`)
  return (
    <div className={cls.Profile}>
        <img src={`${url}${user.ava_image}`}/>
        <div className={cls.info}>{user.username || user.role}</div>
    </div>
  )
}
