import { Navbar } from 'widgets/Navbar'
import cls from './ProfilePage.module.scss'
import profile_icon from '../../../shared/assets/icons/profile.jpg'
import telegram_icon from '../../../shared/assets/icons/telega.png'
import location_icon from '../../../shared/assets/icons/location.png'
import { useAppDispatch, useAppSelector } from 'app/redux/hooks/redux'
import { idToName } from 'shared/lib/idToName'
import React, { useEffect, useRef, useState } from 'react'
import { changeUserData } from 'app/redux/store/reducers/ActionCreator'
import { Button } from 'shared/ui/Button/Button'
import { url } from 'app/redux/store/reducers/ActionCreator'
import { Theme, useTheme } from 'app/providers/ThemeProvider'

const ProfilePage = () => {
    const {user} = useAppSelector(state => state.userReducer)
    const dispatch = useAppDispatch()
    const fileInputRef = useRef(null)
    const {theme} = useTheme()

    const [aboutEdit, setAboutEdit] = useState(false)
    const [contactsEdit, setContactsEdit] = useState(false)

    const [fullName, setFullName] = useState(user.last_name + ' ' + user.first_name)
    const [country, setCountry] = useState(user.country)
    const [city, setCity] = useState(user.city)

    const [email, setEmail] = useState(user.email)
    const [phone, setPhone] = useState(user.phone_number)
    const [telegram, setTelegram] = useState(user.telegram)

    const profileHandler = () => {
        fileInputRef.current.click()
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files[0]
        if(file) {

            const reader = new FileReader()

            reader.onload = function(e) {
            const data = {
                user: user.id,
                ava_image: e.target.result
            }
            console.log(data)
            dispatch(changeUserData(data))
            }
            reader.readAsDataURL(file as Blob)
        }
    }

    const handleDataAbout = () => {
        if(aboutEdit) {
            const data = {
                user: user.id,
                fullName,
                country,
                city
            }
            dispatch(changeUserData(data))
        }
        setAboutEdit(!aboutEdit)
        
    }

    const handleDataContacts = () => {
        if(contactsEdit) {
            const data = {
                user: user.id,
                email,
                phone_number: phone,
                telegram
            }
            dispatch(changeUserData(data))
        }
        setContactsEdit(!contactsEdit)
        
    }

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user))
    }, [user])

  return (
    <div className={cls.Profile}>
        <Navbar/>
        <div className={cls.profile_board}>
            <div className={cls.avatar}><img onClick={profileHandler} src={ user.ava_image.length ? `${url}${user.ava_image}` : profile_icon  }/></div>
            <div className={cls.gradient}> </div>
            <div className={cls.user_top}>
                <div className={cls.name}>{user.first_name || user.last_name ?  user.last_name + ' ' + user.first_name : ''}</div>
                <div className={cls.location}><img src={location_icon}/>{ user.city  ?  user.city  : ' --- '}</div>
                <div className={cls.telegram}><img src={telegram_icon}/>@{telegram}</div>
            </div>
        </div>

        <div className={cls.info_line}>
            <div className={cls.info}>
                <h3>About</h3>
                { !aboutEdit ? 
                <div>Full name: { user.first_name || user.last_name ?  user.last_name + ' ' + user.first_name : ' Козерук Александр Александрович'}</div> 
                :
                <p>Full name: <input placeholder='Your fullName' onChange={e => setFullName(e.target.value)} value={fullName}/></p>}
                
                { !aboutEdit ?  
                <div>Country: { user.country  ?  user.country  : ' --- '} </div> 
                :
                <p>Country: <input placeholder='Your country' onChange={e => setCountry(e.target.value)} value={country} /></p>}
                { !aboutEdit ? 
                <div>City:{ user.city  ?  user.city  : ' --- '} </div> 
                : 
                <p>City: <input placeholder='Your city' onChange={e => setCity(e.target.value)} value={city}/></p>}
                <div> Role: { user.role  ?  idToName(user.role)  : '---'} </div>
                
                {!aboutEdit && <Button onClick={() => handleDataAbout()} className={`${cls.btn} ${theme !== Theme.DARK ? cls.light_confirm : ''}`}> {!aboutEdit ? 'Edit' : 'Confirm'} </Button>}
                {aboutEdit && 
                <div style={{display: 'flex'}}>
                    <Button onClick={() => handleDataAbout()} className={`${cls.btn_confirm} ${theme !== Theme.DARK ? cls.light_confirm : ''}`}> {!aboutEdit ? 'Edit' : 'Confirm'} </Button>
                    <Button onClick={() => setAboutEdit(false)} className={`${cls.btn_cancel} ${theme !== Theme.DARK ? cls.light_cancel : ''}`}> Cancel </Button>
                </div>
                }
            </div>

            <div className={cls.info}>
                <h3>Contacts</h3>
                { !contactsEdit ? 
                <div>Email: { user.email ?  user.email : ' --- '}</div> 
                :
                <p>Email: <input placeholder='Your email' onChange={e => setEmail(e.target.value)} value={email}/></p>}
                { !contactsEdit ? 
                <div>Phone: { user.phone_number ?  user.phone_number : ' --- '}</div> 
                :
                <p>Phone: <input  placeholder='Your phone' onChange={e => setPhone(e.target.value)} value={phone}/></p>}
                { !contactsEdit ? 
                <div>Telegram: { user.telegram ?  user.telegram : ' --- '}</div> 
                :
                <p>Telegram: <input placeholder='Your telegram' onChange={e => setTelegram(e.target.value)} value={telegram}/></p>}
                
                {!contactsEdit && <Button onClick={() => handleDataContacts()} className={`${cls.btn} ${theme !== Theme.DARK ? cls.light_confirm : ''}`}> {!contactsEdit ? 'Edit' : 'Confirm'} </Button>}
                {contactsEdit && 
                <div style={{display: 'flex'}}>
                    <Button onClick={() => handleDataContacts()} className={`${cls.btn_confirm} ${theme !== Theme.DARK ? cls.light_confirm : ''}`}> {!contactsEdit ? 'Edit' : 'Confirm'} </Button>
                    <Button onClick={() => setContactsEdit(false)} className={`${cls.btn_cancel} ${theme !== Theme.DARK ? cls.light_cancel : ''}`}> Cancel </Button>
                </div>
                }
            </div>

            <div className={cls.info}>
                <h3>My Company</h3>
                <div>Name Company: { user.name_company  ?  user.name_company  : '---'}</div>
                <div>Manager: Логин</div>
                <div>Number of participants: </div>
            </div>
        </div>

        <input ref={fileInputRef} onChange={e => handleFileChange(e)}   accept='.jpg, .jpeg, .png' type='file' style={{display: 'none'}}/>
    </div>
  )
}

export default ProfilePage