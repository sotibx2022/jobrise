'use client'
import ResponsiveButton from '../buttons/ResponsiveButton'
import { useRouter } from 'next/navigation'
import { LogIn, UserPlus } from 'lucide-react'
import Link from 'next/link'
const Header = () => {
    const router = useRouter()
    return (
        <div className='flexBetween py-2'>
            <div className="logoArea primaryHeading">
                Logo
            </div>
            <ul className="mainMenus flexBetween gap-2">
                <li>Home</li>
                <li>Browse Jobs</li>
                <li>Training</li>
            </ul>
            <ul className="userAccess">
                <ResponsiveButton
                    text={'Login'}
                    icon={LogIn}       // optional size, adjust as needed
                    onClick={() => router.push('jobseeker/login')}
                />
                <ResponsiveButton
                    text={'Register'}
                    icon={UserPlus}
                    onClick={() => router.push('jobseeker/register')}
                />
            </ul>
            <h2 className='secondaryHeading'>
                <Link href={'/employer'}>For Employers</Link>
            </h2>
        </div>
    )
}
export default Header