import Image from 'next/image'
import AuthForm from './components/AuthForm'

const page = () => {
    return (
        <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100">
            <div className="sm:mx-auto sm:w-full sm:max-w-md flex flex-col justify-center items-center">
                <Image
                    src="/images/logo.png"
                    alt="logo"
                    width={48}
                    height={48}
                />
                <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
            </div>

            {/* auth form */}
            <AuthForm />
        </div>
    )
}

export default page
