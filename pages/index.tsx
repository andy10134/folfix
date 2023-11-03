import Navbar from "@/components/navbar";
import MovieSelection from "@/sections/MovieSelection";

export default function Page() {
    return <div className="container mx-auto flex flex-col items-center md:items-start gap-14">
      <Navbar></Navbar>
      <MovieSelection></MovieSelection>
      <MovieSelection></MovieSelection>
      <MovieSelection></MovieSelection>
    </div>
  }