'use client'

import { User } from '@prisma/client'
import UserBox from './UserBox'

interface UserListProps {
    users: User[]
}

const UserList = ({ users }: UserListProps) => {
    console.log(users)
    return (
        <aside className="fixed inset-y-0 pb-20 lg:pb-0 lg:left-20 lg:w-80 overflow-y-auto border-r border-gray-200 block w-full left-0">
            <div className="flex flex-col">
                <div className="text-2xl font-bold text-neutral-800 py-4">
                    People
                </div>
            </div>

            {users.map((user) => (
                <UserBox key={user.email} user={user} />
            ))}
        </aside>
    )
}

export default UserList
