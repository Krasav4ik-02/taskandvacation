import { AuthPage } from "pages/AuthPage"
import { HomePage } from "pages/HomePage"
import { ProfilePage } from "pages/ProfilePage"
import { RegistrationManagerPage } from "pages/RegistrationManagerPage"
import { RegistrationPage } from "pages/RegistrationPage"
import { StatisticsPage } from "pages/StatisticsPage"
import { TaskPage } from "pages/TaskPage"
import { VacationPage } from "pages/VacationPage"
import { type RouteProps } from "react-router-dom"


export enum PublicAppRoutes {
    AUTH = 'auth',
    REGISTRATION = 'registration',
    REGISTRATIONMANAGER = 'registrationmanager'
}

export const PublicRoutePath: Record<PublicAppRoutes, string> = {
    [PublicAppRoutes.AUTH]: '/auth',
    [PublicAppRoutes.REGISTRATION]: '/registration',
    [PublicAppRoutes.REGISTRATIONMANAGER]: '/registration/manager/'
}

export const publicRouteConfig: Record<PublicAppRoutes, RouteProps> = {
    [PublicAppRoutes.AUTH]: {
        path: PublicRoutePath.auth,
        element: <AuthPage/>
    },
    [PublicAppRoutes.REGISTRATION]: {
        path: PublicRoutePath.registration,
        element: <RegistrationPage/>
    },
    [PublicAppRoutes.REGISTRATIONMANAGER]: {
        path: PublicRoutePath.registrationmanager,
        element: <RegistrationManagerPage/>
    }
}


export enum PrivateAppRoutes {
    HOME = 'home',
    TASK = 'task',
    PROFILE = 'profile',
    STATISTICS = 'statistics',
    VACATION = 'vacation'
}

export const PrivateRoutePath: Record<PrivateAppRoutes, string> = {
    [PrivateAppRoutes.HOME]: '/home',
    [PrivateAppRoutes.TASK]: '/task',
    [PrivateAppRoutes.PROFILE]: '/profile',
    [PrivateAppRoutes.STATISTICS]: '/statistics',
    [PrivateAppRoutes.VACATION]: '/vacation'
}

export const privateRouteConfig: Record<PrivateAppRoutes, RouteProps> = {
    [PrivateAppRoutes.HOME]: {
        path: PrivateRoutePath.home,
        element: <HomePage/>
    },
    [PrivateAppRoutes.TASK]: {
        path: PrivateRoutePath.task,
        element: <TaskPage/>
    },
    [PrivateAppRoutes.PROFILE]: {
        path: PrivateRoutePath.profile,
        element: <ProfilePage/>
    },
    [PrivateAppRoutes.STATISTICS]: {
        path: PrivateRoutePath.statistics,
        element: <StatisticsPage/>
    },
    [PrivateAppRoutes.VACATION]: {
        path: PrivateRoutePath.vacation,
        element: <VacationPage/>
    }
}