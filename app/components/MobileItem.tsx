'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { IconType } from 'react-icons'

interface MobileItemProps {
    label: string
    icon: IconType
    href: string
    onClick?: () => void
    active?: boolean
}

const MobileItem = ({
    label,
    icon: Icon,
    href,
    onClick,
    active,
}: MobileItemProps) => {
    return (
        <Link
            href={href}
            onClick={onClick}
            className={clsx(
                `group flex gap-x-3 text-2xl font-semibold items-center w-full justify-center p-4 text-gray-500
                hover:text-black hover:bg-gray-100`,
                active && 'bg-gray-100 text-black'
            )}
        >
            <Icon className="h-6 w-6" />
        </Link>
    )
}

export default MobileItem
