import Button from '@/app/components/Button'
import clsx from 'clsx'
import { IconType } from 'react-icons'

interface AuthSocialButtonProp {
    icon: IconType
    onClick: () => void
    className?: string
}

const AuthSocialButton = ({
    icon: Icon,
    onClick,
    className,
}: AuthSocialButtonProp) => {
    return (
        // <button
        //     type="button"
        //     onClick={onClick}
        //     className="inline-flex w-full justify-center rounded-md bg-white
        //      px-4 py-2 text-gray-500 shadow-sm ring-1 ring-inset
        //      ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"
        // >
        //     <Icon />
        // </button>
        <Button
            className={clsx(
                `inline-flex w-full justify-center rounded-md bg-white
            px-4 py-2 text-gray-500 shadow-sm ring-1 ring-inset
            ring-gray-300 hover:bg-gray-50 focus:outline-offset-0`,
                className || ''
            )}
            secondary
            type="button"
            onClick={onClick}
        >
            <Icon />
        </Button>
    )
}

export default AuthSocialButton
