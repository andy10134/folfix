import { ModalMovie } from "@/app/components/ModalMovie";
import Navbar from "@/app/components/navbar";
import { MovieSelection } from "@/app/sections/MovieSelection";
import { Movie } from "@/interfaces/movie";
import { useState } from "react";

export default function Page() {
  const [open, setOpen] = useState(false);
  const [movie, setMovie] = useState<Movie>({
    "adult": false,
    "backdrop_path": "",
    "genre_ids": [],
    "id": 0,
    "original_language": "",
    "original_title": "",
    "overview": "",
    "popularity": 0,
    "poster_path": "",
    "release_date": "",
    "title": "",
    "video": false,
    "vote_average": 0,
    "vote_count": 0
  });

  const handleOpen = (movie: Movie) => {
    setMovie(movie);
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return <div className="container mx-auto flex flex-col items-center md:items-start gap-14">
    <Navbar></Navbar>
    <MovieSelection titleSection="En cartelera" apiEndPoint={process.env.NEXT_PUBLIC_END_POINT_CARTELERA} handleOpen={handleOpen}></MovieSelection>
    <MovieSelection titleSection="Mejores valoradas" apiEndPoint={process.env.NEXT_PUBLIC_END_POINT_VALORADAS} handleOpen={handleOpen}></MovieSelection>
    <MovieSelection titleSection="Próximos estrenos" apiEndPoint={process.env.NEXT_PUBLIC_END_POINT_ESTRENOS} handleOpen={handleOpen}></MovieSelection>
    <ModalMovie open={open} handleClose={handleClose} movie={movie}></ModalMovie>
  </div>
}