import client from '../libs/prismadb'
import getSession from './getSession'

const getUsers = async () => {
    const session = await getSession()

    if (!session?.user?.email) {
        return []
    }

    try {
        const users = await client.user.findMany({
            orderBy: {
                createAt: 'desc',
            },
            where: {
                NOT: {
                    email: session.user.email,
                },
            },
        })

        return users
    } catch (error) {
        console.log(error, 'from getusers.tsx')
        return []
    }
}
export default getUsers
