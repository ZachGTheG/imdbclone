'use client';
import React, { useState } from 'react';
import { Card, CardHeader, CardBody, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from '@nextui-org/react';

export default function Movies({ movies }) {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <header className="p-5 bg-gray-800 flex justify-between items-center">
        <h1 className="text-3xl font-bold">IMDb Clone</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="" className="hover:underline">Home</a></li>
            <li><a href="" className="hover:underline">Movies</a></li>
            <li><a href="" className="hover:underline">TV Shows</a></li>
            <li><a href="" className="hover:underline">Celebrities</a></li>
          </ul>
        </nav>
      </header>
      <main className="p-5">
        <section className="mb-10">
          <h2 className="text-2xl mb-3">Featured Movies</h2>
          <div className="grid grid-cols-5 gap-4">
            {movies.slice(0, 5).map((movie, i) => (
              <button key={i} onClick={() => openModal(movie)} className="w-[350px] h-[300px]">
                <Card className="bg-gray-800 w-full h-full py-4 cursor-pointer">
                  <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <h4 className="font-bold text-xl text-white">{movie.title}</h4>
                  </CardHeader>
                  <CardBody className="overflow-visible py-2">
                    <img
                      alt={movie.title}
                      className="object-cover rounded-xl w-full h-full"
                      src={movie.coverImg}
                    />
                  </CardBody>
                </Card>
              </button>
            ))}
          </div>
        </section>
      </main>
      {selectedMovie && (
 <Modal isOpen={isModalOpen} onClose={closeModal} size="5xl"
 classNames={{
     base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]"
 }}
 >
   <ModalContent>
     <ModalHeader>{selectedMovie.title}</ModalHeader>
     <ModalBody>
       <div className="flex gap-4">
         <img
           alt={selectedMovie.title}
           className="object-cover rounded-xl"
           src={selectedMovie.coverImg}
           width="35%"
           height="35%"
           objectFit="cover"
         />
         <div>
           <p className="mb-4"><span className="font-semibold">Duration:</span> {selectedMovie.duration} minutes</p>
           <p className="mb-4"><span className="font-semibold">Release Year:</span> {selectedMovie.releaseYear}</p>
           <p className="mb-4"><span className="font-semibold">IMDb Rating:</span> {selectedMovie.imdbRating}/10</p>
           <p className="mb-4"><span className="font-semibold">Genres:</span> {selectedMovie.genres ? selectedMovie.genres.join(', ') : 'N/A'}</p>
           <p className="mb-4"><span className="font-semibold">Film Rating:</span> {selectedMovie.filmRating}</p>
       </div>
       </div>
       <div>
            <p className="mb-4"><span className="font-semibold">Description:</span> {selectedMovie.description || 'No description available.'}</p>
             <p className="mb-4"><span className="font-semibold">Director(s):</span> {selectedMovie.people.directors ? selectedMovie.people.directors.join(', ') : 'N/A'}</p>
             <p className="mb-4"><span className="font-semibold">Writer(s):</span> {selectedMovie.people.writers ? selectedMovie.people.writers.join(', ') : 'N/A'}</p>
             <p className="mb-4"><span className="font-semibold">Actor(s):</span> {selectedMovie.people.actors ? selectedMovie.people.actors.join(', ') : 'N/A'}</p>
           </div>
     </ModalBody>
     <ModalFooter>
       <Button color="danger" variant="light" onClick={closeModal}>
         Close
       </Button>
     </ModalFooter>
   </ModalContent>
 </Modal>
      
      )}
    </div>
  );
}
