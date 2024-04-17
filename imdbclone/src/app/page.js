import React from 'react';
import getMovies from "@/lib/getMovies";
import Movies from '@/components/movies';

export default async function Home() {
  const movies = await getMovies();

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Movies movies={movies} />
    </div>
  );
}
