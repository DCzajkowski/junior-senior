import React from 'react'
import falcon from './assets/falcon.jpg'

export function Card(): JSX.Element {
  return (
    <article className="rounded-md overflow-hidden shadow-lg sm:flex md:flex-row-reverse md:shadow-none md:rounded-none">
      <figure className="relative sm:w-1/3">
        <img
          className="h-72 w-full object-cover sm:h-full"
          src={falcon}
          alt="Launch of Falcon 9"
        />
        <figcaption className="absolute bottom-2 bg-gray-800 text-white w-full text-center py-2">
          Launch of Falcon 9
        </figcaption>
      </figure>
      <div className="p-4 flex flex-col gap-4 sm:w-2/3">
        <h2 className="text-xl font-bold">SpaceX</h2>
        <p className="max-w-prose line-clamp-4 md:line-clamp-none">
          Space Exploration Technologies Corp. (SpaceX) is an American aerospace
          manufacturer and space transportation services company headquartered
          in Hawthorne, California. It was founded in 2002 by Elon Musk with the
          goal of reducing space transportation costs to enable the colonization
          of Mars. SpaceX manufactures the Falcon 9 and Falcon Heavy launch
          vehicles, several rocket engines, Dragon cargo and crew spacecraft and
          Starlink satellites.
        </p>
        <small>source: wikipedia.org</small>
      </div>
    </article>
  )
}
