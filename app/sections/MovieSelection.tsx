import { useState, useEffect } from "react";
import { MovieCard } from "../components/movieCard";
import { CResponse } from "@/interfaces/cresponse";
import { Movie } from "@/interfaces/movie";

interface MovieSelectionProps {
  titleSection : string;
  apiEndPoint : any;
  handleOpen: (movie: Movie) => void; 
}

export const MovieSelection : React.FC<MovieSelectionProps> =  ({titleSection, apiEndPoint, handleOpen}) => {
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
      const headers = { 'Authorization': 'Bearer '+ process.env.NEXT_PUBLIC_API_KEY };
      const res = await fetch(apiEndPoint, { headers })
      const json = await res.json();
      setListing(json);

      return json;
    }

    getData();
  }, []);
  return (
    <section className="flex flex-col items-start gap-12 w-full">
      <span className="text-4xl font-bold text-white px-3">{titleSection}</span>
      <div className="flex justify-start gap-8 pb-5 w-full overflow-x-auto min-h-min px-3">
        {Listing.results.slice(0,5).map((movie: Movie, i) => {
          return <MovieCard key={movie.id} movie={movie} handleOpen={handleOpen} ></MovieCard>
        })}

      </div>
    </section>
  )
}