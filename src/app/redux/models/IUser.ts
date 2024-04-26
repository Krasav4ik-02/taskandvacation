export interface IUser {
    name?: string,
    id: number
    username: string
    first_name?: string
    last_name?: string
    role: number
    name_company?: string,
    ava_image?: string,
    country?: string,
    city?: string,
    email?: string,
    phone_number?: string,
    telegram?: string,
    data_joined_to_work?: string
}

export interface IRegistration {
    username: string,
    first_name: string,
    last_name: string,
    password1: string,
    password2: string,
    role: number
    bin: string
}

export interface IRegistrationManager {
    username: string,
    first_name: string,
    last_name: string,
    password1: string,
    password2: string,
    name_company: string,
    bin: number
}

export interface ILogin {
    username: string,
    password: string
}

export interface ILoginResponse {
    user: IUser,
    projects?: IProject[]
}

export interface IProject {
    project_id: number,
    name_project: string
    name?: string,
    tasks?: ITAsk[]
    project_date_start?: string
    project_date_end?: string
    project_descriptions?: string
    users_in_project?: IUser[]
}

export interface ITAsk {
    name_task?: string
    task_id: number
    task_date_start?: string
    task_date_end?: string
    task_descriptions?: string
    task_complexity?: number
    task_priority?: number
    task_status?: number
}


export interface ITeamlead {
    bin: string,
    id: number,
    role: number,
    username: string
}

export interface IProgrammer {
    bin: string,
    id: number,
    role: number,
    username: string
}


export interface IChangeTask {
    project_id: number,
    task: ITAsk
}


export interface IVacation {
    years_worked_days: string
    vacation_days: string
    manager_id: number
}