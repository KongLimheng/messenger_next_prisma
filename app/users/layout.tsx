import React from 'react'
import getUsers from '../actions/getUsers'
import Sidebar from '../components/Sidebar'
import UserList from './components/UserList'

const UserLayout = async ({ children }: { children: React.ReactNode }) => {
    const users = await getUsers()

    return (
        //@ts-expect-error
        <Sidebar>
            <UserList users={users} />
            <div className="h-full">{children}</div>
        </Sidebar>
    )
}

export default UserLayout
