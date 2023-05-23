'use client'

import { User } from '@prisma/client'
import { useState } from 'react'
import useRoutes from '../hooks/useRoutes'
import Avatar from './Avatar'
import DesktopItem from './DesktopItem'

interface DesktopSidebarProps {
    currentUser: User
}
const DesktopSidebar = ({ currentUser }: DesktopSidebarProps) => {
    const routes = useRoutes()
    const [isOpen, setIsOpen] = useState(false)

    console.log({ currentUser }, 'here')

    return (
        <div
            className="hidden lg:fixed lg:flex lg:w-20 lg:z-40 lg:inset-y-0 lg:left-0 xl:px-6 lg:overflow-y-auto
        lg:border-r lg:pb-4 lg:flex-col justify-between"
        >
            <nav className="mt-4 flex flex-col justify-between">
                <ul
                    role="list"
                    className="flex flex-col items-center space-y-1"
                >
                    {routes.map((route) => (
                        <DesktopItem {...route} key={route.label} />
                    ))}
                </ul>
            </nav>

            <nav className="mt-4 flex flex-col justify-between items-center">
                <div
                    onClick={() => setIsOpen(true)}
                    className="cursor-pointer hover:opacity-75 transition"
                >
                    <Avatar user={currentUser} />
                </div>
            </nav>
        </div>
    )
}

export default DesktopSidebar
