import React from 'react'
import {ReactComponent as NavIcon1} from "../assets/icons/nav1.svg"
import {ReactComponent as NavIcon2} from "../assets/icons/nav2.svg"
import {ReactComponent as NavIcon3 } from "../assets/icons/nav3.svg"
import {ReactComponent as NavIcon4 } from "../assets/icons/nav4.svg"
import {ReactComponent as NavIcon5 } from "../assets/icons/nav5.svg"
import {ReactComponent as NavIcon6 } from "../assets/icons/nav6.svg"
import {ReactComponent as NavIcon8} from "../assets/icons/nav8.svg"

export const SidebarData = [

    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <NavIcon1 />,
    },
    {
        title: 'Предложения',
        path: '/proposal',
        icon: <NavIcon2 />,
    },
    {
        title: 'Добавить новое',
        path: '/addnew',
        icon: <NavIcon3 />,
    },
    {
        title: 'Статистика',
        path: '/statistic',
        icon: <NavIcon4 />,
    },
    {
        title: 'Профиль',
        path: '/profile',
        icon: <NavIcon5 />,
    },
    {
        title: 'Поддержка',
        path: '/support',
        icon: <NavIcon6 />,
    },
    {
        title: 'Billing',
        path: '/billing',
        icon: <NavIcon8 />,
    }


]


