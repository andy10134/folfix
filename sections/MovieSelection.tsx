import { useState, useEffect } from "react";
import { MovieCard } from "@/components/movieCard";
import { CResponse } from "@/interfaces/cresponse";
import { Movie } from "@/interfaces/movie";


export default function MovieSelection() {
  const [Listing, setListing] = useState<CResponse>({
    "dates": {
      "maximum": "0000-00-00",
      "minimum": "0000-00-00"
    },
    "page": 0,
    "results": [],
    "total_pages": 0,
    "total_results": 0
  });

  useEffect(() => {
    const getData = async () => {
      const headers = { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0N2FjOTlkMDQ1MjY1ZDZiODQzZWU3ZTQxN2Y0ODE4ZiIsInN1YiI6IjYyMTUyOTBmMzIzZWJhMDAxZWI3Njc1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.05CExT0KbAC1DiBGzAmqFW_CrYVgk4EY-HVfpsl7v6w' };
      const res = await fetch('https://api.themoviedb.org/3/movie/now_playing', { headers })
      const json = await res.json();
      console.log(json)
      setListing(json);

      return json;
    }

    getData();
  }, []);
  return (
    <section className="flex flex-col items-start gap-12 w-full">
      <span className="text-4xl font-bold text-white px-3">En cartelera</span>
      <div className="flex justify-start gap-8 pb-5 w-full overflow-x-auto min-h-min px-3">
        {Listing.results.map((movie: Movie, i) => {
          return <MovieCard key={movie.id} movie={movie}></MovieCard>
        })}

      </div>
    </section>
  )
}