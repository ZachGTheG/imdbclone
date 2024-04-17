'use client';
import { Card, CardHeader, CardBody, Image } from '@nextui-org/react';

export default function Movies({movies}) {
  return (
    <div>
        <header className="p-5 bg-gray-800 flex justify-between items-center">
            <h1 className="text-3xl font-bold">IMDb Clone</h1>
            <nav>
            <ul className="flex space-x-4">
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">Movies</a></li>
                <li><a href="#" className="hover:underline">TV Shows</a></li>
                <li><a href="#" className="hover:underline">Celebrities</a></li>
            </ul>
            </nav>
        </header>
        <main className="p-5">
            <section className="mb-10">
            <h2 className="text-2xl mb-3">Featured Movies</h2>
            <div className="grid grid-cols-5 gap-4">
                {movies.slice(0, 5).map((movie, i) => (
                <Card key={i} className="bg-gray-800 py-4">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <h4 className="font-bold text-lg">{movie.title}</h4>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                    <img
                        alt={movie.title}
                        className="object-cover rounded-xl"
                        src={movie.coverImg}
                        width="100%"
                        height="100%"
                        objectFit="cover"
                    />
                    </CardBody>
                </Card>
                ))}
            </div>
            </section>
        </main>
      </div>
  );
}