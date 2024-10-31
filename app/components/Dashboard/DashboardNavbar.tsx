'use client'
import Link from 'next/link'
import React from 'react'
import { GamepadIcon } from "lucide-react"
import { useState } from 'react'

export default function DashboardNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div>
            <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/90 border-b border-gray-200">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <Link href="#" className="flex items-center">
                                <GamepadIcon className="h-8 w-8 text-gray-900" />
                                <span className="ml-2 text-xl font-semibold">GameCRM</span>
                            </Link>
                        </div>
                        <div className="-mr-2 -my-2 md:hidden">
                            <button
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                <span className="sr-only">Open menu</span>
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                        <nav className="hidden md:flex space-x-10">
                            <Link href={'/'} className="text-base font-medium text-gray-500 hover:text-gray-900">Features</Link>
                            <Link href={'/'} className="text-base font-medium text-gray-500 hover:text-gray-900">Pricing</Link>
                            <Link href={'/about'} className="text-base font-medium text-gray-500 hover:text-gray-900">About</Link>
                            <Link href={'/users'} className="text-base font-medium text-gray-500 hover:text-gray-900">Users</Link>
                        </nav>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                            <div className="pt-5 pb-6 px-5">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <GamepadIcon className="h-8 w-8 text-gray-900" />
                                    </div>
                                    <div className="-mr-2">
                                        <button
                                            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <span className="sr-only">Close menu</span>
                                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <nav className="grid gap-y-8">
                                        <Link href="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                            <span className="ml-3 text-base font-medium text-gray-900">Features</span>
                                        </Link>
                                        <Link href="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                            <span className="ml-3 text-base font-medium text-gray-900">Pricing</span>
                                        </Link>
                                        <Link href="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                            <span className="ml-3 text-base font-medium text-gray-900">About</span>
                                        </Link>
                                        <Link href="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                            <span className="ml-3 text-base font-medium text-gray-900">Contact</span>
                                        </Link>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </header>
        </div>
    )
}
