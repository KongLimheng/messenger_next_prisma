import client from '../libs/prismadb'
import getCurrentUser from './getCurrentUser'

const getConversations = async () => {
    const currentUser = await getCurrentUser()
    if (!currentUser?.id) {
        return []
    }

    try {
        const conversations = await client.userOnConversation.findMany({
            orderBy: {
                conversations: {
                    lastMessageAt: 'desc',
                },
            },
            where: {
                userIds: {},
            },
        })
    } catch (error) {
        return []
    }
}

export default getConversations
