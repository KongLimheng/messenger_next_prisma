import getCurrentUser from '@/app/actions/getCurrentUser'
import client from '@/app/libs/prismadb'
import { StatusCodes } from 'http-status-codes'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
    try {
        const currentUser = await getCurrentUser()
        const { userId, isGroup, members, name } = await req.json()

        if (!currentUser?.id || !currentUser.email) {
            return new NextResponse('Unauthorized', {
                status: StatusCodes.UNAUTHORIZED,
            })
        }

        if (isGroup && (!members || members.length < 2 || !name)) {
            return new NextResponse('Invalid Data', {
                status: StatusCodes.BAD_REQUEST,
            })
        }

        if (isGroup) {
            const newConversation = await client.conversation.create({
                data: {
                    name,
                    isGroup,
                    users: {
                        connect: [
                            ...members.map((member: { value: string }) => ({
                                id: member.value,
                            })),
                            {
                                id: currentUser.id,
                            },
                        ],
                    },
                },
                include: {
                    users: true,
                },
            })

            return NextResponse.json(newConversation)
        }

        const existingConversation = await client.userOnConversation.findMany({
            where: {
                OR: [
                    {
                        userIds: {
                            in: [currentUser.id, userId],
                        },
                    },
                    {
                        userIds: {
                            in: [userId, currentUser.id],
                        },
                    },
                ],
            },
        })

        console.log(existingConversation, '===')

        const singleConversation = existingConversation[0]

        if (singleConversation) {
            return NextResponse.json(singleConversation)
        }

        const newConversation = await client.conversation.create({
            data: {
                users: {
                    connect: [{ id: currentUser.id }, { id: userId }],
                },
            },

            include: { users: true },
        })

        return NextResponse.json(newConversation)
    } catch (error) {
        return new NextResponse('Internal Server Error', {
            status: StatusCodes.INTERNAL_SERVER_ERROR,
        })
    }
}
