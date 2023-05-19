import client from '@/app/libs/prismadb'
import bcrypt from 'bcrypt'
import { StatusCodes } from 'http-status-codes'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
    try {
        const { email, name, password } = await req.json()

        if (!email || !name || !password) {
            return new NextResponse('Missing Info', {
                status: StatusCodes.BAD_REQUEST,
            })
        }

        const hashPwd = await bcrypt.hash(password, 12)
        const user = await client.user.create({
            data: { email, name, hashedPassword: hashPwd },
        })

        return NextResponse.json(user, { status: StatusCodes.CREATED })
    } catch (error) {
        console.log(error, 'Register Error')
        return new NextResponse('Internal Error', {
            status: StatusCodes.INTERNAL_SERVER_ERROR,
        })
    }
}
