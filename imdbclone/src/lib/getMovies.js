import clientPromise from './databaseConnect';

const getMovies = async () => {
  const client = await clientPromise;
  const movies = await client.db("imdbclone").collection('movies').find({}).toArray();
  movies.forEach((element) => {
    element._id = element._id.toString();
});
  return movies;
}
export default getMovies;