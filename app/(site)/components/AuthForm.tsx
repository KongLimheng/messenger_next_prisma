'use client'

import Button from '@/app/components/Button'
import Input from '@/app/components/inputs/Input'
import axios from 'axios'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { BsFacebook, BsGithub, BsGoogle } from 'react-icons/bs'
import AuthSocialButton from './AuthSocialButton'

type Variant = 'LOGIN' | 'REGISTER'

const AuthForm = () => {
    const session = useSession()
    const [variant, setVariant] = useState<Variant>('LOGIN')
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    useEffect(() => {
        if (session.status === 'authenticated') {
            console.log(session)

            router.push('/users')
        }
    }, [session.status, router])

    const toggleVariant = useCallback(() => {
        variant === 'LOGIN' ? setVariant('REGISTER') : setVariant('LOGIN')
    }, [variant])

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        },
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)
        if (variant === 'REGISTER') {
            axios
                .post('/api/register', data)
                .then(() => {
                    toast.success('Register Success')
                    signIn('credentials', data)
                })
                .catch((res) => {
                    // if (res.response.status !== 200) {
                    //     console.log(res.response.data)
                    // } else {
                    //     toast.success()
                    // }
                    toast.error('Bad request')
                    console.log(res)
                })
                .finally(() => setIsLoading(false))
            console.log(data)
        }

        if (variant === 'LOGIN') {
            signIn('credentials', {
                ...data,
                redirect: false,
            })
                .then((callback) => {
                    console.log(callback)
                    if (callback?.error) {
                        toast.error(callback.error)
                    }

                    if (callback?.ok && !callback.error) {
                        toast.success('Logged in')
                        router.push('/users')
                    }
                })
                .finally(() => setIsLoading(false))
        }
    }

    const socialAction = (action: string) => {
        setIsLoading(true)
        signIn(action, {
            redirect: false,
        })
    }

    return (
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md mx-4">
            <div className="bg-white px-4 py-8 shadow rounded-lg sm:px-10">
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    {variant === 'REGISTER' && (
                        <Input
                            label="Name"
                            register={register}
                            type="text"
                            id="name"
                            errors={errors}
                            // required
                            disabled={isLoading}
                        />
                    )}

                    <Input
                        label="Email"
                        type="email"
                        id="email"
                        register={register}
                        errors={errors}
                        // required
                        disabled={isLoading}
                    />
                    <Input
                        label="Password"
                        type="password"
                        id="password"
                        register={register}
                        errors={errors}
                        // required
                        disabled={isLoading}
                    />

                    <div>
                        <Button
                            disabled={isLoading}
                            fullWidth
                            type="submit"
                            // onClick={() => console.log('first')}
                        >
                            {variant === 'LOGIN' ? 'Sign in' : 'Register'}
                        </Button>
                    </div>
                </form>

                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute flex inset-0 items-center">
                            <div className="w-full border-t border-gray-300" />
                        </div>
                        <div className="flex justify-center text-sm relative">
                            <span className=" bg-white px-2 text-gray-500">
                                Or continue with
                            </span>
                        </div>
                    </div>
                    <div className="mt-6 flex gap-2">
                        <AuthSocialButton
                            icon={BsGithub}
                            onClick={() => socialAction('github')}
                        />
                        <AuthSocialButton
                            icon={BsGoogle}
                            onClick={() => socialAction('google')}
                        />
                        <AuthSocialButton
                            icon={BsFacebook}
                            onClick={() => socialAction('facebook')}
                        />
                    </div>
                </div>

                <div className="flex gap-2 justify-center text-sm mt-6 mx-2 text-gray-500">
                    <div>
                        {variant === 'LOGIN'
                            ? 'New to Messenger?'
                            : 'Already have an account?'}
                    </div>
                    <div
                        onClick={toggleVariant}
                        className="underline cursor-pointer"
                    >
                        {variant === 'LOGIN' ? 'Create an account' : 'Login'}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthForm
