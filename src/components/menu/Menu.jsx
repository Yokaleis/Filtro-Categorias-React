import { Link } from 'react-router-dom'
export function Menu() {
    return (
        <>
        <nav className="bg-transparent border-2 border-r-none border-l-none border-b-black border-t-black mb-20">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/*  <!-- Mobile menu button--> */}
                            <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-700 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>
                            
                            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            
                            <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            </button>
                        </div>
                        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
                            <div className="flex flex-shrink-0 items-center">
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                        <div className="flex space-x-4">
                            
                            <a href="#" className="text-black hover:text-gray-300 focus:text-violet-700 rounded-md px-3 py-2 text-sm font-medium" aria-current="page">
                                <Link to={"/"}>Home</Link>
                            </a>
                            <a href="#" className="text-black hover:text-gray-300 rounded-md px-3 py-2 text-sm font-medium">
                                <Link to={"blog"}>Blog</Link>
                            </a>
                            <a href="#" className="text-black hover:text-gray-300 rounded-md px-3 py-2 text-sm font-medium">
                                <Link to={"projects"}>Projects</Link>
                            </a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

        </nav>

        </>
    )
}