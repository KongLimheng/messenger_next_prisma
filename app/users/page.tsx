// 'use client'

import EmptyState from '../components/EmptyState'

const Users = () => {
    // const session = useSession()
    return (
        <div className="hidden lg:block lg:pl-80 h-full bg-red-300">
            <EmptyState />
        </div>
    )
}

export default Users
