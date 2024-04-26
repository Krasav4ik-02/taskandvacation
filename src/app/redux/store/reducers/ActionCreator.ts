import { ILogin, ILoginResponse, IProject, IRegistration, IUser, IRegistrationManager, ITAsk } from "app/redux/models/IUser";
import { AppDispatch } from "../store";
import { userSlice } from "./UserSlice";
import { useAppSelector } from "app/redux/hooks/redux";
import { changeTask } from "shared/lib/changeTask";


function getCookie(name: string) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

export const url = 'http://26.143.202.240:8000'
// const urlErs = 'http://26.209.237.113:8000'  'http://26.143.202.240:8000'

export const fetchUserLogin = (data: ILogin) => async (dispatch: AppDispatch) => {
    try{
        dispatch(userSlice.actions.userFetching())
        const response = await fetch(`${url}/authentication`, {
            method: "POST",
            headers: {
            Accept: "application/json",
            'Access-Control-Allow-Origin': '*',
            "Content-Type": "application/json; charset=UTF-8",
            'X-CSRFToken': getCookie('csrftoken')
            },
            body: JSON.stringify(data)
        })
        .then((res) => {
            if( !res.ok ) {
                throw new Error('' + res.status)
            }
            return res.json()
        }).then(data => {
            console.log('After fetching', data)
            dispatch(userSlice.actions.userFetchingSuccess(data.user))
            // dispatch(userSlice.actions.userProjectsFetchingSuccess(data.projects))
            // dispatch(userSlice.actions.userTeamleadsFetchingSuccess(data.teamleads))
            // dispatch(userSlice.actions.userProgrammersFetchingSuccess(data.programmers))
        })//.catch(e => dispatch(userSlice.actions.userFetchingError(e.message))) as ILoginResponse

        // const user: IUser = response.user
        // const projects: IProject[] = response.projects
        // dispatch(userSlice.actions.userFetchingSuccess(user))
        // dispatch(userSlice.actions.userProjectsFetchingSuccess(projects))
    } catch(e) {
        dispatch(userSlice.actions.userFetchingError(e.message))
    }
}

export const fetchUserRegistration = (data: IRegistration) => async (dispatch: AppDispatch) => {
    try{
        console.log('do fetch')
        const response = await fetch(`${url}/registration`, {
            method: "POST",
            headers: {
            Accept: "application/json",
            'Access-Control-Allow-Origin': '*',
            "Content-Type": "application/json; charset=UTF-8",
            'X-CSRFToken': getCookie('csrftoken')
            },
            body: JSON.stringify(data)
        }).then((res) => {
            if(!res.ok) {
                throw new Error('Ошибка' + res.status)
            }
            return res.json()
        }).then(data => dispatch(userSlice.actions.userFetchingRegistrationSuccess())).catch(e => dispatch(userSlice.actions.userFetchingRegistrationError(e.message)))//.then(() => dispatch(userSlice.actions.userFetchingRegistrationSuccess()))
        // console.log(data)
        // dispatch(userSlice.actions.userFetchingRegistrationSuccess())
        // return response
    } catch(e) {
        dispatch(userSlice.actions.userFetchingRegistrationError(e.message))
    }
}

export const fetchUserRegistrationManager = (data: IRegistrationManager) => async (dispatch: AppDispatch) => {
    try{
        const response = await fetch(`${url}/registration_manager`, {
            method: "POST",
            headers: {
            Accept: "application/json",
            'Access-Control-Allow-Origin': '*',
            "Content-Type": "application/json; charset=UTF-8",
            'X-CSRFToken': getCookie('csrftoken')
            },
            body: JSON.stringify(data)
        }).then((res) => {
            if(!res.ok) {
                throw new Error('Ошибка' + res.status)
            }
            return res.json()
        }).then(data => dispatch(userSlice.actions.userFetchingRegistrationSuccess())).catch(e => dispatch(userSlice.actions.userFetchingRegistrationError(e.message)))
        // const data = await 
        // dispatch(userSlice.actions.userFetchingRegistrationSuccess())
    } catch(e) {
        dispatch(userSlice.actions.userFetchingRegistrationError(e.message))
    }
}   

export const fetchUserData = (data: IUser) => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.userFetching())
        const response = await fetch(`${url}/home`, {
            method: "POST",
            headers: {
            Accept: "application/json",
            'Access-Control-Allow-Origin': '*',
            "Content-Type": "application/json; charset=UTF-8",
            'X-CSRFToken': getCookie('csrftoken')
            },
            body: JSON.stringify(data)
        }).then((res) => {
            if(!res.ok) {
                throw new Error('Ошибка' + res.status)
            }
            return res.json()
        }).then((data) => {
            console.log('After fetching user data HOME', data)
            dispatch(userSlice.actions.userProjectsFetchingSuccess(data.projects))
            dispatch(userSlice.actions.userTeamleadsFetchingSuccess(data.teamleads))
            dispatch(userSlice.actions.userProgrammersFetchingSuccess(data.developers))
        }).catch(e => dispatch(userSlice.actions.userFetchingError(e.message)))
    } catch(e) {
        dispatch(userSlice.actions.userFetchingError(e.message))
    }
}

export const createProject = (data: any) => async (dispatch: AppDispatch) => {
    try{
        const response = await fetch(`${url}/create_project`, {
            method: "POST",
            headers: {
            Accept: "application/json",
            'Access-Control-Allow-Origin': '*',
            "Content-Type": "application/json; charset=UTF-8",
            // 'X-CSRFToken': getCookie('csrftoken')
            },
            body: JSON.stringify(data)
        })
        .then((res) => {
            if(!res.ok) {
                throw new Error('Ошибка' + res.status)
            }
            return res.json()
        }).then(data => dispatch(userSlice.actions.createProject(data.projects))).catch((e) => console.error(e.message))
        // const dataParse = await response.json()
        // console.log(dataParse)
        // const projects: IProject[] = response.projects
        
        // dispatch(userSlice.actions.createProject(projects))
    } catch(e) {
        console.error(e.message)
    }
}

export const createTask = (data: any) => async (dispatch: AppDispatch) => {
    try{
        const response = await fetch(`${url}/create_task`, {
            method: "POST",
            headers: {
            Accept: "application/json",
            'Access-Control-Allow-Origin': '*',
            "Content-Type": "application/json; charset=UTF-8",
            // 'X-CSRFToken': getCookie('csrftoken')
            },
            body: JSON.stringify(data)
        })
        .then((res) => {
            if(!res.ok) {
                throw new Error('Ошибка' + res.status)
            }
            return res.json()
        })
        
        
        
        //.then(res => res.json())
        // const dataParse = await response.json()
        const projects: IProject[] = response.projects
        console.log(response)
        dispatch(userSlice.actions.createProject(projects))
    } catch(e) {
        
    }
}

export const selectTask = (task: ITAsk) => (dispatch: AppDispatch) => {
    dispatch(userSlice.actions.selectTask(task))
}

export const selectProject = (project: IProject) => (dispatch: AppDispatch) => {
    dispatch(userSlice.actions.selectProject(project))
}

export const changeUserData = (data: any) => async (dispatch: AppDispatch) => {
    try {
        console.log(JSON.stringify(data))
        dispatch(userSlice.actions.userFetching())
        const response = await fetch(`${url}/edit_profile`, {
            method: "POST",
            headers: {
            Accept: "application/json",
            'Access-Control-Allow-Origin': '*',
            "Content-Type": "application/json; charset=UTF-8",
            // 'X-CSRFToken': getCookie('csrftoken')
            },
            body: JSON.stringify(data)
        }).then((res) => {
            if(!res.ok) {
                throw new Error('Ошибка' + res.status)
            }
            return res.json()
        }).then(data => dispatch(userSlice.actions.userFetchingSuccess(data.user_data))).catch((e) => dispatch(userSlice.actions.userFetchingError(e.message)))
        // const user: IUser = response.user_data
        // dispatch(userSlice.actions.userFetchingSuccess(user))
    } catch (e) {
        dispatch(userSlice.actions.userFetchingError(e.message))
    }
}

export const changeUserTask = (data: ITAsk, projects: IProject[], method: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.userFetching())
        const response = await fetch(`${url}/edit_task`, {
            method: `${method}`,
            headers: {
            Accept: "application/json",
            'Access-Control-Allow-Origin': '*',
            "Content-Type": "application/json; charset=UTF-8",
            // 'X-CSRFToken': getCookie('csrftoken')
            },
            body: JSON.stringify(data)
        }).then((res) => {
            if(!res.ok) {
                throw new Error('Ошибка' + res.status)
            }
            return res.json()
        }).then(data => {
            // console.log(data.task_data)
            const projectsWithChangedTask = changeTask(projects, data.task_data)
            // console.log('projectsWithChangedTask: ' , projectsWithChangedTask)
            // localStorage.setItem('selectedTask', JSON.stringify(data))
            // dispatch(userSlice.actions.selectTask(data))
            dispatch(userSlice.actions.userChangeTask(projectsWithChangedTask))
        }).catch((e) => dispatch(userSlice.actions.userFetchingError(e.message)))

    } catch (e) {
        dispatch(userSlice.actions.userFetchingError(e.message))
    }
}

export const sendUserTask = (data: ITAsk) => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.userFetching())
        const response = await fetch(`${url}/send_task`, {
            method: `POST`,
            headers: {
            Accept: "application/json",
            'Access-Control-Allow-Origin': '*',
            "Content-Type": "application/json; charset=UTF-8",
            // 'X-CSRFToken': getCookie('csrftoken')
            },
            body: JSON.stringify(data)
        }).then((res) => {
            if(!res.ok) {
                throw new Error('Ошибка' + res.status)
            }
            return res.json()
        }).then(data => {
            // console.log('projectsWithChangedTask: ' , projectsWithChangedTask)
            // localStorage.setItem('selectedTask', JSON.stringify(data))
            // dispatch(userSlice.actions.selectTask(data))
            // dispatch(userSlice.actions.userChangeTask(projectsWithChangedTask))
            dispatch(userSlice.actions.sendTaskSuccess())
        }).catch((e) => dispatch(userSlice.actions.userFetchingError(e.message)))

    } catch (e) {
        dispatch(userSlice.actions.userFetchingError(e.message))
    }
}

export const fetchUserVacation = (data: IUser) => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.userFetching())
        const response = await fetch(`${url}/vacation`, {
            method: `POST`,
            headers: {
            Accept: "application/json",
            'Access-Control-Allow-Origin': '*',
            "Content-Type": "application/json; charset=UTF-8",
            // 'X-CSRFToken': getCookie('csrftoken')
            },
            body: JSON.stringify(data)
        }).then((res) => {
            if(!res.ok) {
                throw new Error('Ошибка' + res.status)
            }
            return res.json()
        }).then(data => {
            // console.log('projectsWithChangedTask: ' , projectsWithChangedTask)
            // localStorage.setItem('selectedTask', JSON.stringify(data))
            // dispatch(userSlice.actions.selectTask(data))
            // dispatch(userSlice.actions.userChangeTask(projectsWithChangedTask))
            console.log('Vacation: ', data)
            dispatch(userSlice.actions.fetchUserVacation(data))
        }).catch((e) => dispatch(userSlice.actions.userFetchingError(e.message)))

    } catch (e) {
        dispatch(userSlice.actions.userFetchingError(e.message))
    }
}