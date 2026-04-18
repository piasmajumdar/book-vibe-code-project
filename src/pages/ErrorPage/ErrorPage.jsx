import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-4">
            <div className="text-center max-w-xl">
                
                {/* Error Code */}
                <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    404
                </h1>

                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-semibold mt-4">
                    Oops! Page not found
                </h2>

                {/* Description */}
                <p className="text-gray-400 mt-3">
                    The page you're looking for doesn’t exist or has been moved.
                </p>

                {/* Buttons */}
                <div className="mt-6 flex justify-center gap-4">
                    <Link to="/">
                        <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition duration-300">
                            Go Home
                        </button>
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="px-6 py-2 rounded-lg border border-gray-500 hover:bg-gray-700 transition duration-300"
                    >
                        Go Back
                    </button>
                </div>

                {/* Decorative glow */}
                <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 opacity-20 blur-3xl rounded-full -z-10"></div>
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500 opacity-20 blur-3xl rounded-full -z-10"></div>
            </div>
        </div>
    );
};

export default ErrorPage;