import React from 'react'
import { Card } from './Card'

export function App(): JSX.Element {
  return (
    <main className="p-8 md:p-0 dark:bg-gray-900 dark:text-gray-200 h-screen">
      <Card />

      <form
        action="/search"
        method="get"
        className="relative focus-within:text-red-700 dark:focus-within:text-red-200 group"
      >
        <input
          type="search"
          name="q"
          className="
            border-2 border-gray-800 rounded-full py-2 px-4 pl-10 bg-transparent
            placeholder-gray-800 font-serif
            focus:ring-2 ring-offset-2 ring-gray-800
            dark:border-gray-200 dark:placeholder-gray-200 dark:ring-gray-200 dark:ring-offset-gray-900
          "
          placeholder="Search…"
          autoComplete="off"
        />
        <div
          role="presentation"
          className="absolute inset-y-0 px-2 flex items-center pointer-events-none"
        >
          <svg
            className="w-6 h-6 group-hover:text-yellow-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </form>
    </main>
  )
}
