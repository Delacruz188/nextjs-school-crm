import { GamepadIcon, UsersIcon, BarChart3Icon, MessageSquareIcon } from "lucide-react"
import Link from "next/link"
export default function LandingPage() {

    return (
        <div className="flex flex-col min-h-screen bg-white text-gray-900">
            <main className="flex-grow">
                <section className="bg-gray-50 py-20 sm:py-32">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
                                Elevate Your Game Studio Management
                            </h1>
                            <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto">
                                Streamline development, enhance player relationships, and boost your studios success with GameCRMs intuitive platform.
                            </p>
                            <div className="mt-10 flex justify-center gap-4">
                                <button className="bg-teal-700 text-white hover:bg-gray-800 px-8 py-3 rounded-full text-lg">
                                    Get Started
                                </button>
                                <button className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-full text-lg">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 sm:py-32">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                            {[
                                { icon: UsersIcon, title: "Player Management", description: "Track player data, preferences, and interactions with ease." },
                                { icon: BarChart3Icon, title: "Analytics Dashboard", description: "Gain actionable insights into player behavior and game performance." },
                                { icon: MessageSquareIcon, title: "Community Engagement", description: "Manage forums, support tickets, and player feedback efficiently." },
                                { icon: GamepadIcon, title: "Game Lifecycle", description: "Track development milestones and post-launch updates seamlessly." },
                            ].map((feature, index) => (
                                <div key={index} className="flex flex-col items-center text-center">
                                    <feature.icon className="h-12 w-12 text-gray-900 mb-4" />
                                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                    <p className="text-gray-500">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-gray-50 py-20 sm:py-32">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl font-bold mb-6">Ready to Power Up Your Studio?</h2>
                            <p className="text-xl text-gray-500 mb-10">
                                Join the growing community of game developers using GameCRM to manage their player base and streamline operations.
                            </p>
                            <form className="flex gap-4 justify-center">
                                <input
                                    className="max-w-sm flex-grow"
                                    placeholder="Enter your email"
                                    type="email"
                                />
                                <button className="bg-teal-700 text-white hover:bg-gray-800 px-8 py-3 rounded-full">
                                    Sign Up
                                </button>
                            </form>
                            <p className="mt-4 text-sm text-gray-500">
                                By signing up, you agree to our{" "}
                                <Link href="#" className="underline hover:text-gray-700">
                                    Terms & Conditions
                                </Link>
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-gray-100 py-12">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <Link href="#" className="flex items-center">
                                <GamepadIcon className="h-8 w-8 text-gray-900" />
                                <span className="ml-2 text-xl font-semibold">GameCRM</span>
                            </Link>
                        </div>
                        <nav className="flex gap-6">
                            <Link href="#" className="text-sm text-gray-500 hover:text-gray-700">Terms of Service</Link>
                            <Link href="#" className="text-sm text-gray-500 hover:text-gray-700">Privacy Policy</Link>
                            <Link href="#" className="text-sm text-gray-500 hover:text-gray-700">Contact Us</Link>
                        </nav>
                    </div>
                    <div className="mt-8 text-center text-sm text-gray-500">
                        © {new Date().getFullYear()} GameCRM. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    )
}