'use client'

import Avatar from '@/app/components/Avatar'
import { User } from '@prisma/client'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useCallback, useState } from 'react'

const UserBox = ({ user }: { user: User }) => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const handleClick = useCallback(async () => {
        setIsLoading(true)

        axios
            .post('/api/conversations', {
                userId: user.id,
            })
            .then((res) => {
                console.log(res, 'aa')
            })
    }, [router, user])

    return (
        <div
            onClick={handleClick}
            className="cursor-pointer w-full relative flex items-center space-x-3 hover:bg-neutral-100 p-3 mb-2
              rounded-lg transition bg-white"
        >
            <Avatar user={user} />
            <div className="min-w-0 flex-1">
                <div className="focus:outline-none">
                    <div className="flex justify-between items-center mb-1">
                        <p className="text-sm font-medium text-gray-900">
                            {user.name}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserBox
