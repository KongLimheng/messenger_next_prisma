'use client'

import { User } from '@prisma/client'
import Image from 'next/image'

interface AvatarProps {
    user?: User
}

const Avatar = ({ user }: AvatarProps) => {
    const nameGenerate = user?.name?.charAt(0).toUpperCase()

    return (
        <div className="relative">
            <div className="relative inline-block overflow-hidden h-9 w-9 md:h-11 md:w-11">
                {user?.image ? (
                    <>
                        <Image src={user?.image} alt="profile" fill />
                    </>
                ) : (
                    <div className="w-9 h-9 md:w-11 md:h-11 bg-gray-200 text-gray-500 rounded-full flex justify-center items-center">
                        {nameGenerate}
                    </div>
                )}
            </div>

            <span className="absolute block rounded-full w-2 h-2 bg-green-500 top-0 ring-2 right-0 md:h-3 md:w-3" />
        </div>
    )
}

export default Avatar
