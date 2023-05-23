'use client'

import useConversation from '../hooks/useConversation'
import useRoutes from '../hooks/useRoutes'
import MobileItem from './MobileItem'

const MobileFooter = () => {
    const routes = useRoutes()
    const { isOpen } = useConversation()

    console.log(isOpen)

    if (isOpen) {
        return null
    }
    return (
        <div
            className="fixed justify-between w-full bottom-0 z-40 flex items-center
             bg-white border-t lg:hidden"
        >
            {routes.map((route) => (
                <MobileItem {...route} key={route.label} />
            ))}
        </div>
    )
}

export default MobileFooter
