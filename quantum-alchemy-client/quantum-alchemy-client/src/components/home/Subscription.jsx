import React from 'react';

const Subscription = () => {
    return (
        <div>

        <section className="bg-gray-50 dark:bg-gray-900">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-lg text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
            Subscribe for Exclusive Updates
            </h2>

            <p className="hidden text-gray-500 dark:text-gray-400 sm:mt-4 sm:block">
            Subscribe with your email address to receive exclusive updates on our latest products, special promotions, and more. Stay ahead of the curve and be the first to know about everything new and exciting at Quantum . Join our community of subscribers today!
            </p>
            </div>

            <div className="mx-auto mt-8 max-w-xl">
            <form action="#" className="sm:flex sm:gap-4">
                <div className="sm:flex-1">
                <label htmlFor="email" className="sr-only">Email</label>

                <input
                    type="email"
                    placeholder="Email address"
                    className="w-full rounded-md border-gray-200 bg-white p-3 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />
                </div>

                <button
                type="submit"
                className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-rose-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
                >
                <span className="text-sm font-medium"> Subscribe </span>

                <svg
                    className="h-5 w-5 rtl:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                </svg>
                </button>
            </form>
            </div>
        </div>
        </section>
        </div>
    );
};

export default Subscription;