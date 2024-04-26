import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IChangeTask, IProgrammer, IProject, ITAsk, ITeamlead, IUser, IVacation } from "app/redux/models/IUser"
import { changeTask } from "shared/lib/changeTask"

interface UserState {
    user?: IUser,
    isLoading: boolean,
    error: string,
    registration: boolean,
    registrationError: string
    projects: IProject[]
    teamleads?: ITeamlead[]
    programmers?: IProgrammer[]
    selectedTask?: ITAsk,
    selectedProject?: IProject
    vacationData?: IVacation
}

const initialState: UserState = {
    // user: {
    //     name: '',
    //     id: null,
    //     username: '',
    //     first_name: '',
    //     last_name: '',
    //     role: 5
    // },
    isLoading: false,
    error: '',
    registration: false,
    registrationError: '',
    projects: [],
    teamleads: [],
    programmers: [],
    // selectedTask: {}
    // vacationData: {}
}


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userFetching(state) {
            state.isLoading = true
        },
        userFetchingSuccess(state, action: PayloadAction<IUser>) {
            state.isLoading = false
            state.user = action.payload
            state.error = ''
        },
        userProjectsFetchingSuccess(state, action: PayloadAction<IProject[]>) {
            state.isLoading = false
            state.projects = action.payload
            state.error = ''
        },
        userTeamleadsFetchingSuccess(state, action: PayloadAction<ITeamlead[]>) {
            state.isLoading = false
            state.teamleads = action.payload
            state.error = ''
        },
        userProgrammersFetchingSuccess(state, action: PayloadAction<IProgrammer[]>) {
            state.isLoading = false
            state.programmers = action.payload
            state.error = ''
        },
        userFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        },
        userFetchingRegistrationSuccess(state) {
            state.registration = true
            state.registrationError = ''
        },
        userFetchingRegistrationError(state, action: PayloadAction<string>) {
            state.registration = false
            state.registrationError = action.payload
        },
        createProject(state, action: PayloadAction<IProject[]>) {
            // state.projects = state.projects.concat(action.payload)
            state.projects = action.payload
        },
        selectTask(state, action: PayloadAction<ITAsk>) {
            state.selectedTask = action.payload
        },
        selectProject(state, action: PayloadAction<IProject>) {
            state.selectedProject = action.payload
        },
        userChangeTask(state, action: PayloadAction<IProject[]>) {
            state.isLoading = false
            state.projects = action.payload
        },
        sendTaskSuccess(state) {
            state.isLoading = true
        },
        fetchUserVacation(state, action: PayloadAction<IVacation>) {
            state.isLoading = false
            state.vacationData = action.payload
        }
    }
})

export default userSlice.reducer