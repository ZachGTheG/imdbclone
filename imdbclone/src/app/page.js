import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
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
            {Array.from({ length: 5 }, (_, i) => (
              <div key={i} className="bg-gray-800 p-2">
                <Image
                  src={``}
                  alt={`Movie ${i+1}`}
                  width={150}
                  height={225}
                  className="mb-2"
                />
                <h3 className="text-lg">Movie {i + 1}</h3>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-2xl mb-3">Top TV Shows</h2>
          <div className="grid grid-cols-5 gap-4">
            {Array.from({ length: 5 }, (_, i) => (
              <div key={i} className="bg-gray-800 p-2">
                <Image
                  src={``}
                  alt={`TV Show ${i+1}`}
                  width={150}
                  height={225}
                  className="mb-2"
                />
                <h3 className="text-lg">TV Show {i + 1}</h3>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
