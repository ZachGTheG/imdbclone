import React from 'react';
import getMovies from "@/lib/getMovies";
import Movies from '@/components/movies';

export default async function Home() {
  const movies = await getMovies();

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <div className="flex-grow">
        <Movies movies={movies} />
      </div>
      <footer className="p-5 bg-gray-800 text-center">
        <p>By: Zachary Greene and Andrew Morrison</p>
      </footer>
    </div>
  );
}
