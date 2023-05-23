import { Inter } from 'next/font/google'
import AuthContext from './context/AuthContext'
import ToasterContext from './context/ToasterContext'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Messanger',
    description: 'Clone',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className} suppressHydrationWarning>
                <AuthContext>
                    <ToasterContext />
                    {children}
                </AuthContext>
            </body>
        </html>
    )
}
