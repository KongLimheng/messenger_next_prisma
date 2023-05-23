'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { IconType } from 'react-icons'

interface DesktopItemProps {
    label: string
    icon: IconType
    href: string
    onClick?: () => void
    active?: boolean
}
const DesktopItem = ({
    label,
    icon: Icon,
    href,
    onClick,
    active,
}: DesktopItemProps) => {
    // const handleClick = () => {
    //     if (onclick) {
    //         return onClick()
    //     }
    // }
    return (
        <li onClick={onClick}>
            <Link
                href={href}
                className={clsx(
                    `group flex gap-x-3 rounded-md text-gray-500 p-3 text-sm items-center font-semibold
                    hover:text-black hover:bg-gray-100`,
                    active && 'bg-gray-100 text-black'
                )}
            >
                <Icon className="h-6 w-6 shrink-0" />
                <span className="sr-only">{label}</span>
            </Link>
        </li>
    )
}

export default DesktopItem
