import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Dashboard from '../assets/icons/dashboard.svg'
import User from '../assets/icons/user.svg'
import Rifa from '../assets/icons/rifa.svg'
import Money from '../assets/icons/money.svg'

function Sidebar({ children }) {
    return (
        <div className="flex">
            <div className='fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-c justify-between'>
                <div className="flex flex-col items-center">
                    <Link href={'/'}>
                        <div className='bg-purple-800 text-white p-3 rounded-lg inline-block'>
                            <Image src={Money} />
                        </div>
                    </Link>
                    <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
                    <Link href={'/'}>
                        <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                            <Image src={Rifa} />
                        </div>
                    </Link>
                    <Link href={'/customers'}>
                        <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                            <Image src={User} />
                        </div>
                    </Link>
                    <Link href={'/orders'}>
                        <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                            <Image src={Dashboard} />
                        </div>
                    </Link>
                    <Link href={'/auth/login'}>
                        <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                            <Image src={Dashboard} />
                        </div>
                    </Link>
                </div>
            </div>
            <main className='ml-20 w-full'>{children}</main>
        </div>
    )
}

export default Sidebar