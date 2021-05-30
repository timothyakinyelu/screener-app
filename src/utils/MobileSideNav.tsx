import React from 'react';
import '../static/css/mobilesidenav.css';

const MobileSideNav: React.FC = (): JSX.Element => {
    return (
        <div className="sidenav-wrapper md:min-h-screen">
            <nav className=" sidenav right-0 inset-y-0 flex flex-col items-center justify-between w-auto md:h-screen py-6 text-white bg-indigo-700 rounded-tl-3xl">
                <div className="flex flex-col items-center content-center space-y-3">
                    <a href="#" className="text-2xl font-medium">
                        K-UI
                    </a>
                </div>
                <ul className="w-full space-y-10"></ul>
                <div>
                    <button className="p-2 transition-colors rounded-full hover:bg-indigo-900 focus:outline-none focus:ring">
                        <span className="sr-only">Logout</span>
                        <svg
                            className="w-8 h-8"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                            />
                        </svg>
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default MobileSideNav;
